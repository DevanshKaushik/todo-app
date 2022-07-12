import { IMenuItem } from "../interfaces"
import useMenuStore from "../stores/menu"

export const useMenuButton = (menuItems: IMenuItem[]) => {
  const setMenuItems = useMenuStore((state) => state.setItems)
  const setMenuVisible = useMenuStore((state) => state.setVisible)
  const setMenuPosX = useMenuStore((state) => state.setPosX)
  const setMenuPosY = useMenuStore((state) => state.setPosY)

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
