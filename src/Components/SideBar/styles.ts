import styled from "styled-components"
import { colors, paddings } from "../../constants/styles"

export const StyledSideBar = styled.aside`
  padding: ${paddings.largePadding};
  background-color: ${colors.sideBarColor};
  display: flex;
  flex-direction: column;
  width: 30rem;
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;
`
