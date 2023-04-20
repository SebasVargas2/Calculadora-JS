const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operando = document.getElementById('operando')
const display = document.getElementById('display')
const limpiar = document.getElementById('limpiar')
const botones = document.querySelector('.calculadora')
let numero1= 0

botones.addEventListener('click',(event)=>{
    if (event.target.id=='suma'){
        operando.textContent="+"
        numero1+=num1.value
        num1.value=""
    }
    if (event.target.id=='resta'){
        operando.textContent="-"
        numero1+=num1.value
        num1.value=""
    }
    if (event.target.id=='mult'){
        operando.textContent="x"
        numero1+=num1.value
        num1.value=""
    }
    if (event.target.id=='divi'){
        operando.textContent="/"
        numero1+=num1.value
        num1.value=""
    }
    if (event.target.id=='limpiar'){
        operando.textContent=""
        display.textContent=""
        num1.value=""
        numero1=0
    }

    if (event.target.id=='igual'){
        if (operando.textContent=="+"){
            let suma=+num1.value+ (+numero1)
            display.textContent=suma
            num1.value=""
            numero1=0
        }
        else if (operando.textContent=="-"){
            let resta= +numero1-(+num1.value)
            display.textContent=resta
            num1.value=""
            numero1=0
        }
        else if (operando.textContent=="x"){
            let mul= +numero1*(+num1.value)
            display.textContent=mul
            num1.value=""
            numero1=0
        }
        else if (operando.textContent=="/"){
            let div= +numero1/(+num1.value)
            display.textContent=div
            num1.value=""
            numero1=0
        }
        else {
            alert('Digite los numero o la operacion a realizar')
        }
    }
})