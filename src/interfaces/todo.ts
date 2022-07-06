export type HexColorString = string

export interface ITodo {
  id: string
  text: string
  isComplete: boolean
  isPinned: boolean
  isGrouped: boolean
  deadlineDate: Date | null
  labelColor: HexColorString | null
}
