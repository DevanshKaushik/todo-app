import React from "react"
import { AddTodo, FilterTodo, SideBar, TodoAreas } from "./components"
import { TodoAreasCategory } from "./components/TodoAreas"
import "./styles/app.css"

function App() {
  return (
    <div className="App">
      <SideBar />
      <main>
        <div className="Add-Todo-Container">
          <AddTodo />
          <FilterTodo />
        </div>
        <TodoAreas
          category={TodoAreasCategory.PINNED}
          columnGap={30}
          rowGap={40}
          columnWidth={340}
        />
      </main>
    </div>
  )
}

export default App
