let write = document.getElementById('write')
let todo = document.getElementById('todo-list')

function changeBorder () {
  let changeb = document.getElementById('write')
  changeb.style.border = '2px solid red'
}

function resetBorder () {
  let resetb = document.getElementById('write')
  resetb.style.border = '2px solid blue'
}

write.addEventListener('keyup', function (e) {
  if (e.key == 'Enter') {
    // todo.innerHTML = this.value
    addTodo(this.value)
    this.value = ''
  }
})

function addTodo (val) {
  let list = document.createElement('li')
  list.style.fontWeight = 'bolder'
  list.style.fontSize = '30px'
  list.style.cursor = 'pointer'
  list.innerHTML = `${val}`
  todo.appendChild(list)
  console.log(val)

  list.addEventListener('click', function () {
    this.classList.toggle('done')
  // list.innerHTML = ''
  })
}
