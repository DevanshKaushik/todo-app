import create from "zustand"
import { IMenuItem } from "../interfaces"
import { IMenu } from "../interfaces/menu"

interface MenuState extends IMenu {
  setItems: (items: IMenuItem[]) => void
  setVisible: (visible: boolean) => void
  setPosX: (posX: number) => void
  setPosY: (posY: number) => void
}

const useMenuStore = create<MenuState>((set) => ({
  items: [],
  visible: false,
  posX: 0,
  posY: 0,
  setItems: (items: IMenuItem[]) => set(() => ({ items: items })),
  setVisible: (visible: boolean) => set(() => ({ visible: visible })),
  setPosX: (posX: number) => set(() => ({ posX: posX })),
  setPosY: (posY: number) => set(() => ({ posY: posY })),
}))

export default useMenuStore
