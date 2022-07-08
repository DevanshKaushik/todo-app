import React, { useEffect, useRef } from "react"
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
  const menuItems = useMenuStore((state) => state.menuItems)
  const menuVisible = useMenuStore((state) => state.menuVisible)
  const setMenuVisible = useMenuStore((state) => state.setMenuVisible)
  const menuPosX = useMenuStore((state) => state.menuPosX)
  const menuPosY = useMenuStore((state) => state.menuPosY)

  // Handling menu close on click outside of it
  const menuRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { current } = menuRef
      if (!current) return
      if (!current.contains(e.target as Node)) {
        setMenuVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [setMenuVisible])

  return (
    <div className="App">
      <SideBar />
      <Main />
      <Menu
        ref={menuRef}
        menuItems={menuItems}
        posX={menuPosX}
        posY={menuPosY}
        visible={menuVisible}
      />
    </div>
  )
}

export default App
