import React, { FunctionComponent, useState } from "react"
import { IconButton } from ".."
import { LabelColors } from "../../constants/labels"
import { ILabel } from "../../interfaces"
import useLabelsStore from "../../stores/labels"
import {
  LabelItem,
  LabelItemLeft,
  LabelName,
  LabelPickerTitle,
  Labels,
  StyledLabelPicker,
} from "./styles"

type Props = {
  activeLabelId: string | null
  onSelect: (id: string) => void
  className?: string
}

const LabelPicker: FunctionComponent<Props> = (props) => {
  const [editingLabel, setEditingLabel] = useState<ILabel | null>(null)
  const labels = useLabelsStore((state) => state.labels)
  const updateLabelName = useLabelsStore((state) => state.updateLabelName)

  const getLabelName = (label: ILabel) =>
    label.name !== "" ? label.name : label.id

  const labelNameChangeHandler = (id: string, name: string) => {
    updateLabelName(id, name)
    setEditingLabel(null)
  }

  return (
    <StyledLabelPicker className={props.className}>
      <LabelPickerTitle>Labels</LabelPickerTitle>
      <Labels>
        {labels.map((label) => (
          <LabelItem
            key={`label-item-${label.id}`}
            active={label.id === props.activeLabelId}
            color={LabelColors[label.id]}
            onClick={() => props.onSelect(label.id)}
          >
            <LabelItemLeft>
              <IconButton
                src="images/label.svg"
                className="Label-Picker-Label-Icon"
                onClick={() => {}}
                color={LabelColors[label.id]}
                noPadding
                notTabable
                size="1.5rem"
              />
              <LabelName>
                {editingLabel === label ? (
                  <input
                    type="text"
                    autoFocus
                    defaultValue={getLabelName(label)}
                    placeholder={getLabelName(label)}
                    onBlur={(e) =>
                      labelNameChangeHandler(label.id, e.currentTarget.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key !== "Enter") return
                      labelNameChangeHandler(label.id, e.currentTarget.value)
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span>{getLabelName(label)}</span>
                )}
              </LabelName>
            </LabelItemLeft>
            {(!editingLabel || editingLabel.id !== label.id) && (
              <IconButton
                className="Label-Picker-Edit-Icon"
                src="images/edit.svg"
                onClick={(e) => {
                  e.stopPropagation()
                  setEditingLabel(label)
                }}
                size="12px"
                noPadding
              />
            )}
          </LabelItem>
        ))}
      </Labels>
    </StyledLabelPicker>
  )
}

export default LabelPicker
