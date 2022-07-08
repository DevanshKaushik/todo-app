export type IMenuItemAction = () => void

export type IMenuItem = {
  item: React.ReactNode
  keepOpen?: boolean
  action: IMenuItemAction
}
