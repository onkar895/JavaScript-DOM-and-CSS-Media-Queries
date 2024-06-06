const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')

expenseForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const description = document.getElementById('description').value
  const category = document.getElementById('category').value
  const amount = document.getElementById('amount').value

  if (description && category && !isNaN(amount)) {
    const newRow = document.createElement('tr')

    newRow.innerHTML = `<td>${description}</td>
                   <td>${category}</td>
                   <td>${amount}</td>
                   <td><button class="remove-btn">❌</button></td>`

    newRow.style.fontFamily = 'ubuntu'
    newRow.style.fontSize = '14px'
    newRow.style.fontWeight = 'bold'

    expenseList.appendChild(newRow)

    newRow.querySelector('.remove-btn').addEventListener('click', function () {
      newRow.innerHTML = ''
    })

    document.getElementById('description').value = ''
    document.getElementById('category').value = ''
    document.getElementById('amount').value = ''
  } else {
    alert('Please fill out all fields with valid Data')
  }
})
