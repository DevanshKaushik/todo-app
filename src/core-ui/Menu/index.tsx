import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import offsetOverflowPosition from "../../helpers/offsetOverflowPosition"
import { IMenuItem, IMenu } from "../../interfaces"
import useMenuStore from "../../stores/menu"
import { MenuDropdown, MenuItem, StyledMenu } from "./styles"

type Props = {
  menu: IMenu
}

const Menu: FunctionComponent<Props> = (props) => {
  const setMenuVisible = useMenuStore((state) => state.setVisible)
  const [activeDropdownMenuItem, setActiveDropdownMenuItem] =
    useState<IMenuItem | null>(null)

  const isDropdownActive = (menuItem: IMenuItem) =>
    activeDropdownMenuItem === menuItem

  const menuItemClickHandler = (menuItem: IMenuItem) => {
    menuItem.action()
    if (menuItem.dropdown) setActiveDropdownMenuItem(menuItem)
    if (menuItem.keepOpen || menuItem.dropdown) return
    setMenuVisible(false)
  }

  // Upading menu positions when they are out of the page
  const menuRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const { current } = menuRef
    if (!current) return
    offsetOverflowPosition(current)
  }, [props.menu.visible])

  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const { current } = dropdownRef
    if (!current) return
    offsetOverflowPosition(current)
  }, [activeDropdownMenuItem])

  // Handling menu close on click outside of it
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { current } = menuRef
      if (!current) return
      if (!current.contains(e.target as Node)) {
        setMenuVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [setMenuVisible])

  // Reseting active dropdown if the menu is not visible
  useEffect(() => {
    if (!props.menu.visible) {
      setActiveDropdownMenuItem(null)
    }
  }, [props.menu.visible])

  return (
    <StyledMenu
      ref={menuRef}
      left={props.menu.posX}
      top={props.menu.posY}
      visible={props.menu.visible}
    >
      {props.menu.items.map((menuItem, index) => {
        return (
          <MenuItem
            key={`menu-item-${index}`}
            active={isDropdownActive(menuItem)}
            onClick={() => menuItemClickHandler(menuItem)}
          >
            {menuItem.item}
            {menuItem.dropdown && (
              <>
                <span>&gt;</span>
                {isDropdownActive(menuItem) && (
                  <MenuDropdown
                    onClick={(e) => e.stopPropagation()}
                    ref={dropdownRef}
                  >
                    {menuItem.dropdown}
                  </MenuDropdown>
                )}
              </>
            )}
          </MenuItem>
        )
      })}
    </StyledMenu>
  )
}

export default Menu
