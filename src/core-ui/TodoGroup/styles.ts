import styled from "styled-components"
import { borderRadius, colors, paddings } from "../../constants/styles"

export const StyledTodoGroup = styled.div`
  position: relative;
  padding: ${paddings.defaultPadding};
  background-color: ${colors.todoGroupBGColor};
  border-radius: ${borderRadius.defaultBorderRadius};
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
      background-color: ${colors.hoverOverlayColor} !important;
    }
  }
`

export const TodoGroupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;
  font-weight: bold;

  span {
    white-space: nowrap;
    overflow-x: clip;
    text-overflow: ellipsis;
    margin-right: 1rem;
  }
`
