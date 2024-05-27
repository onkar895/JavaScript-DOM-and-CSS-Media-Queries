function myMove () {
  let pos = 0
  const element = document.getElementById('inside')

  const id = setInterval(frame, 10)

  function frame () {
    if (pos == 400) {
      clearInterval(id)
    }
    pos++
    element.style.top = pos + 'px'
    element.style.left = pos++ + 'px'
  }
}

// More optimized code
function moveDiagonally () {
  let pos = 0
  const element = document.getElementById('inside')
  const resetButton = document.getElementById('resetButton')

  const id = setInterval(() => {

    resetButton.addEventListener('click', reset)

    if (pos >= 400) {
      clearInterval(id)
    } else {
      pos++
      element.style.top = pos + 'px'
      element.style.left = pos++ + 'px'
    }
  }, 10)

  function reset () {
    clearInterval(id) // Stop the animation
    pos = 0
    direction = 0
    element.style.top = '0px'
    element.style.left = '0px'
  }

  r
}

function moveAllFourSides () {
  let pos = 0
  let direction = 0
  const element = document.getElementById('inside')
  const resetButton = document.getElementById('resetButton')

  const id = setInterval(frame, 10)

  resetButton.addEventListener('click', reset)

  switch (direction) {
    case 0: // Move from top-left to top-right
      if (pos >= 400) {
        direction = 1
        pos = 0
      } else {
        pos++
        element.style.left = pos + 'px'
      }
      break
    case 1: // Move from top-right to bottom-right
      if (pos >= 400) {
        direction = 2
        pos = 0
      } else {
        pos++
        element.style.top = pos + 'px'
      }
      break
    case 2: // Move from bottom-right to bottom-left
      if (pos >= 400) {
        direction = 3
        pos = 0
      } else {
        pos++
        element.style.left = (400 - pos) + 'px'
      }
      break
    case 3: // Move from bottom-left to top-left
      if (pos >= 400) {
        clearInterval(id)
        reset()
      } else {
        pos++
        element.style.top = (400 - pos) + 'px'
      }
      break
  }
}

function reset () {
  clearInterval(id) // Stop the animation
  pos = 0
  direction = 0
  element.style.top = '0px'
  element.style.left = '0px'
}
