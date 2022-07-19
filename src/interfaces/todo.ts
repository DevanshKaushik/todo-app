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
  deadlineDate: Date | null

  workspaceId: string
  groupId: string | null
  labelId: string | null
}
