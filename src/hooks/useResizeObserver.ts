import { createRef, useEffect, useState } from "react"

export const useResizeObserver = <T extends HTMLElement>() => {
  const [width, setWidth] = useState(0)
  const ref = createRef<T>()

  useEffect(() => {
    const { current } = ref
    if (!current) return

    const updateWidth = (boundingRect: ResizeObserverEntry["contentRect"]) => {
      const { width } = boundingRect
      setWidth(Math.round(width))
    }
    const resizeObserver = new ResizeObserver((entries) => {
      updateWidth(entries[0].contentRect)
    })
    resizeObserver.observe(current)
  }, [ref])
  return { width: width, ref: ref }
}
