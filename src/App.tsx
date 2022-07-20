import React from "react"
import { AddTodoArea, FilterTodoArea, SideBar, TodoArea } from "./components"
import { Menu } from "./core-ui"
import useMenuStore from "./stores/menu"

import "./styles/app.css"

const Main = React.memo(() => {
  return (
    <main>
      <div className="Add-Todo-Container">
        <AddTodoArea />
        <FilterTodoArea />
      </div>
      <TodoArea columnGap={30} rowGap={40} columnWidth={340} />
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
