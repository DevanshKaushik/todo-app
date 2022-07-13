import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { useMenuButton } from "../../hooks/useMenuButton"
import { IMenuItem, ITodo, ITodoGroup } from "../../interfaces"
import { StyledTodoGroup, TodoGroupTitle } from "./styles"

type Props = {
  todoGroup: ITodoGroup
  width: number
  children?: React.ReactNode
  onPin: () => void
  onUnpin: () => void
  onDelete: () => void
  onUngroup: () => void
  onCopy: () => void
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

  // Setting up the menu items
  const menuItems: IMenuItem[] = [
    props.todoGroup.isPinned
      ? { name: "Unpin", action: props.onUnpin }
      : { name: "Pin", action: props.onPin },
    { name: "Delete", action: props.onDelete },
    { name: "Make a copy", action: props.onCopy },
    { name: "Ungroup", action: props.onUngroup },
  ]

  const { menuButtonClickHandler } = useMenuButton(menuItems)

  return (
    <StyledTodoGroup width={props.width}>
      {/* Adding pin icon if the todo group is pinned */}
      {props.todoGroup.isPinned && (
        <IconButton
          className="Todo-Group-Pin-Button"
          src="images/pin.svg"
          size="2rem"
          noPadding
          onClick={props.onUnpin}
        />
      )}

      <TodoGroupTitle>
        <span>{props.todoGroup.name}</span>
        <IconButton
          className="Todo-Group-Menu-Button"
          src="images/menu.svg"
          onClick={menuButtonClickHandler}
        />
      </TodoGroupTitle>

      {/* Adding all the chilren nodes with modified props */}
      {childrenWithProps}
    </StyledTodoGroup>
  )
}

export default TodoGroup
