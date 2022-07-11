import styled from "styled-components"
import { borderRadius, colors, paddings, widths } from "../../constants/styles"

type LabelItemProps = {
  active: boolean
  color: string
}

export const StyledLabelPicker = styled.div`
  padding: ${paddings.smallPadding} 0;
  background-color: ${colors.menuColor};
  border-radius: ${borderRadius.defaultBorderRadius};
  box-shadow: -5px 5px 10px 2px rgba(0, 0, 0, 0.25);
  width: ${widths.labelPickerWidth}px;

  .Label-Picker {
    &-Label-Icon {
      pointer-events: none;
    }

    &-Edit-Icon {
      visibility: hidden;
      padding: 0.5rem;
    }
  }
`

export const LabelPickerTitle = styled.span`
  display: block;
  font-weight: bold;
  margin-left: ${paddings.defaultPadding};
  margin-bottom: 2rem;
`

export const Labels = styled.ul`
  list-style: none;
  padding: 0 ${paddings.smallPadding};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const LabelItem = styled.li<LabelItemProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  border-radius: ${borderRadius.defaultBorderRadius};
  background-color: ${(props) =>
    props.active ? colors.activeColor + "!important" : "tranparent"};

  &::before {
    content: ${(props) => (props.active ? '""' : "null")};
    height: 100%;
    width: 4.5rem;
    position: absolute;
    left: 0;
    border-radius: ${borderRadius.defaultBorderRadius} 0 0
      ${borderRadius.defaultBorderRadius};
    background-color: ${(props) => props.color};
    filter: saturate(1.5) brightness(0.6);
  }

  &:hover {
    background-color: ${colors.hoverColor};

    .Label-Picker-Edit-Icon {
      visibility: unset;
    }
  }
`

export const LabelItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  min-width: 0;
`

export const LabelName = styled.div`
  display: flex;
  min-width: 0;

  span {
    padding: 0.5rem;
    white-space: nowrap;
    overflow-x: clip;
    text-overflow: ellipsis;
  }

  input {
    background-color: transparent;
    border-radius: ${borderRadius.defaultBorderRadius};
    outline: 1px solid white;
    border: none;
    padding: 0.5rem;
    width: 100%;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`
