export interface EmployeeBio {
  title: string
  description: string
}

export interface AwardItem {
  icon?: string
  title: string
  description?: string
}

export interface UserAreaItem {
  name: string
  slug: string
}

export interface UserLocationItem {
  name: string
  slug: string
  areas: UserAreaItem[]
}

export type EmployeeRole = 'designer' | 'installer' | 'other'

export interface UserItem {
  firstName: string
  lastName: string
  slug: string
  employeeRole: EmployeeRole
  employeeTitle?: string
  profileImage?: string
  employeeBio?: EmployeeBio
  awards?: AwardItem[]
  rating?: number
  locations: UserLocationItem[]
}

export interface UsersApiPayload {
  users: UserItem[]
}


