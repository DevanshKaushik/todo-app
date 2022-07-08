import { IMenuItem } from "../interfaces"
import useMenuStore from "../stores/menu"

export const useMenuButton = (menuItems: IMenuItem[]) => {
  const setMenuItems = useMenuStore((state) => state.setMenuItems)
  const setMenuVisible = useMenuStore((state) => state.setMenuVisible)
  const setMenuPosX = useMenuStore((state) => state.setMenuPosX)
  const setMenuPosY = useMenuStore((state) => state.setMenuPosY)

  const menuButtonClickHandler = (e: React.MouseEvent) => {
    const boundingRect = e.currentTarget.getBoundingClientRect()

    // Calculating the offset caused by scrolling on the y axis
    const scrollYOffset =
      document.documentElement.scrollTop || window.pageYOffset
    const bufferPosY = 5

    setMenuItems(menuItems)
    setMenuVisible(true)
    setMenuPosX(boundingRect.x)
    setMenuPosY(boundingRect.bottom + scrollYOffset + bufferPosY)
  }

  return { menuButtonClickHandler }
}
