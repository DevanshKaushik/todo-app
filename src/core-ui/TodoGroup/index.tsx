import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { useMenuButton } from "../../helpers/useMenuButton"
import { IMenuItem, ITodo, ITodoGroup } from "../../interfaces"
import { StyledTodoGroup, TodoGroupTitle } from "./styles"

type Props = {
  todoGroup: ITodoGroup
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
      ? { item: "Unpin", action: props.onUnpin }
      : { item: "Pin", action: props.onPin },
    { item: "Delete", action: props.onDelete },
    { item: "Make a copy", action: props.onCopy },
    { item: "Ungroup", action: props.onUngroup },
  ]

  const { menuButtonClickHandler } = useMenuButton(menuItems)

  return (
    <StyledTodoGroup>
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
