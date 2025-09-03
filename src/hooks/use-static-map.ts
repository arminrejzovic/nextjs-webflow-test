import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import html2canvas from 'html2canvas'
import { useCallback, useEffect, useRef, useState } from 'react'

export interface StaticMapOptions {
	centerLat: number
	centerLon: number
	radiusMeters: number
	mapId: string
	apiKey: string
	zoom?: number
	size?: string
	scale?: number
	mapType?: string
	numPoints?: number
	strokeColor?: string
	strokeWeight?: number
	fillColor?: string
}

interface Coordinates {
	lat: number
	lng: number
}

interface UseStaticMapReturn {
	mapUrl: string
	isLoading: boolean
	error: string
}

interface UseZipCodeGeocodingReturn {
	locations: Coordinates[]
	isLoading: boolean
	error: string | null
	center: Coordinates | null
	radius: number
}

/**
 * Generates a Google Static Maps URL with a circle polygon.
 */
export function generateStaticMapWithCircle(options: StaticMapOptions): string {
	const {
		centerLat,
		centerLon,
		radiusMeters,
		mapId,
		apiKey,
		zoom = 12,
		size = "640x300",
		scale = 2,
		mapType = "roadmap",
		numPoints = 100,
		strokeColor = "0x35526A",
		strokeWeight = 2,
		fillColor = "transparent",
	} = options

	// Validate essential parameters
	const missingParams = []
	if (!centerLat) missingParams.push('centerLat')
	if (!centerLon) missingParams.push('centerLon')
	if (!radiusMeters) missingParams.push('radiusMeters')
	if (!mapId) missingParams.push('mapId')
	if (!apiKey) missingParams.push('apiKey')
	
	if (missingParams.length > 0) {
		throw new Error(
			`Missing required parameters: ${missingParams.join(', ')}. This usually means geocoding failed due to API key restrictions.`
		)
	}

	const points: string[] = []
	for (let i = 0; i <= numPoints; i++) {
		const angle = (2 * Math.PI * i) / numPoints

		// Approximate conversion from meters to degrees latitude/longitude
		// 1 degree latitude is approximately 111,139 meters
		// 1 degree longitude is approximately cos(latitude) * 111,320 meters
		const latOffset = (radiusMeters * Math.cos(angle)) / 111139
		const lonOffset =
			(radiusMeters * Math.sin(angle)) /
			(111320 * Math.cos((centerLat * Math.PI) / 180))

		const pointLat = centerLat + latOffset
		const pointLon = centerLon + lonOffset
		points.push(`${pointLat},${pointLon}`)
	}

	// Join points with '|' for the URL's path parameter
	const pathPointsString = points.join("|")

	// Apply circle styles to the path parameters
	// Note: Google Static Maps API doesn't support CSS properties like box-shadow directly
	// The visual effect will be achieved through the stroke and fill colors
	const pathParam = `path=color:${strokeColor}%7Cweight:${strokeWeight}%7Cfillcolor:${fillColor}%7C${encodeURIComponent(
		pathPointsString
	)}`

	// Base URL for Static Maps API
	let baseUrl = "https://maps.googleapis.com/maps/api/staticmap?"

	// Construct query parameters
	const params = [
		`size=${size}`,
		`scale=${scale}`,
		`maptype=${mapType}`,
		`map_id=${mapId}`,
		pathParam,
		`key=${apiKey}`,
		`zoom=${zoom}`,
	]

	// Join all parameters with '&'
	return baseUrl + params.join("&")
}

/**
 * Calculates the distance between two lat/lon coordinates in meters using the Haversine formula.
 */
