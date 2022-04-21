export interface Sub {
    nick: string
    avatar: string
    subMonths: number
    description?: string
}

export interface AppState {
    subs: Sub[]
    newSubsNumber: number
}