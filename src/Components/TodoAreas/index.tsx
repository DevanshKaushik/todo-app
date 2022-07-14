import React, { FunctionComponent, useEffect, useState } from "react"
import { TodoAreasTitle, StyledTodoAreas } from "./styles"
import { TodosContainer } from ".."
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

const TodoAreas: FunctionComponent<Props> = (props) => {
  // Setting up column count based on the available space
  const [columnCount, setColumnCount] = useState<number>(1)
  const { width: containerWidth, ref: todoAreasRef } =
    useResizeObserver<HTMLDivElement>()

  useEffect(() => {
    const newColumnCount = Math.floor(containerWidth / props.columnWidth)
    setColumnCount(newColumnCount)
  }, [containerWidth, props.columnWidth])

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

  const todoGroup = (
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

  return (
    <StyledTodoAreas ref={todoAreasRef}>
      {React.useMemo(() => {
        return (
          <>
            <TodoAreasTitle>{props.category}</TodoAreasTitle>
            <TodosContainer
              columnCount={columnCount}
              columnWidth={props.columnWidth}
              rowGap={props.rowGap}
            >
              {/* For testing the layout */}
              {todoGroup}
              {todo}
              {todo}
              {todo}
              {todoGroup}
              {todo}
              {todo}
              {todoGroup}
            </TodosContainer>
          </>
        )
      }, [props.category, props.columnWidth, props.rowGap, columnCount])}
    </StyledTodoAreas>
  )
}

export default TodoAreas
