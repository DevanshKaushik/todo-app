import create from "zustand"
import { persist } from "zustand/middleware"
import { LabelIds } from "../constants/labels"
import { labelsStorageKey } from "../constants/localStorageKeys"
import { ILabel } from "../interfaces"

interface LabelState {
  labels: ILabel[]
  getLabel: (id: string) => ILabel | null
  updateLabelName: (id: string, name: string) => void
}

const defaultLabels: ILabel[] = [
  { id: LabelIds.RED, name: "" },
  { id: LabelIds.ORANGE, name: "" },
  { id: LabelIds.CYAN, name: "" },
  { id: LabelIds.GREEN, name: "" },
  { id: LabelIds.YELLOW, name: "" },
  { id: LabelIds.GREY, name: "" },
  { id: LabelIds.PINK, name: "" },
  { id: LabelIds.PURPLE, name: "" },
]

const useLabelsStore = create<LabelState>()(
  persist(
    (set, get) => ({
      labels: defaultLabels,

      getLabel: (id: string) =>
        get().labels.find((label) => label.id === id) || null,

      updateLabelName: (id: string, name: string) =>
        set((state) => ({
          labels: state.labels.map((label) =>
            label.id === id ? { ...label, name: name } : label
          ),
        })),
    }),
    {
      name: labelsStorageKey,
    }
  )
)

export default useLabelsStore
