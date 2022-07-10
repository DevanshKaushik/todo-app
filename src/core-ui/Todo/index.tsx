import React, { FunctionComponent } from "react"
import { IconButton } from ".."
import { Months } from "../../constants/dateTime"
import { LabelColors } from "../../constants/labels"
import { primaryColor } from "../../constants/styles"
import { useMenuButton } from "../../helpers/useMenuButton"
import { IMenuItem, ITodo } from "../../interfaces"
import useLabelsStore from "../../stores/labels"
import {
  StyledTodo,
  TodoComplete,
  TodoDeadline,
  TodoBottom,
  TodoTop,
  TodoText,
} from "./styles"

type Props = {
  todo: ITodo
  onComplete: () => void
  onDelete: () => void
  onPin: () => void
  onUnpin: () => void
  onCopy: () => void
}

const Todo: FunctionComponent<Props> = (props) => {
  const formattedDate =
    props.todo.deadlineDate &&
    `${
      Months[props.todo.deadlineDate.getMonth()]
    } ${props.todo.deadlineDate.getDate()}`

  // Setting up the menu items
  const menuItems: IMenuItem[] = [
    props.todo.isPinned
      ? props.todo.isGrouped
        ? { item: "Unpin group", action: props.onUnpin }
        : { item: "Unpin", action: props.onUnpin }
      : { item: "Pin", action: props.onPin },
    { item: "Delete", action: props.onDelete },
    { item: "Make a copy", action: props.onCopy },
  ]

  const { menuButtonClickHandler } = useMenuButton(menuItems)

  // Grabbing the label from the labels store
  const getLabel = useLabelsStore((state) => state.getLabel)
  const label = props.todo.labelId ? getLabel(props.todo.labelId) : null

  return (
    <StyledTodo
      isComplete={props.todo.isComplete}
      isGrouped={props.todo.isGrouped}
    >
      {/* Adding pin icon if the todo is pinned and not in a group */}
      {props.todo.isPinned && !props.todo.isGrouped && (
        <IconButton
          className="Todo-Pin-Button"
          src="images/pin.svg"
          size="2rem"
          noPadding
          onClick={props.onUnpin}
        />
      )}

      {/* Adding label icon if the label is not null */}
      {label && (
        <IconButton
          className="Todo-Label"
          src="images/label.svg"
          size="1.6rem"
          noPadding
          color={LabelColors[label.id]}
          onClick={() => {}}
          notTabable
        />
      )}

      <TodoTop>
        <TodoText className="Todo-Text">{props.todo.text}</TodoText>
        <IconButton
          className="Todo-Delete-Button"
          src="images/delete.svg"
          onClick={props.onDelete}
          color={primaryColor}
          size="1.5rem"
        />
      </TodoTop>
      <TodoBottom>
        <div style={{ display: "flex" }}>
          <TodoComplete
            type="checkbox"
            checked={props.todo.isComplete}
            onChange={props.onComplete}
          />
          {formattedDate && (
            <TodoDeadline tabIndex={0}>{formattedDate}</TodoDeadline>
          )}
        </div>
        <IconButton
          className="Todo-Menu-Button"
          src="images/menu-horizontal.svg"
          onClick={menuButtonClickHandler}
        />
      </TodoBottom>
    </StyledTodo>
  )
}

export default Todo
