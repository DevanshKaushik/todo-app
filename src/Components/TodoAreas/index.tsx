import React, { FunctionComponent, useEffect, useState } from "react"
import { useResizeDetector } from "react-resize-detector"
import { defaultGap } from "../../constants/styles"
import { TodoGroup } from "../../core-ui"
import Todo, { TodoLabelColor } from "../../core-ui/Todo"
import { TodoAreasColumn, TodoAreasTitle, StyledTodoAreas } from "./styles"

export enum TodoAreasCategory {
  PINNED = "PINNED",
  OTHER = "OTHER",
}

type Props = {
  category: TodoAreasCategory
  columnWidth: number
  columnGap?: number
  rowGap?: number
}

const TodoAreas: FunctionComponent<Props> = (props) => {
  const columnGap = props.columnGap || defaultGap
  const rowGap = props.rowGap || defaultGap

  // Setting up column number based on the available space
  const [column, setColumn] = useState<number>(1)
  const { width, ref } = useResizeDetector<HTMLDivElement>()

  useEffect(() => {
    if (!width) return

    const bufferWidth = 10

    const newCol = Math.floor(
      (width - bufferWidth) / (props.columnWidth + columnGap)
    )
    setColumn((prev) => (prev === newCol ? prev : newCol))
  }, [width, props.columnWidth, columnGap])

  return (
    <StyledTodoAreas ref={ref}>
      <TodoAreasTitle>{props.category}</TodoAreasTitle>
      <div>
        {[...Array(column)].map(() => (
          <TodoAreasColumn
            columnWidth={props.columnWidth}
            columnGap={columnGap}
            rowGap={rowGap}
          >
            <TodoGroup
              name="Test Group"
              isPinned
              onMenuButtonClick={() => {}}
              onPinButtonClick={() => {}}
            >
              <Todo
                todo={{
                  text: "Refactor the todo app",
                  deadlineDate: new Date(),
                  labelColor: TodoLabelColor.GREEN,
                  isComplete: false,
                  isPinned: props.category === TodoAreasCategory.PINNED,
                  isGrouped: false,
                }}
                onComplete={() => {}}
                onDelete={() => {}}
                onMenuButtonClick={() => {}}
                onPinButtonClick={() => {}}
              />
            </TodoGroup>
          </TodoAreasColumn>
        ))}
      </div>
    </StyledTodoAreas>
  )
}

export default TodoAreas
