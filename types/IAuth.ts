export interface ILogin {
    email: string
    password: string
}

export interface IRegistration {
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
}


export interface IAuthResponse {
    access_token: string
    refresh_token: string
    user: IUser
}

export interface IUser {
    id: number
    activated: boolean
    activationLink: string
    blocked: boolean
    avatar: string | null
    email: string
    phone: string
    firstName: string
    lastName: string
    roles: Role[]
}

export interface Role {
    id: number
    value: string
    description: string
}