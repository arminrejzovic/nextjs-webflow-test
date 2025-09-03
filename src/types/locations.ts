export interface BusinessType {
  franchise: boolean
}

export interface Address {
  address1: string
  address2?: string | null
  city: string
  state: string
  shortState: string
  zip: string
  country: string
}

export interface ContactInformation {
  callCenterNumber?: string
  customerServiceNumber?: string
  officeNumber?: string
  email?: string
}

export interface OpeningHour {
  dayOfWeek: string
  openTime: string | null
  closeTime: string | null
  isClosed: boolean
}

export interface SchedulingHour {
  dayOfWeek: string
  cutOffTime: string | null
  isAcceptingAppointments: boolean
  daysOut: number | null
}

export interface HolidayOpeningHour {
  date: string
  holidayName: string
  openTime: string | null
  closeTime: string | null
  isClosed: boolean
}

export interface HolidaySchedulingHour {
  date: string
  holidayName: string
  cutOffTime: string | null
  isAcceptingAppointments: boolean
}

export interface BusinessLinks {
  financingLink?: string
  paymentLink?: string
}

export interface ReviewLinks {
  google?: {
    placeId?: string
    link?: string
  }
  yelp?: { link?: string }
  facebook?: { link?: string }
  bbb?: { link?: string }
}

export interface SocialMediaLinks {
  twitter?: string
  instagram?: string
  tiktok?: string
  pinterest?: string
  youtube?: string
  facebook?: string
  linkedin?: string
}

export interface ConnectedArea {
  areaName: string
  slug: string
}

export interface Employee {
  profileImage?: string
  name: string
  slug: string
  title?: string
  rating?: number
}

export interface EmployeeApi {
  users: Employee[]
}

export interface EmployeeGroup {
  groupName: string
  employees: Employee[]
}

export interface VideoItem {
  title: string
  description?: string
  url: string
  thumbnailImage?: string
  careerVideo?: boolean
}

export interface NewsItem {
  title: string
  description?: string
  url: string
  thumbnailImage?: string
}

export interface BlogMetaData {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}

export interface BlogPostItem {
  title: string
  description?: string
  body?: string
  previewImage?: string
  image?: string
  clientStory: boolean
  clientID: number | string | null
  metaData?: BlogMetaData
}

export interface MediaContent {
  videoGallery?: VideoItem[]
  inTheNews?: NewsItem[]
  blogPosts?: BlogPostItem[]
}

export interface LocationApiLocation {
  locationId: string
  locationExternalId?: string
  businessType: BusinessType
  rating?: number
  mainImage?: string | string[]
  locationName: string
  slug: string
  description?: string
  address: Address
  contactInformation?: ContactInformation
  openingHours?: OpeningHour[]
  schedulingHours?: SchedulingHour[]
  holidayOpeningHours?: HolidayOpeningHour[]
  holidaySchedulingHours?: HolidaySchedulingHour[]
  businessLinks?: BusinessLinks
  reviewLinks?: ReviewLinks
  socialMedia?: SocialMediaLinks
  areasConnected?: ConnectedArea[]
  employeeGroups?: EmployeeGroup[]
  hiringLink?: string
  media?: MediaContent
}

export interface LocationsApiPayload {
  locations: LocationApiLocation[]
}


