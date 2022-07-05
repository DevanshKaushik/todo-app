import React from "react"
import { FilterTodoButton, StyledFilterTodo } from "./styles"

const FilterTodo = () => {
  return (
    <StyledFilterTodo>
      <FilterTodoButton tabIndex={0} active={false}>
        All
      </FilterTodoButton>
      <FilterTodoButton tabIndex={0} active={true}>
        Incomplete
      </FilterTodoButton>
      <FilterTodoButton tabIndex={0} active={false}>
        Complete
      </FilterTodoButton>
    </StyledFilterTodo>
  )
}

export default FilterTodo
