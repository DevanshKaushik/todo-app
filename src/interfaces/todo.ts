export type HexColorString = string

export interface ILabel {
  id: string
  name: string
}

export interface ITodo {
  id: string
  text: string
  isComplete: boolean
  isPinned: boolean
  isGrouped: boolean
  deadlineDate: Date | null
  labelId: string | null
}
