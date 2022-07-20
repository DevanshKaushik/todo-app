import { v4 as uuid } from "uuid"
import { Todo } from "../core-ui"
import useTodoStore from "../stores/todo"

const useAddTodo = (width: number, isPinned: boolean) => {
  const storedTodos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const setTodoComplete = useTodoStore((state) => state.setComplete)
  const setTodoLabel = useTodoStore((state) => state.setLabel)
  const setTodoPin = useTodoStore((state) => state.setPin)

  const pinnedTodos = storedTodos.filter((todo) => todo.isPinned)
  const unpinnedTodos = storedTodos.filter((todo) => !todo.isPinned)

  const todos = isPinned ? pinnedTodos : unpinnedTodos

  return todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        width={width}
        key={todo.id}
        onComplete={(isChecked) => {
          setTodoComplete(todo.id, isChecked)
        }}
        onDelete={() => {
          deleteTodo(todo.id)
        }}
        onPin={() => {
          setTodoPin(todo.id, true)
        }}
        onUnpin={() => {
          setTodoPin(todo.id, false)
        }}
        onCopy={() => {
          addTodo({ ...todo, id: uuid() })
        }}
        onLabelChange={(labelId) => {
          setTodoLabel(todo.id, labelId)
        }}
      />
    )
  })
}

export default useAddTodo
