export interface IFeedback {
  id: number
  rating: 4
  comment: string
  createdAt: string
  updateAt: string
}

export interface IFeedbackResponse {
  count: number
  feedback: IFeedback[]
}