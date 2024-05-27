// Traversal the DOM :

// 1. parentElement & parentNode :

var parent = document.querySelector('div')
var p = parent.parentElement
console.log(p) // body

var parentN = document.querySelector('div')
var p1 = parentN.parentNode
console.log(p1) // body

var parent = document.querySelector('html')
var p = parent.parentElement
console.log(p) // null

// here if you are using parentNode then it will always return something, that's the difference between parentNode and parentElement
var parentN = document.querySelector('html')
var p1 = parentN.parentNode
console.log(p1) // document

// 2. PreviousElementSibling & previousSibling :

var siblings = document.querySelector('.Hero').previousElementSibling // It will return a previous list
console.log(siblings)

var sibling = document.querySelector('.Hero').previousSibling // It will return a text
console.log(sibling)

var siblings = document.querySelector('.Hero').previousElementSibling.previousElementSibling
console.log(siblings)

var siblings = document.querySelector('.John')
if (siblings.previousElementSibling == null) {
  console.log('Sibling is not present')
} else {
  console.log(siblings.previousElementSibling)
}

// 3. nextSibling & nextElementSibling :

var siblings = document.querySelector('.Hero').nextElementSibling // It will return a next list
console.log(siblings)

var sibling = document.querySelector('.Hero').nextSibling // It will return a text
console.log(sibling)

// 3. Children

var child = document.querySelector('ul')

console.log(child.children[0])
console.log(child.children[1])

// 4. appendChild & createElement : 

// We can add a child by our own by using createElement and appendChild.

const newElement = document.createElement('li')
newElement.textContent = 'The man'

var child = document.querySelector('ul').appendChild(newElement)

// 5. remove : It will delete from the top of the list

var removeElement = document.querySelector('li')
removeElement.remove()

// 6. replaceChild

var replace = document.querySelector('ul')

const newChild = document.createElement('li')
newChild.textContent = 'Seth Rollins'
const childToChange = replace.children[2]

replace.replaceChild(newChild, childToChange)

// 7. innerText and textContent :

var innerT = document.querySelector('h1').innerText
console.log(innerT) // Top 5 wrestlers

// If we add a style to span tag inside h1 tag like 'display : none' then "innerText" will not show the content inside the span tag but by using "textContent" we are able to access the content inside the span tag.

var textC = document.querySelector('h1').textContent
console.log(textC) // Top 5 wrestlers in the world

// 8. innerHtml and outerHtml :

let innerH = document.querySelector('.Hero').innerHTML = '<b>Dwyane Johnson</b>'
console.log(innerH)

let innerH1 = document.querySelector('.Hero').innerHTML += '- The Rock'
console.log(innerH1)

let outerH = document.querySelector('.Hero').outerHTML = '<b>Dwyane Johnson</b>'
console.log(outerH)

// 9. Styles in DOM :

document.body.style.backgroundColor = 'lightgrey'
let cl = document.querySelector('h1')
cl.style.color = 'red'

// Attributes :

// 1. getAttribute :

let hero = document.querySelector('#hero')

console.log(hero.getAttribute('about'))

// 2. setAttribute :

hero.setAttribute('example', 12345)
console.log(hero.outerHTML)

for (let att of hero.attributes) {
  console.log(`${att.name} = ${att.value}`)
}
