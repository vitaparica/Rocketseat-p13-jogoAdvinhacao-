//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick) //evento (click) + função callback
btnReset.addEventListener('click', handleResetClick) //evento (click) + função anonima callback

//Funções callback
function handleTryClick(event) {
  event.preventDefault() 

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  if (Number(inputNumber.value) == "") {
    alert("Por favor insira um número!")
    xAttempts = 0
  }

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
    alert("Por favor insira um número entre 0 a 10!")
    }

    inputNumber.value = ""
    
    xAttempts++

    console.log(xAttempts)
    console.log(randomNumber) 
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}