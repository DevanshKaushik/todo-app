import React from "react"
import { AddTodo, FilterTodo, SideBar, TodoAreas } from "./components"
import { TodoAreasCategory } from "./components/TodoAreas"
import { Menu } from "./core-ui"
import useMenuStore from "./stores/menu"

import "./styles/app.css"

const Main = React.memo(() => {
  return (
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
  )
})

function App() {
  // Setting up the menu properties
  const menuItems = useMenuStore((state) => state.items)
  const menuVisible = useMenuStore((state) => state.visible)
  const menuPosX = useMenuStore((state) => state.posX)
  const menuPosY = useMenuStore((state) => state.posY)

  return (
    <div className="App">
      <SideBar />
      <Main />
      <Menu
        menu={{
          items: menuItems,
          posX: menuPosX,
          posY: menuPosY,
          visible: menuVisible,
        }}
      />
    </div>
  )
}

export default App
