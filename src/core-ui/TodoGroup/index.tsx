import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { StyledTodoGroup, TodoGroupTitle } from "./styles"

type Props = {
  name: string
  onPinButtonClick: React.MouseEventHandler<HTMLButtonElement>
  onMenuButtonClick: React.MouseEventHandler<HTMLButtonElement>
  pinned?: boolean
  children?: React.ReactNode
}

const TodoGroup: FunctionComponent<Props> = (props) => {
  // Adds new props to the children
  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child))
      return React.cloneElement(child, {
        pinned: props.pinned,
        isGrouped: true,
      })

    return child
  })

  return (
    <StyledTodoGroup pinned={props.pinned || false}>
      {/* Adding pin icon if the todo group is pinned */}
      {props.pinned && (
        <IconButton
          className="Todo-Group-Pin-Button"
          src="images/pin.svg"
          size="2rem"
          noPadding
          onClick={props.onPinButtonClick}
        />
      )}

      <TodoGroupTitle>
        <span>{props.name}</span>
        <IconButton
          className="Todo-Group-Menu-Button"
          src="images/menu.svg"
          onClick={props.onMenuButtonClick}
        />
      </TodoGroupTitle>

      {/* Adding all the chilren nodes with modified props */}
      {childrenWithProps}
    </StyledTodoGroup>
  )
}

export default TodoGroup
