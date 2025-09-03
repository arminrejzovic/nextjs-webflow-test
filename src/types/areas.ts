import {UserItem} from "@/types/users";

export interface AreaLocation {
  "name": string
  "slug": string
}

export interface AreaPostalCode {
  "postalCode": string
  "city": string
  "state": string
}

export interface Area {
  "name": string
  "slug": string
  "description": string
  "locations": AreaLocation[]
  "postalCodes": AreaPostalCode[]
}

export interface AreaFull extends Area {
  "users": UserItem[]
}

export interface AreaPayload {
  "areas": Area[]
}

export interface AreaPayloadFull {
  "areas": AreaFull[]
}