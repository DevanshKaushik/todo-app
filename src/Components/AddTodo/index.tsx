import React from "react"
import { IconButton } from "../../core-ui/Button"
import { StyledAddTodo, AddTodoInput, AddTodoButtonsContainer } from "./styles"

const AddTodo = () => {
  return (
    <StyledAddTodo tabIndex={0} onSubmit={(e) => e.preventDefault()}>
      <AddTodoInput type="text" placeholder="Write what to do..." />
      <AddTodoButtonsContainer>
        <IconButton
          src="images/calendar.svg"
          color="black"
          onClick={() => {}}
        />
        <IconButton src="images/plus.svg" color="black" onClick={() => {}} />
      </AddTodoButtonsContainer>
    </StyledAddTodo>
  )
}

export default AddTodo
