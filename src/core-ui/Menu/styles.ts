import styled from "styled-components"
import { borderRadius, colors, paddings, widths } from "../../constants/styles"

type StyledMenuProps = {
  top: number
  left: number
  visible: boolean
}

type MenuItemProps = {
  active: boolean
}

export const StyledMenu = styled.ul<StyledMenuProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${widths.menuWidth}px;
  z-index: 10;
  background-color: ${colors.menuColor};
  box-shadow: -5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius.defaultBorderRadius};
  padding: ${paddings.smallPadding} 0;
  display: ${(props) => (props.visible ? "unset" : "none")};
`

export const MenuItem = styled.li<MenuItemProps>`
  position: relative;
  font-size: 1.4rem;
  padding: 0.5rem ${paddings.defaultPadding};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.active ? colors.primaryColor : "")};

  &:hover {
    background-color: ${colors.primaryColor};
  }
`

export const MenuDropdown = styled.div`
  z-index: 5;
  position: absolute;
  cursor: default;
  top: 0px;
  left: calc(100% + 5px);
`
