import React, { FunctionComponent, useEffect, useReducer } from "react"
import { v4 as uuid } from "uuid"

import { IconButton } from "../../core-ui"
import { workspacesStorageKey } from "../../constants/localStorageKeys"
import { colors } from "../../constants/styles"
import {
  StyledWorkspace,
  WorkspaceTitle,
  WorkspaceList,
  WorkspaceItem,
} from "./styles"
import { IMenuItem } from "../../interfaces"
import { useMenuButton } from "../../hooks/useMenuButton"

interface Workspace {
  id: string
  name: string
  active: boolean
}

enum WorkspacesActionKind {
  ADD = "ADD",
  TOGGLE_ACTIVE = "TOGGLE_ACTIVE",
}

type WorkspacesAction = {
  type: WorkspacesActionKind
  payload: Workspace
}

const workspaceReducer = (
  state: Workspace[],
  action: WorkspacesAction
): Workspace[] => {
  const { type, payload } = action

  switch (type) {
    case WorkspacesActionKind.ADD:
      return [
        ...state.map((workspace) => ({
          ...workspace,
          active: false,
        })),
        payload,
      ]

    case WorkspacesActionKind.TOGGLE_ACTIVE:
      return [
        ...state.map((workspace) =>
          workspace.id === payload.id
            ? { ...workspace, active: true }
            : { ...workspace, active: false }
        ),
      ]

    default:
      return state
  }
}

const Workspaces: FunctionComponent = () => {
  const [workspaces, dispatch] = useReducer(workspaceReducer, [])

  useEffect(() => {
    const rawWorkspaces = localStorage.getItem(workspacesStorageKey)
    if (!rawWorkspaces || rawWorkspaces.length <= 0) {
      const defaultWorkspace: Workspace = {
        id: uuid(),
        name: "Default",
        active: true,
      }

      dispatch({
        type: WorkspacesActionKind.ADD,
        payload: defaultWorkspace,
      })
      return
    }

    const workspaces: Workspace[] = JSON.parse(rawWorkspaces)

    workspaces.forEach((workspace) => {
      dispatch({
        type: WorkspacesActionKind.ADD,
        payload: workspace,
      })
    })
  }, [])

  //* Commented for developent, uncomment for production
  // useEffect(() => {
  //   localStorage.setItem(workspacesStorageKey, JSON.stringify(workspaces))
  // }, [workspaces])

  const workspaceItemClickHandler = (workspace: Workspace) => {
    if (workspace.active) return

    dispatch({
      type: WorkspacesActionKind.TOGGLE_ACTIVE,
      payload: workspace,
    })
  }

  const addButtonClickHandler = () => {
    dispatch({
      type: WorkspacesActionKind.ADD,
      payload: {
        id: uuid(),
        name: "New Workspace",
        active: true,
      },
    })
  }

  // Setting up the menu items
  const menuItems: IMenuItem[] = [
    { name: "Delete", action: () => {} },
    { name: "Rename", action: () => {} },
    { name: "Make a copy", action: () => {} },
    { name: "Set active", action: () => {} },
  ]

  const { menuButtonClickHandler } = useMenuButton(menuItems)

  return (
    <StyledWorkspace>
      <WorkspaceTitle>
        <p>Workspaces</p>
        <IconButton
          src="images/plus.svg"
          onClick={addButtonClickHandler}
          color={colors.primaryColor}
        />
      </WorkspaceTitle>
      <WorkspaceList>
        {workspaces.map((workspace) => (
          <WorkspaceItem
            onClick={() => workspaceItemClickHandler(workspace)}
            onKeyDown={(e: React.KeyboardEvent) => {
              return e.key !== "Enter" || workspaceItemClickHandler(workspace)
            }}
            active={workspace.active}
            key={workspace.id}
            tabIndex={0}
          >
            {workspace.name}
            <IconButton
              className="Workspace-Item-Menu-Button"
              src="images/menu.svg"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                menuButtonClickHandler(e)
              }}
            />
          </WorkspaceItem>
        ))}
      </WorkspaceList>
    </StyledWorkspace>
  )
}

export default Workspaces
