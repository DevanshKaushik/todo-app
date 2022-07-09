import { IMenuItem } from "./menuItem"

export interface IMenu {
  items: IMenuItem[]
  visible: boolean
  posX: number
  posY: number
}