function haversineDistance(
	coords1: { lat: number; lon: number },
	coords2: { lat: number; lon: number }
): number {
	const R = 6371e3 // Earth's radius in meters
	const phi1 = (coords1.lat * Math.PI) / 180
	const phi2 = (coords2.lat * Math.PI) / 180
	const deltaPhi = ((coords2.lat - coords1.lat) * Math.PI) / 180
	const deltaLambda = ((coords2.lon - coords1.lon) * Math.PI) / 180

	const a =
		Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
		Math.cos(phi1) *
			Math.cos(phi2) *
			Math.sin(deltaLambda / 2) *
			Math.sin(deltaLambda / 2)
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

	return R * c
}

interface GeocodingResponse {
	status: string
	results: Array<{
		geometry: {
			location: {
				lat: number
				lng: number
			}
		}
	}>
	error_message?: string
}

/**
 * Geocodes a single address (like a ZIP code) using the Google Geocoding API.
 */
async function geocodeAddress(address: string, apiKey: string): Promise<Coordinates | null> {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
		address
	)}&components=country:US&key=${apiKey}`

	console.log(`Geocoding ${address} with URL:`, url.replace(apiKey, 'API_KEY_HIDDEN'))

	try {
		const response = await fetch(url)
		const data = await response.json() as GeocodingResponse
		
		console.log(`Geocoding response for ${address}:`, {
			status: data.status,
			resultsCount: data.results?.length || 0,
			errorMessage: data.error_message
		})

		if (data.status === "OK" && data.results.length > 0) {
			const location = data.results[0].geometry.location
			console.log(`Successfully geocoded ${address}:`, location)
			return location // { lat, lng }
		} else {
			console.warn(`Geocoding failed for ${address}: ${data.status}`, data.error_message || '')
			return null
		}
	} catch (error) {
		console.error(`Error geocoding address ${address}:`, error)
		return null
	}
}

/**
 * Custom hook for generating Google Static Maps with circle polygons from ZIP codes.
 */
export function useStaticMap(
	zipCodes: string[],
	apiKey: string,
	mapId: string,
	zoom?: number
): UseStaticMapReturn {
	const [mapUrl, setMapUrl] = useState<string>("")
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string>("")

	useEffect(() => {
		const createMapFromZipCodes = async () => {
			try {
				setIsLoading(true)
				setError("")

				// 1. Geocode all ZIP codes to get their coordinates
				console.log("Geocoding postal codes...")
				const geocodePromises = zipCodes.map((zip) =>
					geocodeAddress(zip, apiKey)
				)

				const locations = (await Promise.all(geocodePromises)).filter(
					(loc) => loc !== null
				) as Coordinates[]

				if (locations.length === 0) {
					throw new Error("Could not geocode any of the provided ZIP codes. This may be due to API key restrictions. Please check that your API key has geocoding permissions and no referer restrictions.")
				}
				console.log(`Successfully geocoded ${locations.length} ZIP codes.`)

				// 2. Calculate the geometric center of all points
				const center = locations.reduce(
					(acc, loc) => {
						acc.lat += loc.lat
						acc.lng += loc.lng
						return acc
					},
					{ lat: 0, lng: 0 }
				)
				center.lat /= locations.length
				center.lng /= locations.length

				// 3. Find the farthest point from the center to determine the radius
				const maxDistance = Math.max(
					...locations.map((loc) =>
						haversineDistance(
							{ lat: center.lat, lon: center.lng },
							{ lat: loc.lat, lon: loc.lng }
						)
					)
				)

				// Add a 10% buffer to the radius to ensure all points are comfortably inside
				const radiusMeters = maxDistance * 1.1

				// 4. Generate the static map URL with the calculated circle
				console.log("Generating static map with parameters:", {
					centerLat: center.lat,
					centerLon: center.lng,
					radiusMeters: radiusMeters,
					mapId: mapId,
					apiKey: apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined'
				})

				const generatedMapUrl = generateStaticMapWithCircle({
					centerLat: center.lat,
					centerLon: center.lng,
					radiusMeters: radiusMeters,
					mapId: mapId,
					apiKey: apiKey,
					zoom: zoom,
				})

				setMapUrl(generatedMapUrl)
				console.log("Generated Static Map URL:", generatedMapUrl)
			} catch (error) {
				console.error("Error creating map from ZIP codes:", error)
				setError(error instanceof Error ? error.message : "Failed to generate map")
			} finally {
				setIsLoading(false)
			}
		}

		if (zipCodes.length > 0 && apiKey && mapId) {
			createMapFromZipCodes()
		}
	}, [zipCodes, apiKey, mapId, zoom])

	return { mapUrl, isLoading, error }
}

/**
 * Custom hook for geocoding ZIP codes using direct Google Geocoding API
 * This provides better error handling and works independently of the map component
 */
export function useZipCodeGeocodingDirect(zipCodes: string[]): UseZipCodeGeocodingReturn {
	const [locations, setLocations] = useState<Coordinates[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [center, setCenter] = useState<Coordinates | null>(null)
	const [radius, setRadius] = useState(0)

	useEffect(() => {
		if (zipCodes.length === 0) return

		const geocodeZipCodes = async () => {
			try {
				setIsLoading(true)
				setError(null)
				console.log('Starting geocoding for ZIP codes:', zipCodes)

				const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
				if (!apiKey) {
					throw new Error('Google Maps API key is not configured')
				}

				const results: Coordinates[] = []

				// Process zip codes sequentially to avoid rate limiting
				for (const zipCode of zipCodes) {
					try {
						console.log(`Geocoding ZIP code: ${zipCode}`)
						
						const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
							zipCode
						)}&components=country:US&key=${apiKey}`

						const response = await fetch(url)
						const data = await response.json() as GeocodingResponse
						
						console.log(`Geocoding response for ${zipCode}:`, {
							status: data.status,
							resultsCount: data.results?.length || 0,
							errorMessage: data.error_message
						})

						if (data.status === "OK" && data.results.length > 0) {
							const location = data.results[0].geometry.location
							results.push({
								lat: location.lat,
								lng: location.lng
							})
							console.log(`Successfully geocoded ${zipCode}:`, location)
						} else {
							console.warn(`Geocoding failed for ${zipCode}: ${data.status}`, data.error_message || '')
						}
					} catch (err) {
						console.error(`Error geocoding ${zipCode}:`, err)
						// Continue with other zip codes instead of failing completely
					}
				}

				console.log(`Geocoding completed. Valid results: ${results.length}/${zipCodes.length}`)

				if (results.length === 0) {
					throw new Error('Could not geocode any of the provided ZIP codes. This may be due to API key restrictions. Please check that your API key has geocoding permissions and no referer restrictions.')
				}

				// Calculate center point
				const calculatedCenter = results.reduce(
					(acc, loc) => ({
						lat: acc.lat + loc.lat / results.length,
						lng: acc.lng + loc.lng / results.length
					}),
					{ lat: 0, lng: 0 }
				)

				// Calculate radius (maximum distance from center)
				const calculatedRadius = Math.max(
					...results.map(loc =>
						haversineDistance(
							{ lat: calculatedCenter.lat, lon: calculatedCenter.lng },
							{ lat: loc.lat, lon: loc.lng }
						)
					)
				) * 1.1 // Add 10% buffer

				console.log('Calculated center:', calculatedCenter)
				console.log('Calculated radius (meters):', calculatedRadius)

				setLocations(results)
				setCenter(calculatedCenter)
				setRadius(calculatedRadius)

			} catch (err) {
				console.error('Error in useZipCodeGeocodingDirect:', err)
				setError(err instanceof Error ? err.message : 'Failed to geocode ZIP codes')
			} finally {
				setIsLoading(false)
			}
		}

		geocodeZipCodes()
	}, [zipCodes])

	return { locations, isLoading, error, center, radius }
}

