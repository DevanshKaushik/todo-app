import styled from "styled-components"
import {
  defaultBorderRadius,
  defaultTransitionSpeed,
  hoverOverlayColor,
  primaryColor,
} from "../../constants/styles"

const circleSize = "15px"

type WorkspaceItemProps = {
  active: boolean
}

export const StyledWorkspace = styled.div`
  position: relative;

  /* Creates a line beneath the circle in the title */
  &::before {
    content: "";
    position: absolute;
    top: 25px;
    left: calc(${circleSize} / 2.1);
    width: 2px;
    height: calc(100% - 25px);
    background-color: ${primaryColor};
    opacity: 0.4;
  }
`

export const WorkspaceTitle = styled.div`
  margin-bottom: 4rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
  }

  /* Creates the circle before the workspaces text */
  p::before {
    content: "";
    border: solid 2px ${primaryColor};
    width: ${circleSize};
    height: ${circleSize};
    border-radius: 50%;
    margin-right: 2rem;
  }
`

export const WorkspaceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 2.2rem;
  max-height: 50vh;
  overflow-y: auto;
`

export const WorkspaceItem = styled.li<WorkspaceItemProps>`
  padding: 0.8rem 1.2rem;
  font-weight: ${(props) => (props.active ? "600" : "")};
  font-size: 1.6rem;
  background-color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.16)" : ""};
  border-radius: ${defaultBorderRadius};
  white-space: nowrap;
  overflow-x: clip;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: background-color ${defaultTransitionSpeed} ease;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .Workspace-Item-Menu-Button {
    opacity: 0;

    &:hover {
      background-color: unset;
    }

    &:focus {
      background-color: ${hoverOverlayColor} !important;
    }
  }

  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${hoverOverlayColor};

    .Workspace-Item-Menu-Button {
      opacity: 1;
    }
  }
`
