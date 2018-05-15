const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  
  const userName = form.userName.value
  const age = form.age.value
 

  const users = document.querySelector('#users')

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '

 function renderColor(){
     //debugger
     const colorDiv = document.createElement('div')
    const form = ev.target
    const favoriteColor = form.favoriteColor.value
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)
}
renderColor()


  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  users.appendChild(list)

  //form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)
