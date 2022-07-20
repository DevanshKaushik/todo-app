import React, { FunctionComponent, useEffect, useState } from "react"
import { TodoAreasTitle, StyledTodoArea } from "./styles"
import { TodosContainer } from ".."
import { useResizeObserver } from "../../hooks/useResizeObserver"
import useAddTodo from "../../hooks/useAddTodo"

export enum TodoAreasCategory {
  PINNED = "PINNED",
  UNPINNED = "OTHER",
}

type Props = {
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

  // Todo: Memoize the todos so they don't re-render on window size change

  // Creating todos
  const width = props.columnWidth - props.columnGap
  const pinnedTodos = useAddTodo(width, true)
  const unpinnedTodos = useAddTodo(width, false)

  return (
    <div style={{ width: "100%", overflow: "hidden" }} ref={todoAreasRef}>
      {pinnedTodos.length !== 0 && (
        <StyledTodoArea>
          <TodoAreasTitle>{TodoAreasCategory.PINNED}</TodoAreasTitle>
          <TodosContainer
            columnCount={columnCount}
            columnWidth={props.columnWidth}
            rowGap={props.rowGap}
          >
            {pinnedTodos}
          </TodosContainer>
        </StyledTodoArea>
      )}
      {unpinnedTodos.length !== 0 && (
        <StyledTodoArea>
          {pinnedTodos.length !== 0 && (
            <TodoAreasTitle>{TodoAreasCategory.UNPINNED}</TodoAreasTitle>
          )}
          <TodosContainer
            columnCount={columnCount}
            columnWidth={props.columnWidth}
            rowGap={props.rowGap}
          >
            {unpinnedTodos}
          </TodosContainer>
        </StyledTodoArea>
      )}
    </div>
  )
}

export default TodoAreas
