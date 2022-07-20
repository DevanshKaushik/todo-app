import React, { createRef, FunctionComponent } from "react"
import useTodosLayout from "../../hooks/useTodosLayout"

type Props = {
  columnCount: number
  columnWidth: number
  rowGap: number
  children?: React.ReactNode
}

const TodosContainer: FunctionComponent<Props> = (props) => {
  const todosContainerRef = createRef<HTMLDivElement>()

  useTodosLayout(
    todosContainerRef,
    props.columnCount,
    props.rowGap,
    props.columnWidth
  )

  return (
    <div
      style={{ position: "relative", margin: "1rem" }}
      ref={todosContainerRef}
    >
      {props.children}
    </div>
  )
}

export default TodosContainer
