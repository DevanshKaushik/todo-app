import styled from "styled-components"
import {
  completeTodoBGColor,
  completeTodoGroupedBGColor,
  defaultBorderRadius,
  defaultPadding,
  hoverOverlayColor,
  largeBorderRadius,
  primaryColor,
  todoBGColor,
} from "../../constants/styles"

type StyledTodoProps = {
  isComplete: boolean
  isGrouped: boolean
  labelColor?: string
}

export const StyledTodo = styled.div<StyledTodoProps>`
  position: relative;
  padding: ${defaultPadding};
  border-radius: ${largeBorderRadius};
  height: fit-content;

  /* Changing the bg-color based on complete and grouped props */
  background-color: ${(props) =>
    props.isComplete
      ? props.isGrouped
        ? completeTodoGroupedBGColor
        : completeTodoBGColor
      : todoBGColor};

  &:hover,
  &:focus,
  &:focus-within {
    .Todo-Menu-Button {
      opacity: 1;
    }

    .Todo-Delete-Button {
      opacity: 1;
    }
  }

  .Todo-Menu-Button {
    opacity: 0;

    &:hover {
      background-color: unset;
    }

    &:focus {
      background-color: ${hoverOverlayColor} !important;
    }
  }

  .Todo-Pin-Button {
    position: absolute;
    top: -5px;
    left: -5px;
  }

  .Todo-Label {
    position: absolute;
    top: 0;
    left: ${defaultPadding};
    pointer-events: none;
  }

  .Todo-Delete-Button {
    opacity: 0;
  }

  .Todo-Text {
    text-decoration: ${(props) => (props.isComplete ? "line-through" : "")};
    opacity: ${(props) => (props.isComplete ? "0.5" : "")};
  }
`

export const TodoText = styled.p`
  font-size: 1.6rem;
`

export const TodoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
`

export const TodoTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`

export const TodoComplete = styled.input`
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 2px solid ${primaryColor};
  border-radius: ${defaultBorderRadius};
  cursor: pointer;

  &:checked {
    background-color: ${primaryColor};
  }
`

export const TodoDeadline = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${primaryColor};
  cursor: pointer;

  &:focus {
    outline: 1px solid white;
    border: none;
  }
`
