import { Caixinhas } from "./classes.js";
new Caixinhas()





const btnDuvidas = document.querySelectorAll(".sec-5-caixa-duvidas > div .btn-duvidas")

const cxDuvidas = document.querySelector('.sec-5-caixa-duvidas')


for(let btn of btnDuvidas){


  btn.onclick = () => cxDuvidas.classList.toggle('active')

}

