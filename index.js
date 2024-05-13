import { name } from "./main.js";
import { test } from "./main.js";


const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.puntos')

punto.forEach((cadapunto,i)=>{
    punto[i].addEventListener('click',()=>{
        let position = i
        let operation = position * -33.3
        grande.style.transform = `translate(${operation}%)`

        punto.forEach((cadapunto,i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
let testeo = test
testeo()