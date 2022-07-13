import styled from "styled-components"

type TodoAreasColumnProps = {
  columnWidth: number
  columnGap: number
  rowGap: number
}

export const StyledTodoAreas = styled.div`
  position: relative;
  margin-bottom: 9rem;
  width: 100%;
`

export const TodoAreasTitle = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 5rem;
  opacity: 0.8;
`

export const TodoAreasColumn = styled.div<TodoAreasColumnProps>`
  display: inline-flex;
  flex-direction: column;
  gap: ${(props) => props.rowGap}px;
  width: ${(props) => props.columnWidth}px;
  margin: 0 calc(${(props) => props.columnGap}px / 2);
`

export const TodosContainer = styled.div`
  position: relative;
`
