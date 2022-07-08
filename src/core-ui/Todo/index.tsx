import React, {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
} from "react"
import { IconButton } from ".."
import { Months } from "../../constants/dateTime"
import {
  lightGreenColor,
  lightOrangeColor,
  lightPinkColor,
  lightRedColor,
  lightYellowColor,
  primaryColor,
} from "../../constants/styles"
import { ITodo } from "../../interfaces"
import {
  StyledTodo,
  TodoComplete,
  TodoDeadline,
  TodoBottom,
  TodoTop,
  TodoText,
} from "./styles"

export const TodoLabelColor = {
  RED: lightRedColor,
  ORANGE: lightOrangeColor,
  GREEN: lightGreenColor,
  YELLOW: lightYellowColor,
  PINK: lightPinkColor,
}

type Props = {
  todo: ITodo
  onComplete: ChangeEventHandler<HTMLInputElement>
  onDelete: MouseEventHandler<HTMLButtonElement>
  onPinButtonClick: MouseEventHandler<HTMLButtonElement>
}

const Todo: FunctionComponent<Props> = (props) => {
  const formattedDate =
    props.todo.deadlineDate &&
    `${
      Months[props.todo.deadlineDate.getMonth()]
    } ${props.todo.deadlineDate.getDate()}`

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
          onClick={props.onPinButtonClick}
        />
      )}

      {/* Adding label icon if the label color is defined */}
      {props.todo.labelColor && (
        <IconButton
          className="Todo-Label"
          src="images/label.svg"
          size="1.6rem"
          noPadding
          color={props.todo.labelColor}
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
            onChange={(e) => {
              props.onComplete(e)
            }}
          />
          {formattedDate && (
            <TodoDeadline tabIndex={0}>{formattedDate}</TodoDeadline>
          )}
        </div>
        <IconButton
          className="Todo-Menu-Button"
          src="images/menu-horizontal.svg"
          onClick={() => {}}
        />
      </TodoBottom>
    </StyledTodo>
  )
}

export default Todo
