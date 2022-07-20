import { useEffect } from "react"

type TodoWithPosY = {
  element: HTMLElement
  posY: number
}

type ColumnWithHeight = {
  todos: TodoWithPosY[]
  height: number
}

const useTodosLayout = (
  todosContainerRef: React.RefObject<HTMLDivElement>,
  columnCount: number,
  rowGap: number,
  columnWidth: number
) => {
  useEffect(() => {
    if (!todosContainerRef.current) return
    const { current: todosContainer } = todosContainerRef

    if (!todosContainer.children || todosContainer.children.length === 0) return
    const todos = Array.from(
      todosContainer.children as HTMLCollectionOf<HTMLElement>
    )

    const columns: ColumnWithHeight[] = Array(columnCount)

    todos.forEach((todo) => {
      // Popping the last column from the columns array
      // and grabbing the todos stored in it
      const lastColumnTodos = columns.pop()?.todos || []

      // Adding new column with the todo in the columns array
      const newColumn: ColumnWithHeight = {
        todos: [{ element: todo, posY: 0 }],
        height: todo.clientHeight + rowGap,
      }
      columns.unshift(newColumn)

      // Adding the todos from the last column to the
      // the shortest column in the columns array
      lastColumnTodos.forEach((todo) => {
        const shortestColumn = columns
          .slice(0)
          .sort((a, b) => a.height - b.height)
          .shift()

        const index = columns.indexOf(
          shortestColumn || { todos: [], height: 0 }
        )
        const columnIndex = index === -1 ? 0 : index

        // Updating column values
        const columnHeight = columns[columnIndex].height
        const newTodo: TodoWithPosY = {
          element: todo.element,
          posY: columnHeight,
        }
        columns[columnIndex].todos.push(newTodo)
        columns[columnIndex].height += todo.element.clientHeight + rowGap
      })
    })

    // Updating transform property of todo styles
    columns.forEach((column, index) => {
      column.todos.forEach((todo) => {
        const posX = index * columnWidth
        const posY = todo.posY

        todo.element.style.transform = `translate(${posX}px, ${posY}px)`
      })
    })

    // Setting the container height to be
    // the max height in columns
    const containerHeight =
      columns
        .slice(0)
        .sort((a, b) => b.height - a.height)
        .shift()?.height || 0
    todosContainer.style.height = containerHeight + "px"
  }, [columnCount, columnWidth, rowGap, todosContainerRef])
}

export default useTodosLayout