/**
 * Custom hook for geocoding ZIP codes using @vis.gl/react-google-maps
 * This provides better error handling and integrates with the Maps API more efficiently
 */
export function useZipCodeGeocoding(zipCodes: string[]): UseZipCodeGeocodingReturn {
	const [locations, setLocations] = useState<Coordinates[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [center, setCenter] = useState<Coordinates | null>(null)
	const [radius, setRadius] = useState(0)
	
	const map = useMap()
	const mapsLibrary = useMapsLibrary('geocoding')

	useEffect(() => {
		if (!map || !mapsLibrary || zipCodes.length === 0) return

		const geocodeZipCodes = async () => {
			try {
				setIsLoading(true)
				setError(null)

				const geocoder = new mapsLibrary.Geocoder()
				const results: Coordinates[] = []

				// Process zip codes in batches to avoid rate limiting
				for (const zipCode of zipCodes) {
					try {
						const result = await new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
							geocoder.geocode(
								{
									address: zipCode,
									componentRestrictions: {
										country: 'US',
										postalCode: zipCode
									}
								},
								(results, status) => {
									if (status === mapsLibrary.GeocoderStatus.OK && results) {
										resolve(results)
									} else {
										reject(new Error(`Geocoding failed for ${zipCode}: ${status}`))
									}
								}
							)
						})

						if (result.length > 0) {
							const location = result[0].geometry.location
							results.push({
								lat: location.lat(),
								lng: location.lng()
							})
						}
					} catch (err) {
						console.warn(`Failed to geocode ${zipCode}:`, err)
						// Continue with other zip codes instead of failing completely
					}
				}

				if (results.length === 0) {
					throw new Error('Could not geocode any of the provided ZIP codes')
				}

				// Calculate center point
				const calculatedCenter = results.reduce(
					(acc, loc) => ({
						lat: acc.lat + loc.lat / results.length,
						lng: acc.lng + loc.lng / results.length
					}),
					{ lat: 0, lng: 0 }
				)

				// Calculate radius (maximum distance from center)
				const calculatedRadius = Math.max(
					...results.map(loc =>
						haversineDistance(
							{ lat: calculatedCenter.lat, lon: calculatedCenter.lng },
							{ lat: loc.lat, lon: loc.lng }
						)
					)
				) * 1.1 // Add 10% buffer

				setLocations(results)
				setCenter(calculatedCenter)
				setRadius(calculatedRadius)

			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to geocode ZIP codes')
			} finally {
				setIsLoading(false)
			}
		}

		geocodeZipCodes()
	}, [map, mapsLibrary, zipCodes])

	return { locations, isLoading, error, center, radius }
}

