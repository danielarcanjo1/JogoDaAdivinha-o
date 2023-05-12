let randomNumber = Math.round(Math.random()*10)
let nAttempts = 1;
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")
let erroMe = document.querySelector("#hiddenP")

function clickButtonTry(event){
    
    event.preventDefault()
    
    const  imputNumber = document.querySelector("#button1")
    
    if(Number(imputNumber.value) == randomNumber){
        console.log("acertou")
        screen1.style.display = "none"
        screen2.style.display = "flex"
        document.querySelector(".screen2 h2").innerText =
         `acertou em ${nAttempts} Tentativas`
    }
    else{
        erroMe.style.display = "block"
    }
    imputNumber.value = ""
    nAttempts++
    erroMe.style.display = "none"
}

function backInitialScreen(event){
    event.preventDefault()
    screen2.style.display = "none"
    screen1.style.display = "flex"
    randomNumber = Math.round(Math.random()*10)
}

buttonTry.addEventListener('click', clickButtonTry)
buttonReset.addEventListener('click', backInitialScreen)