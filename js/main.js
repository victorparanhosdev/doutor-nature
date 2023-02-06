import { Caixinhas } from './classes.js'
new Caixinhas()


const arraysDiv = document.querySelectorAll('.sec-5-caixa-duvidas .containers-duvidas')
const PDuvida = document.querySelectorAll('.paragrafo-duvida')
const icone = document.querySelectorAll('.icone')


arraysDiv.forEach(array => {

  array.addEventListener('click', () => {
    const isOK = array.querySelector('.paragrafo-duvida').classList.contains('active')

    icone.forEach(icones => icones.innerHTML = '&#43;')

    PDuvida.forEach(deletee => {
      deletee.classList.remove('active')

    } )

    if (isOK) {
      array.querySelector('.paragrafo-duvida').classList.remove('active')
    } else {
 
      array.querySelector('.paragrafo-duvida').classList.add('active')
      array.querySelector('.icone').innerHTML = '&minus;'
    }

    
  })


})