/**
 * Custom hook for taking screenshots of interactive maps
 */
export function useMapScreenshot() {
	const [screenshotUrl, setScreenshotUrl] = useState<string>("")
	const [isCapturing, setIsCapturing] = useState(false)
	const mapRef = useRef<HTMLDivElement>(null)

	const takeScreenshot = useCallback(async (delay: number = 3000) => {
		if (!mapRef.current || isCapturing) return

		try {
			setIsCapturing(true)
			
			// Wait for the map to fully render
			await new Promise(resolve => setTimeout(resolve, delay))
			
			const canvas = await html2canvas(mapRef.current, {
				useCORS: true,
				allowTaint: true,
				backgroundColor: null,
				scale: 2, // Higher quality
				logging: false,
				ignoreElements: (element) => {
					// Skip Google's watermark and controls
					return element.classList.contains('gm-style-cc') || 
					       element.classList.contains('gmnoprint') ||
					       element.classList.contains('gm-style-moc') ||
					       element.classList.contains('gm-style-mtc')
				}
			})
			
			const dataURL = canvas.toDataURL('image/png', 0.95)
			setScreenshotUrl(dataURL)
		} catch (error) {
			console.error('Failed to capture map screenshot:', error)
		} finally {
			setIsCapturing(false)
		}
	}, [isCapturing])

	const resetScreenshot = useCallback(() => {
		setScreenshotUrl("")
	}, [])

	return {
		screenshotUrl,
		isCapturing,
		takeScreenshot,
		resetScreenshot,
		mapRef
	}
} 