export interface LocationData {
	id: string
	name: string
	rating: number
	isOpen: boolean
	closingTime?: string
	hours: {
		day: string
		time: string
	}[]
	address: string
	phone: string
	tags: string[]
	showWalkIns?: boolean
	lat: number
	lng: number
}

export interface Location {
	id: number
	location: string
	date_start: string
	date_end: string | null
	name: string
	label: string
	address_type_id: number
	address: string
	address1: string
	city: string
	state: string
	zip: string
	phone_area_code: string
	phone: string
	fax_area_code: string
	fax: string
	content: string
	image: string
	active: boolean
	redirect: boolean
	slug: string
	latitude: string
	longitude: string
	meta_title: string
	meta_keywords: string
	meta_description: string
	footer_keywords: string
}

export interface LocationsApiResponse {
	success: boolean
	data: Location[]
} 