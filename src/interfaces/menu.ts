export type IMenuItem = {
  item: React.ReactNode
  keepOpen?: boolean
  action: () => void
}

export interface IMenu {
  items: IMenuItem[]
  visible: boolean
  posX: number
  posY: number
}
