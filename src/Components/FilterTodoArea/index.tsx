import React from "react"
import { FilterTodoButton, StyledFilterTodoArea } from "./styles"

const FilterTodoArea = () => {
  return (
    <StyledFilterTodoArea>
      <FilterTodoButton tabIndex={0} active={false}>
        All
      </FilterTodoButton>
      <FilterTodoButton tabIndex={0} active={true}>
        Incomplete
      </FilterTodoButton>
      <FilterTodoButton tabIndex={0} active={false}>
        Complete
      </FilterTodoButton>
    </StyledFilterTodoArea>
  )
}

export default FilterTodoArea
