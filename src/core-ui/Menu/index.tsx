import React, { forwardRef } from "react"
import { menuContainerWidth } from "../../constants/styles"
import { IMenuItem } from "../../interfaces"
import useMenuStore from "../../stores/menu"
import { MenuItem, StyledMenu } from "./style"

type Props = {
  menuItems: IMenuItem[]
  posX: number
  posY: number
  visible: boolean
}

const Menu = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const setMenuVisible = useMenuStore((state) => state.setMenuVisible)
  const menuItemClickHandler = (menuItem: IMenuItem) => {
    menuItem.action()
    if (!menuItem.keepOpen) setMenuVisible(false)
  }

  // Updating posX if the menu is out of the page
  let posX = props.posX
  const menuRight = props.posX + menuContainerWidth
  const bodyWidth = document.body.clientWidth
  if (menuRight > bodyWidth) {
    const bufferWidth = 10
    posX = bodyWidth - menuContainerWidth - bufferWidth
  }

  if (!props.visible) return <></>

  return (
    <StyledMenu ref={ref} left={posX} top={props.posY}>
      {props.menuItems.map((menuItem) => {
        return (
          <MenuItem onClick={() => menuItemClickHandler(menuItem)}>
            {menuItem.item}
          </MenuItem>
        )
      })}
    </StyledMenu>
  )
})

export default Menu
