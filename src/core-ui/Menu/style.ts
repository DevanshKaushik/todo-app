import styled from "styled-components"
import {
  defaultBorderRadius,
  defaultPadding,
  menuContainerColor,
  menuContainerWidth,
  primaryColor,
  smallPadding,
} from "../../constants/styles"

type StyledMenuProps = {
  top: number
  left: number
}

export const StyledMenu = styled.ul<StyledMenuProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${menuContainerWidth}px;
  z-index: 10;
  background-color: ${menuContainerColor};
  box-shadow: -5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: ${defaultBorderRadius};
  padding: ${smallPadding} 0;
`

export const MenuItem = styled.li`
  font-size: 1.4rem;
  padding: 0.5rem ${defaultPadding};
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${primaryColor};
  }
`
