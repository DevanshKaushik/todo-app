import React, { FunctionComponent, useEffect, useMemo, useState } from "react"
import { TodoAreasColumn, TodoAreasTitle, StyledTodoAreas } from "./styles"

import { v4 as uuid } from "uuid"
import { TodoGroup } from "../../core-ui"
import Todo from "../../core-ui/Todo"
import { useResizeObserver } from "../../hooks/useResizeObserver"
import { LabelIds } from "../../constants/labels"

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

const createColumnsWithTodos = (
  columnCount: number,
  columnWidth: number,
  columnGap: number,
  rowGap: number
) => {
  return [...Array(columnCount)].map(() => (
    <TodoAreasColumn
      columnWidth={columnWidth}
      columnGap={columnGap}
      rowGap={rowGap}
    >
      <TodoGroup
        todoGroup={{ id: uuid(), name: "Test Group", isPinned: true }}
        onPin={() => {}}
        onUnpin={() => {}}
        onDelete={() => {}}
        onUngroup={() => {}}
        onCopy={() => {}}
      >
        <Todo
          todo={{
            id: uuid(),
            text: "Test todo text",
            deadlineDate: new Date(),
            labelId: LabelIds.GREEN,
            isComplete: false,
            isPinned: true,
            isGrouped: false,
          }}
          onComplete={() => {}}
          onDelete={() => {}}
          onPin={() => {}}
          onUnpin={() => {}}
          onCopy={() => {}}
        />
      </TodoGroup>
    </TodoAreasColumn>
  ))
}

const TodoAreas: FunctionComponent<Props> = (props) => {
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

  // Using memoization to create todo columns
  // Changes when column count changes
  const todoColumns = useMemo(() => {
    return createColumnsWithTodos(
      columnCount,
      props.columnWidth,
      props.columnGap,
      props.rowGap
    )
  }, [columnCount, props.columnGap, props.columnWidth, props.rowGap])

  return (
    <StyledTodoAreas ref={ref}>
      <TodoAreasTitle>{props.category}</TodoAreasTitle>
      <div>{todoColumns}</div>
    </StyledTodoAreas>
  )
}

export default TodoAreas
