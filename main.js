const operando = document.getElementById('operando')
const display = document.getElementById('display')
const limpiar = document.getElementById('limpiar')
const botones = document.querySelector('.calculadora')
let numero1= ""
let numero2 = 0
let numero3 = []

botones.addEventListener('click',(event)=>{
    
    if (event.target.id=='0'){
        numero1+=0
        display.textContent+=numero1
        numero2+=numero1
        numero1=0

    }

    if (event.target.id=='1'){
        numero1+=1
        display.textContent+=numero1
        numero2+=numero1
        numero1=0
    }

    if (event.target.id=='2'){
        numero1+=2
        display.textContent+=numero1
        numero2+=numero1
        numero1=0
    }

    if (event.target.id=='3'){
        numero1+=3
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='4'){
        numero1+=4
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='5'){
        numero1+=5
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='6'){
        numero1+=6
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='7'){
        numero1+=7
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='8'){
        numero1+=8
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }

    if (event.target.id=='9'){
        numero1+=9
        display.textContent+=numero1
        numero2.push(+numero1)
        numero1=0
    }   

    
    if (event.target.id=='suma'){
        display.textContent+=" + "
        numero3.push(numero2)
        console.log(numero3)
    }

    // if (event.target.id=='resta'){
    //     display.textContent+=" - "
    // }
    // if (event.target.id=='mult'){
    //     display.textContent+=" x "
    // }
    // if (event.target.id=='divi'){
    //     display.textContent+=" / "
    // }
    // if (event.target.id=='limpiar'){
    //     display.textContent=""
    //     numero1=0
    // }


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