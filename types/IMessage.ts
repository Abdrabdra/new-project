
export interface IMessage {
    id: number
    message: string
    read: boolean
}

export interface IMessagesResponse {
  count: number
  notifications: IMessage[]
}