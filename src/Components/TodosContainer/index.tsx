import React, { createRef, FunctionComponent, useEffect } from "react"
import setTodosPosition from "../../helpers/setTodosPosition"

type Props = {
  columnCount: number
  columnWidth: number
  rowGap: number
  children?: React.ReactNode
}

const TodosContainer: FunctionComponent<Props> = (props) => {
  console.count("TodoContainer Render")

  const todosContainerRef = createRef<HTMLDivElement>()
  useEffect(() => {
    if (!todosContainerRef.current) return
    const { current: todosContainer } = todosContainerRef

    setTodosPosition(
      todosContainer,
      props.columnCount,
      props.rowGap,
      props.columnWidth
    )
  }, [props.columnCount, props.columnWidth, props.rowGap, todosContainerRef])

  return (
    <div style={{ position: "relative" }} ref={todosContainerRef}>
      {props.children}
    </div>
  )
}

export default TodosContainer
