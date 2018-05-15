const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  
  renderList()

  
}


 function renderColor(){
     //debugger
     const colorDiv = document.createElement('div')
    const favoriteColor = form.favoriteColor.value
    colorDiv.style.backgroundColor = favoriteColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
    
}
//renderColor()




function renderListItem(list){
   // debugger
    const userName = form.userName.value
const age = form.age.value
const users = document.querySelector('#users')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`
  
    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
  
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    colorItem.appendChild(renderColor())
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)
    users.appendChild(list)
}

  function renderList(){
    const list = document.createElement('ul')
   renderListItem(list)
  }
 

  form.reset()
  form.userName.focus()


form.addEventListener('submit', handleSubmit)
