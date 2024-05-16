const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.puntos')
const menu = document.querySelector('.hidden-nav')
const menuHidden = document.querySelector('.menu-hidden')
const menuUnHidden = document.querySelector('.unmenu-hidden')
const btns = document.querySelector('#btn-menu')


window.addEventListener('resize',()=>{
    if(window.screen.width <= 450){
        btns.style.display = 'none'
        menuHidden.style.display = 'flex'
        menuUnHidden.style.display = 'none'
    }
    if(window.screen.width > 450){
        btns.style.display = 'flex'
        menuHidden.style.display = 'none'
        menuUnHidden.style.display = 'none'
        menu.style.left = '-100%'
    }

})

const shower = ()=>{    
    menu.style.left = '0'
    menuHidden.style.display = 'none'
    menuUnHidden.style.display = 'flex'
}
const unshower = ()=>{    
    menu.style.left = '100%'
    menuHidden.style.display = 'flex'
    menuUnHidden.style.display = 'none'
}
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


