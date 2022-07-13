import styled from "styled-components"
import { borderRadius, colors, paddings } from "../../constants/styles"

type StyledTodoGroupProps = {
  width: number
}

export const StyledTodoGroup = styled.div<StyledTodoGroupProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width}px;
  padding: ${paddings.defaultPadding};
  background-color: ${colors.todoGroupColor};
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
      background-color: ${colors.hoverColor} !important;
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
