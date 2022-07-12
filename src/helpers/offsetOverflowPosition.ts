const offsetOverflowPosition = (element: HTMLElement) => {
  const { clientWidth: bodyWidth, clientHeight: bodyHeight } = document.body

  const { right, bottom } = element.getBoundingClientRect()
  const bufferWidth = 20
  let xOffset = 0
  let yOffset = 0

  if (right > bodyWidth) {
    xOffset = bodyWidth - right - bufferWidth
  }

  if (bottom > bodyHeight) {
    yOffset = bodyHeight - bottom - bufferWidth
  }

  element.style.transform = `translate(${xOffset}px, ${yOffset}px)`
}

export default offsetOverflowPosition
