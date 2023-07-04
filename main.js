// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector(".btnTry")
const again = document.querySelector(".again")
let rN = Math.round(Math.random() * 10)
let trys = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
again.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// função call back
function handleTryClick(event) {
        event.preventDefault()

        const inputNumber = document.querySelector("#inputNumber")

        if(Number(inputNumber.value) == rN) {
            toggleScreen()

            if (trys > 1) {
                    document.querySelector(".screen2 .title2").innerText =         (`Acertou em ${trys} tentativas`)
                } else {
                    document.querySelector(".screen2 .title2").innerText =         (`Acertou em ${trys} tentativa`)
                }
              
                
        }        
        
        if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
            alert("ERRO! O NÚMERO PRECISA SER ENTRE 0 e 10!")
        }
        
        inputNumber.value =""
        trys++
    
   

}


function handleResetClick() {
    toggleScreen()
    trys = 1
    rN = Math.round(Math.random() * 10)
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




