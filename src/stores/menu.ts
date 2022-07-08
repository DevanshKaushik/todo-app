import create from "zustand"
import { IMenuItem } from "../interfaces"

interface MenuState {
  menuItems: IMenuItem[]
  menuVisible: boolean
  menuPosX: number
  menuPosY: number
  setMenuItems: (menuItems: IMenuItem[]) => void
  setMenuVisible: (menuVisible: boolean) => void
  setMenuPosX: (menuPosX: number) => void
  setMenuPosY: (menuPosY: number) => void
}

const useMenuStore = create<MenuState>((set) => ({
  menuItems: [],
  menuVisible: false,
  menuPosX: 0,
  menuPosY: 0,
  setMenuItems: (menuItems: IMenuItem[]) =>
    set(() => ({ menuItems: menuItems })),
  setMenuVisible: (menuVisible: boolean) =>
    set(() => ({ menuVisible: menuVisible })),
  setMenuPosX: (menuPosX: number) => set(() => ({ menuPosX: menuPosX })),
  setMenuPosY: (menuPosY: number) => set(() => ({ menuPosY: menuPosY })),
}))

export default useMenuStore
