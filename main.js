const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const display = document.getElementById('display')
const limpiar = document.getElementById('limpiar')
const botones = document.querySelector('.calculadora')

botones.addEventListener('click',(event)=>{
    if (event.target.id=='suma'){
        operando.textContent="+"
    }
    if (event.target.id=='resta'){
        operando.textContent="-"
    }
    if (event.target.id=='mult'){
        operando.textContent="x"
    }
    if (event.target.id=='divi'){
        operando.textContent="/"
    }
    if (event.target.id=='limpiar'){
        operando.textContent=""
        display.textContent=""
        num1.value=""
        num2.value=""
    }

    if (event.target.id=='igual'){
        if (operando.textContent=="+"){
            let suma=+num1.value+ (+num2.value)
            display.textContent=suma
        }
        else if (operando.textContent=="-"){
            let resta=+num1.value- (+num2.value)
            display.textContent=resta
        }
        else if (operando.textContent=="x"){
            let mul=+num1.value * (+num2.value)
            display.textContent=mul
        }
        else if (operando.textContent=="/"){
            let div=+num1.value / (+num2.value)
            display.textContent=div
        }
        else {
            alert('Digite los numero o la operacion a realizar')
        }
    }
})