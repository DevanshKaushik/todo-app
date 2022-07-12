export type IMenuItem = {
  name: string
  action: () => void
  keepOpen?: boolean
  dropdown?: JSX.Element
}

export interface IMenu {
  items: IMenuItem[]
  visible: boolean
  posX: number
  posY: number
}
