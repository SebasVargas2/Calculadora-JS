const operando = document.getElementById('operando')
const display = document.getElementById('display')
const limpiar = document.getElementById('limpiar')
const botones = document.querySelector('.calculadora')
let numero1= ""
let op = ""
let flag=false
let arreglo= []
let result=0

botones.addEventListener('click',(event)=>{
    
    if (event.target.id=='0'){
        numero1+=0
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='1'){
        numero1+=1
        display.textContent+=numero1
        numero1=0
    }

    if (event.target.id=='2'){
        numero1+=2
        display.textContent+=numero1
        numero1=0
    }

    if (event.target.id=='3'){
        numero1+=3
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='4'){
        numero1+=4
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='5'){
        numero1+=5
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='6'){
        numero1+=6
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='7'){
        numero1+=7
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='8'){
        numero1+=8
        display.textContent+=numero1
        numero1=""
    }

    if (event.target.id=='9'){
        numero1+=9
        display.textContent+=numero1
        numero1=""
    }   

    
    if (event.target.id=='suma'){
        display.textContent+=" + "
    }

    if (event.target.id=='resta'){
        display.textContent+=" - "
    }
    if (event.target.id=='mult'){
        display.textContent+=" x "
    }
    if (event.target.id=='divi'){
        display.textContent+=" / "
    }
    if (event.target.id=='limpiar'){
        display.textContent=""
        numero1=0
        op=""
        result=""
    }

    if (event.target.id=='igual'){
        op+=display.textContent

        if (flag==true) {
            result=0
            op=display.textContent
            arreglo.push(op)
            console.log(arreglo)
            arreglo = op.split(/([-+x/])/)
        }

        if (flag==false){
            arreglo = op.split(/([-+x/])/)
            flag=true
        }
        result = +(arreglo[0])


        for ( i= 1; i<arreglo.length; i+=2) {
            let operator = arreglo[i]
            let sig = +(arreglo[i+1])

            if (operator=="+"){
                result+=sig
            }
            else if (operator=="-"){
                result-=sig
            }
            else if (operator=="x"){
                result*= sig
            }
            else if (operator=="/"){
                result/=sig
            }
        }
        display.textContent=result
        arreglo.length=0
        numero1=''
    }   
})

window.addEventListener('keydown',(evento)=>{
    if (evento.key == 0){
        numero1+=0
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 1){
        numero1+=1
        display.textContent+=numero1
        numero1=0
    }

    if (evento.key== 2){
        numero1+=2
        display.textContent+=numero1
        numero1=0
    }

    if (evento.key== 3){
        numero1+=3
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 4){
        numero1+=4
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 5){
        numero1+=5
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 6){
        numero1+=6
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 7){
        numero1+=7
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 8){
        numero1+=8
        display.textContent+=numero1
        numero1=""
    }

    if (evento.key== 9){
        numero1+=9
        display.textContent+=numero1
        numero1=""
    }   
    
    if (evento.key== '+'){
        display.textContent+=" + "
    }

    if (evento.key== '.'){
        display.textContent+="."
    }

    if (evento.key== '-'){
        display.textContent+=" - "
    }
    if (evento.key== '*'){
        display.textContent+=" x "
    }
    if (evento.key== '/'){
        display.textContent+=" / "
    }
    if (evento.key== 'Escape'){
        display.textContent=""
        numero1=0
        op=""
        result=""
    }

    if (evento.key== 'Delete'){
        display.textContent=""
        numero1=0
        op=""
        result=""
    }

    if (evento.key == 'Backspace'){
        let contenido = display.textContent
        display.textContent=contenido.slice(0,contenido.length-1)
    }

    if (evento.key== 'Enter'){
        op+=display.textContent

        if (flag==true) {
            result=0
            op=display.textContent
            arreglo.push(op)
            console.log(arreglo)
            arreglo = op.split(/([-+x/])/)
        }

        if (flag==false){
            arreglo = op.split(/([-+x/])/)
            flag=true
        }
        result = +(arreglo[0])


        for ( i= 1; i<arreglo.length; i+=2) {
            let operator = arreglo[i]
            let sig = +(arreglo[i+1])

            if (operator=="+"){
                result+=sig
            }
            else if (operator=="-"){
                result-=sig
            }
            else if (operator=="x"){
                result*= sig
            }
            else if (operator=="/"){
                result/=sig
            }
        }
        display.textContent=result
        arreglo.length=0
        numero1=''
    }  
})
