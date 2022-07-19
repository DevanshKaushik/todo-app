import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { useMenuButton } from "../../hooks/useMenuButton"
import { IMenuItem, ITodoGroup } from "../../interfaces"
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
      {props.children}
    </StyledTodoGroup>
  )
}

export default TodoGroup
