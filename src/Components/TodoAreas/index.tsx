import React, { FunctionComponent, useEffect, useState } from "react"
import { TodoAreasColumn, TodoAreasTitle, StyledTodoAreas } from "./styles"

import { v4 as uuid } from "uuid"
import { TodoGroup } from "../../core-ui"
import Todo, { TodoLabelColor } from "../../core-ui/Todo"
import { useResizeObserver } from "../../hooks/useResizeObserver"

export enum TodoAreasCategory {
  PINNED = "PINNED",
  OTHER = "OTHER",
}

type Props = {
  category: TodoAreasCategory
  columnWidth: number
  columnGap: number
  rowGap: number
}

const TodoAreas: FunctionComponent<Props> = (props) => {
  console.count("TODO AREAS")

  // Setting up column count based on the available space
  const [columnCount, setColumnCount] = useState<number>(1)
  const { width: containerWidth, ref } = useResizeObserver<HTMLDivElement>()
  useEffect(() => {
    const bufferWidth = 10
    const finalColumnWidth = props.columnWidth + props.columnGap
    const newColumnCount = Math.max(
      Math.floor((containerWidth - bufferWidth) / finalColumnWidth),
      1
    )

    setColumnCount(newColumnCount)
  }, [columnCount, containerWidth, props.columnGap, props.columnWidth])

  return (
    <StyledTodoAreas ref={ref}>
      <TodoAreasTitle>{props.category}</TodoAreasTitle>
      <div>
        {[...Array(columnCount)].map(() => (
          <TodoAreasColumn
            columnWidth={props.columnWidth}
            columnGap={props.columnGap}
            rowGap={props.rowGap}
          >
            <TodoGroup
              todoGroup={{ id: uuid(), isPinned: true, name: "Test Group" }}
              onMenuButtonClick={() => {}}
              onPinButtonClick={() => {}}
            >
              <Todo
                todo={{
                  id: uuid(),
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
