import styled from "styled-components"
import {
  componentOverlayColor,
  defaultTransitionSpeed,
  hoverOverlayColor,
  largeBorderRadius,
  smallPadding,
} from "../../constants/styles"

type FilterTodoButtonProps = {
  active: boolean
}

export const StyledFilterTodo = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0 0 ${largeBorderRadius} ${largeBorderRadius};
  font-size: 1.6rem;
  display: flex;
`

export const FilterTodoButton = styled.div<FilterTodoButtonProps>`
  position: relative;
  padding: ${smallPadding} 0;
  width: 33.3%;
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "")};
  background-color: ${(props) =>
    props.active ? componentOverlayColor : ""} !important;

  outline: none;
  transition: background-color ${defaultTransitionSpeed} ease;

  &:hover,
  &:focus {
    background-color: ${hoverOverlayColor};
  }

  /* Creates the seperator between the buttons */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 60%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
