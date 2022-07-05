import styled from "styled-components"
import {
  defaultBorderRadius,
  defaultTransitionSpeed,
  hoverOverlayColor,
} from "../../constants/styles"

type StyledIconButtonProps = {
  iconUrl: string
  iconColor?: string
  iconSize?: string
  noPadding: boolean
}

export const StyledIconButton = styled.button<StyledIconButtonProps>`
  border: none;
  border-radius: ${defaultBorderRadius};
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: background-color ${defaultTransitionSpeed} ease;
  display: grid;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;

  &:hover,
  &:focus {
    background-color: ${hoverOverlayColor};
  }

  &:focus {
    outline: 1px solid white;
  }

  i {
    height: ${(props) => (props.iconSize ? props.iconSize : "1.8rem")};
    width: ${(props) => (props.iconSize ? props.iconSize : "1.8rem")};
    margin: ${(props) => (props.noPadding ? "0" : "0.8rem")};
    background-color: ${(props) =>
      props.iconColor ? props.iconColor : "white"};

    mask-image: url(${(props) => props.iconUrl});
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center center;
  }
`
