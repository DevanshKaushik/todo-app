import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { ITodo, ITodoGroup } from "../../interfaces"
import { StyledTodoGroup, TodoGroupTitle } from "./styles"

type Props = {
  todoGroup: ITodoGroup
  children?: React.ReactNode
  onPinButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

const TodoGroup: FunctionComponent<Props> = (props) => {
  // Adds new props to the children
  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (!React.isValidElement(child)) return child

    const newTodo: ITodo = {
      ...child.props.todo,
      isGrouped: true,
      isPinned: props.todoGroup.isPinned,
    }
    return React.cloneElement(child, { todo: newTodo })
  })

  return (
    <StyledTodoGroup>
      {/* Adding pin icon if the todo group is pinned */}
      {props.todoGroup.isPinned && (
        <IconButton
          className="Todo-Group-Pin-Button"
          src="images/pin.svg"
          size="2rem"
          noPadding
          onClick={props.onPinButtonClick}
        />
      )}

      <TodoGroupTitle>
        <span>{props.todoGroup.name}</span>
        <IconButton
          className="Todo-Group-Menu-Button"
          src="images/menu.svg"
          onClick={() => {}}
        />
      </TodoGroupTitle>

      {/* Adding all the chilren nodes with modified props */}
      {childrenWithProps}
    </StyledTodoGroup>
  )
}

export default TodoGroup
