import React, { forwardRef } from "react"
import { menuContainerWidth } from "../../constants/styles"
import { IMenuItem, IMenu } from "../../interfaces"
import useMenuStore from "../../stores/menu"
import { MenuItem, StyledMenu } from "./style"

type Props = {
  menu: IMenu
}

const Menu = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const setMenuVisible = useMenuStore((state) => state.setVisible)
  const menuItemClickHandler = (menuItem: IMenuItem) => {
    menuItem.action()
    if (!menuItem.keepOpen) setMenuVisible(false)
  }

  // Updating posX if the menu is out of the page
  let posX = props.menu.posX
  const menuRight = props.menu.posX + menuContainerWidth
  const bodyWidth = document.body.clientWidth
  if (menuRight > bodyWidth) {
    const bufferWidth = 10
    posX = bodyWidth - menuContainerWidth - bufferWidth
  }

  if (!props.menu.visible) return <></>

  return (
    <StyledMenu ref={ref} left={posX} top={props.menu.posY}>
      {props.menu.items.map((menuItem, index) => {
        return (
          <MenuItem
            key={`menu-item-${index}`}
            onClick={() => menuItemClickHandler(menuItem)}
          >
            {menuItem.item}
          </MenuItem>
        )
      })}
    </StyledMenu>
  )
})

export default Menu
