import React, { FunctionComponent } from "react"
import { StyledSideBar, LogoBox } from "./styles"
import { Workspaces } from ".."

const SideBar: FunctionComponent = () => {
  return (
    <StyledSideBar>
      <LogoBox>
        <img src="images/logo.svg" alt="Todos Logo" />
      </LogoBox>
      <Workspaces />
    </StyledSideBar>
  )
}

export default React.memo(SideBar)
