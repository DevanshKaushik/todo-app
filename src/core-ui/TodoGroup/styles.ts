import styled from "styled-components"
import {
  defaultBorderRadius,
  defaultPadding,
  hoverOverlayColor,
  todoGroupBGColor,
} from "../../constants/styles"

type StyledTodoGroupProps = {
  pinned?: boolean
}

export const StyledTodoGroup = styled.div<StyledTodoGroupProps>`
  position: relative;
  padding: ${defaultPadding};
  background-color: ${todoGroupBGColor};
  border-radius: ${defaultBorderRadius};
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: fit-content;

  &:hover,
  &:focus,
  &:focus-within {
    .Todo-Group-Menu-Button {
      opacity: 1;
    }
  }

  .Todo-Group-Pin-Button {
    position: absolute;
    top: -5px;
    left: -5px;
  }

  .Todo-Group-Menu-Button {
    opacity: 0;

    &:hover {
      background-color: unset;
    }

    &:focus {
      background-color: ${hoverOverlayColor} !important;
    }
  }
`

export const TodoGroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: bold;
`
