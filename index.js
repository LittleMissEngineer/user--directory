console.log('It works!')

let counter = 0;
const changeText = function(){
    document.getElementById('heading').innerHTML = "SUUUUUUURRRRPRRRIIISSSEEEE!"
    counter = counter + 1
    if(counter > 2){
        document.getElementById('title').innerHTML = "HAPPY BIRTHDAY!"
    }
}

const changeMessage = function(){
    document.getElementById('title').innerHTML = "This is actually a birthday card in disguise!"
}
const hiddenMessage = function(){
    document.getElementById('viewing').innerHTML = "It's not your birthday?"
}
  const ourMistake = function(){
    document.getElementById('viewed').innerHTML = "Opps...."
  }  

  const submission = function(){

    let x = document.getElementById('submit').elements[0].value

    document.getElementById('viewed').innerHTML = x
    

  }
    


const button = document.querySelector('button')
button.addEventListener('click', changeText)
