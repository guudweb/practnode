
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const endMessage = document.querySelector(".end-message")
const resetButton = document.querySelector(".reset-button")




const cartas = document.getElementsByClassName('hvr-float animate__animated animate__fadeInUp animate__delay-0.5s animate__fast')




toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function banner(){
  //endMessage.textContent=("perdiste")
  document.body.classList.add("overlay-is-open")
}

//window.onload = banner();

//resetButton.addEventListener("click", removeBanner)

function resetGame(){
  document.body.classList.remove("overlay-is-open")
}

function removeBanner(){
  document.body.classList.remove("overlay-is-open")
}

var cartasariibaa = {
  
  
}




