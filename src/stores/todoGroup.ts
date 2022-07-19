import create from "zustand"
import { persist } from "zustand/middleware"
import { todoGroupsStorageKey } from "../constants/localStorageKeys"
import { ITodoGroup } from "../interfaces"

type TodoGroupState = {
  todoGroups: ITodoGroup[]
  getTodoGroup: (id: string) => ITodoGroup | undefined
  getAllTodoGroups: () => ITodoGroup[]
  addTodoGroup: (todoGroup: ITodoGroup) => void
  deleteTodoGroup: (id: string) => void
  deleteAllTodoGroups: () => void
  setPin: (id: string, isPinned: boolean) => void
}

const useTodoGroupStore = create<TodoGroupState>()(
  persist(
    (set, get) => ({
      todoGroups: [],

      getTodoGroup: (id: string) =>
        get().todoGroups.find((todoGroup) => todoGroup.id === id),

      getAllTodoGroups: () => get().todoGroups,

      addTodoGroup: (todoGroup: ITodoGroup) =>
        set((state) => ({ todoGroups: { ...state.todoGroups, todoGroup } })),

      deleteTodoGroup: (id: string) =>
        set((state) => ({
          todoGroups: state.todoGroups.filter(
            (todoGroup) => todoGroup.id !== id
          ),
        })),

      deleteAllTodoGroups: () => set(() => ({ todoGroups: [] })),

      setPin: (id: string, isPinned: boolean) =>
        set((state) => ({
          todoGroups: state.todoGroups.map((todoGroup) =>
            todoGroup.id === id ? { ...todoGroup, isPinned } : todoGroup
          ),
        })),
    }),
    {
      name: todoGroupsStorageKey,
    }
  )
)

export default useTodoGroupStore
