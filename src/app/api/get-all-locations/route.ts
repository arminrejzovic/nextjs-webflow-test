import { Location, LocationsApiResponse } from '@/types/map'

export async function GET () {
	const apiUrl = process.env.CLOSETWORLD_LOCATIONS_API_URL

	if (!apiUrl) {
		return new Response(JSON.stringify({ success: false, data: [], error: 'API URL not configured' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		})
	}

	try {
		const res = await fetch(apiUrl)
		if (!res.ok) {
			throw new Error('Failed to fetch locations')
		}
		const json: LocationsApiResponse = await res.json()
		const activeLocations: Location[] = json.data.filter(loc => loc.active)
		return new Response(JSON.stringify({ success: true, data: activeLocations }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		})
	} catch (err) {
		return new Response(JSON.stringify({ success: false, data: [], error: 'Failed to fetch locations' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		})
	}
}