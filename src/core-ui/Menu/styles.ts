import styled from "styled-components"
import { borderRadius, colors, paddings, widths } from "../../constants/styles"

type StyledMenuProps = {
  top: number
  left: number
  visible: boolean
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
  visibility: ${(props) => (props.visible ? "unset" : "hidden")};
`

export const MenuItem = styled.li`
  position: relative;
  font-size: 1.4rem;
  padding: 0.5rem ${paddings.defaultPadding};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${colors.primaryColor};
  }
`
