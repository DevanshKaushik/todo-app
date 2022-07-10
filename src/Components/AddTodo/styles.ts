import styled from "styled-components"
import { colors, paddings, borderRadius } from "../../constants/styles"

export const StyledAddTodo = styled.form`
  position: relative;
  display: flex;
  background-color: ${colors.primaryColor};
  border-radius: ${borderRadius.largeBorderRadius}
    ${borderRadius.largeBorderRadius} 0 0;
  overflow: hidden;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.5);
  z-index: 2;
`

export const AddTodoInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: black;
  font-size: 1.6rem;
  font-weight: 600;
  height: 100%;
  padding: ${paddings.defaultPadding};
  flex-grow: 1;

  &::placeholder {
    color: black;
    font-size: 1.6rem;
    font-weight: 600;
  }
`

export const AddTodoButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: ${paddings.defaultPadding};
`
