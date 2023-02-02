
class Caixinhas {
    constructor(){
        this.lista = {
            caixa1: document.querySelector('.lista-caixas button:nth-child(1)'),
            caixa2: document.querySelector('.lista-caixas button:nth-child(2)'),
            caixa3: document.querySelector('.lista-caixas button:nth-child(3)'),
            corpo: document.querySelector('.caixa-de-precos')
        }
        

       this.load()
       this.clicar()
       this.update(2)
    }
    load(){

        this.dados = [{
            primeiroP: "R$ 90,00 por caixa",
            PspanA: "Economize R$ 100,00",
            segundoP: "HOJE 12x R$ 35,00",
            PspanB: "ou R$ 360,00 à vista",
            cor: "background: #1fab36; color: white;"
            
           
        },
        {
            primeiroP: "R$ 148,60 por caixa",
            PspanA: "Economize R$136,00",
            segundoP: "HOJE 12x R$49.90",
            PspanB: "ou R$445,80 à vista",
            cor: "background: #1fab36; color: white;",
     
        },
        {
            primeiroP: "R$ 190,00 por caixa",
            PspanA: "Economize R$ 500,00",
            segundoP: "HOJE 12x R$ 88,00",
            PspanB: "ou R$ 860,00 à vista",
            cor: "#1fab36; color: white;"
         
            
        },
    ]
    }

    clicar(){

        this.lista.caixa1.addEventListener('click', (event) => {
            this.update(0)
          
        })
        this.lista.caixa2.addEventListener('click', (event) => {
            this.update(1)
    
        })
        this.lista.caixa3.addEventListener('click', (event) => {
            this.update(2)
            
        })
    }

    update(index) {
        this.removeAll()
        const div = this.createRow();
        div.querySelector(".primeiroP").textContent = this.dados[index].primeiroP
        div.querySelector(".PspanA").textContent = this.dados[index].PspanA
        div.querySelector(".segundoP").textContent = this.dados[index].segundoP
        div.querySelector(".PspanB").textContent = this.dados[index].PspanB
        this.lista.corpo.style.background = this.dados[index].cor
        this.lista.corpo.append(div)    

        
    }
    removeAll(){
        this.lista.corpo.querySelectorAll('div').forEach(div => div.remove())
        
    }
    createRow() {

        const div = document.createElement('div')
        div.innerHTML = ` <p class="primeiroP">R$ 148,60 por caixa</p>
        <span class="PspanA">Economize R$136,00</span>

        <p class="segundoP">HOJE 12x R$49.90</p>
        <span class="PspanB">ou R$445,80 à vista</span>`
        div.classList.add('caixa-de-precos')
        return div
    }
}

new Caixinhas()