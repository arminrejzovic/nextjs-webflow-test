export interface Credentials {
  "apiKey": string | null
  "companyId": string | null
}

export interface Company {
  "id": string
  "name": string
  "first4CharactersOfKey": string
  "expirationDate": string
}

export interface Companies {
  "companies": Company[]
}