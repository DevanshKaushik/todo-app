import { MouseEventHandler } from "react"
import { StyledIconButton } from "./styles"

type IconButtonProps = {
  src: string
  className?: string
  color?: string
  style?: React.CSSProperties
  size?: string
  noPadding?: boolean
  notTabable?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <StyledIconButton
      style={props.style}
      onClick={props.onClick}
      className={props.className}
      iconUrl={props.src}
      iconColor={props.color}
      iconSize={props.size}
      noPadding={props.noPadding || false}
      tabIndex={props.notTabable ? -1 : 0}
    >
      <i />
    </StyledIconButton>
  )
}
