import React, { createRef, useState } from "react"
import { v4 as uuid } from "uuid"
import { IconButton } from "../../core-ui/Button"
import { ITodo } from "../../interfaces"
import useTodoStore from "../../stores/todo"
import {
  StyledAddTodoArea,
  AddTodoInput,
  AddTodoButtonsContainer,
} from "./styles"

const AddTodoArea = () => {
  const [todoText, setTodoText] = useState("")
  const inputRef = createRef<HTMLInputElement>()

  const addTodo = useTodoStore((state) => state.addTodo)

  const addTodoHandler = () => {
    if (todoText === "") return

    const todo: ITodo = {
      id: uuid(),
      text: todoText,
      isComplete: false,
      isPinned: false,
      deadlineDate: null,
      workspaceId: "",
      groupId: null,
      labelId: null,
    }

    addTodo(todo)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <StyledAddTodoArea tabIndex={0}>
      <AddTodoInput
        ref={inputRef}
        type="text"
        placeholder="Write what to do..."
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent) => {
          return e.key !== "Enter" || addTodoHandler()
        }}
      />
      <AddTodoButtonsContainer>
        <IconButton
          src="images/calendar.svg"
          color="black"
          onClick={() => {}}
        />
        <IconButton
          src="images/plus.svg"
          color="black"
          onClick={() => addTodoHandler()}
        />
      </AddTodoButtonsContainer>
    </StyledAddTodoArea>
  )
}

export default AddTodoArea
