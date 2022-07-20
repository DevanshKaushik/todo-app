import create from "zustand"
import { persist } from "zustand/middleware"
import { todosStorageKey } from "../constants/localStorageKeys"
import { ITodo } from "../interfaces"

type TodosState = {
  todos: ITodo[]
  getTodo: (id: string) => ITodo | undefined
  addTodo: (todo: ITodo) => void
  deleteTodo: (id: string) => void
  deleteAllTodos: () => void
  setLabel: (todoId: string, labelId: string) => void
  setComplete: (id: string, isComplete: boolean) => void
  setPin: (id: string, isPinned: boolean) => void
}

const useTodoStore = create<TodosState>()(
  persist(
    (set, get) => ({
      todos: [],

      getTodo: (id: string) => get().todos.find((todo) => todo.id === id),

      addTodo: (todo: ITodo) =>
        set((state) => ({ todos: [...state.todos, todo] })),

      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      deleteAllTodos: () => set(() => ({ todos: [] })),

      setLabel: (todoId: string, labelId: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === todoId ? { ...todo, labelId } : todo
          ),
        })),

      setComplete: (id: string, isComplete: boolean) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isComplete } : todo
          ),
        })),

      setPin: (id: string, isPinned: boolean) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isPinned } : todo
          ),
        })),
    }),
    {
      name: todosStorageKey,
    }
  )
)

export default useTodoStore
