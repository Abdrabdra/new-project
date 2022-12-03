export interface ISpec {
  id: number,
  title: string
}

export interface ISpecValue {
  id: number
  value: string
  title: ISpec
}

export interface ISpecList {
  id: number
  title: string
  values: {
    id: number
    value: string
  }[]
}