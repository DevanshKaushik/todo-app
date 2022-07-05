export type HexColorString = string

export interface ITodo {
  text: string
  isComplete: boolean
  isPinned: boolean
  isGrouped: boolean
  deadlineDate: Date | null
  labelColor: HexColorString | null
}
