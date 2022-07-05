import styled from "styled-components"
import { largePadding, sideBarColor } from "../../constants/styles"

export const StyledSideBar = styled.aside`
  padding: ${largePadding};
  background-color: ${sideBarColor};
  display: flex;
  flex-direction: column;
  width: 30rem;
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
`
