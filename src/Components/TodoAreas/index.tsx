import React, { createRef, FunctionComponent, useEffect, useState } from "react"
import { TodoAreasTitle, StyledTodoAreas, TodosContainer } from "./styles"

import { v4 as uuid } from "uuid"
import { TodoGroup } from "../../core-ui"
import Todo from "../../core-ui/Todo"
import { useResizeObserver } from "../../hooks/useResizeObserver"
import { LabelIds } from "../../constants/labels"
import setTodosPosition from "../../helpers/setTodosPosition"

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
  // Setting up column count based on the available space
  const [columnCount, setColumnCount] = useState<number>(1)
  const { width: containerWidth, ref } = useResizeObserver<HTMLDivElement>()

  useEffect(() => {
    const newColumnCount = Math.floor(containerWidth / props.columnWidth)
    setColumnCount(newColumnCount)
  }, [containerWidth, props.columnWidth])

  // Positioning all the todos inside the todos container
  const todosContainerRef = createRef<HTMLDivElement>()
  useEffect(() => {
    if (!todosContainerRef.current) return
    const { current: todosContainer } = todosContainerRef

    setTodosPosition(
      todosContainer,
      columnCount,
      props.rowGap,
      props.columnWidth
    )
  }, [columnCount, props.columnWidth, props.rowGap])

  const todo = (
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
      width={props.columnWidth - props.columnGap}
      onComplete={() => {}}
      onDelete={() => {}}
      onPin={() => {}}
      onUnpin={() => {}}
      onCopy={() => {}}
      onLabelChange={() => {}}
    />
  )

  const todoGroup1 = (
    <TodoGroup
      todoGroup={{ id: uuid(), name: "Test Group", isPinned: true }}
      width={props.columnWidth - props.columnGap}
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
        width={props.columnWidth - props.columnGap}
        onComplete={() => {}}
        onDelete={() => {}}
        onPin={() => {}}
        onUnpin={() => {}}
        onCopy={() => {}}
        onLabelChange={() => {}}
      />
    </TodoGroup>
  )

  const todoGroup2 = (
    <TodoGroup
      todoGroup={{ id: uuid(), name: "Test Group", isPinned: true }}
      width={props.columnWidth - props.columnGap}
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
        width={props.columnWidth - props.columnGap}
        onComplete={() => {}}
        onDelete={() => {}}
        onPin={() => {}}
        onUnpin={() => {}}
        onCopy={() => {}}
        onLabelChange={() => {}}
      />
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
        width={props.columnWidth - props.columnGap}
        onComplete={() => {}}
        onDelete={() => {}}
        onPin={() => {}}
        onUnpin={() => {}}
        onCopy={() => {}}
        onLabelChange={() => {}}
      />
    </TodoGroup>
  )

  return (
    <StyledTodoAreas ref={ref}>
      {React.useMemo(() => {
        return (
          <>
            <TodoAreasTitle>{props.category}</TodoAreasTitle>
            <TodosContainer ref={todosContainerRef}>
              {/* For testing the layout */}
              {todoGroup1}
              {todo}
              {todo}
              {todo}
              {todoGroup2}
              {todo}
              {todo}
              {todoGroup2}
            </TodosContainer>
          </>
        )
      }, [props.columnGap, props.columnWidth, columnCount])}
    </StyledTodoAreas>
  )
}

export default TodoAreas
