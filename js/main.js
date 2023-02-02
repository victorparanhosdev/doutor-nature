import { Caixinhas } from './classes.js'
new Caixinhas()


const arraysDiv = document.querySelectorAll('.sec-5-caixa-duvidas .containers-duvidas')
const icone = document.querySelectorAll('.icone')

for(let array of arraysDiv)  {
  let confere = true
  
  array.addEventListener('click', () => {
    if(confere){
      array.querySelector('.paragrafo-duvida').classList.add('active')
      array.querySelector('.icone').innerHTML = '&minus;'
      confere = false
    }else {
      array.querySelector('.paragrafo-duvida').classList.remove('active')
      array.querySelector('.icone').innerHTML = '&#43;'
      confere = true
    }
    
   
  })

   
}