export interface ChildInfo {
  name: string
  age: number
  interests: string[]
  colors: string[]
}

export interface PartyTheme {
  id: string
  name: string
  description: string
  colors: string[]
  icon: string
  matchScore?: number
}

export interface Guest {
  id: string
  name: string
  email?: string
  phone?: string
  type: 'ADULT' | 'CHILD' | 'FAMILY' | 'COUPLE'
  status: RSVPStatus
  dietaryReqs?: string
  isVip: boolean
  notes?: string
}

export type RSVPStatus = 
  | 'PENDING'
  | 'INVITED'
  | 'SENT'
  | 'DELIVERED'
  | 'OPENED'
  | 'RESPONDED'
  | 'YES'
  | 'NO'
  | 'MAYBE'

export interface Party {
  id: string
  childName: string
  childAge: number
  interests: string[]
  colors: string[]
  theme?: string
  date?: Date
  location?: string
  notes?: string
  status: PartyStatus
  guests: Guest[]
}

export type PartyStatus = 'PLANNING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED'

export interface Task {
  id: string
  title: string
  description?: string
  category: TaskCategory
  dueDate?: Date
  completed: boolean
}

export type TaskCategory = 
  | 'BOOKING'
  | 'SHOPPING'
  | 'DECORATIONS'
  | 'FOOD'
  | 'INVITATIONS'
  | 'ENTERTAINMENT'
  | 'DAY_OF'

export type PlanType = 'STARTER' | 'PLUS' | 'PRO'

export interface Plan {
  id: PlanType
  name: string
  price: number
  description: string
  features: string[]
  limits: {
    guests: number
    parties: number
  }
}
