
class Caixinhas {
    constructor(){
        this.lista = {
            caixa1: document.querySelector('.lista-caixas button:nth-child(1)'),
            caixa2: document.querySelector('.lista-caixas button:nth-child(2)'),
            caixa3: document.querySelector('.lista-caixas button:nth-child(3)'),
            corpo: document.querySelector('.caixa-de-precos'),
            caixa4: document.querySelector('.img-caixa')
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
            cor: "background: #1fab36; color: white;",
            imagem: "./asset/aaox-1.png"
            
           
        },
        {
            primeiroP: "R$ 148,60 por caixa",
            PspanA: "Economize R$136,00",
            segundoP: "HOJE 12x R$49.90",
            PspanB: "ou R$445,80 à vista",
            cor: "background: #1fab36; color: white;",
            imagem: "./asset/aaox-3.png"
     
        },
        {
            primeiroP: "R$ 190,00 por caixa",
            PspanA: "Economize R$ 500,00",
            segundoP: "HOJE 12x R$ 88,00",
            PspanB: "ou R$ 860,00 à vista",
            cor: "#1fab36; color: white;",
            imagem: "./asset/aaox-6.png"
         
            
        },
    ]
    }

    clicar(){
        this.lista.caixa1.addEventListener('click', (event) => {
            this.update(0)
            this.lista.caixa4.src = this.dados[0].imagem
             this.lista.caixa4.alt = `imagem da caixa 1`
    
        })

    this.lista.caixa2.addEventListener('click', (event) => {
        this.update(1)
        this.lista.caixa4.src = this.dados[1].imagem
        this.lista.caixa4.alt = `imagem da caixa 3`

    })
    this.lista.caixa3.addEventListener('click', (event) => {
        this.update(2)
        this.lista.caixa4.src = this.dados[2].imagem
        this.lista.caixa4.alt = `imagem da caixa 6`
        
    })

    }

    update(index) {
        this.removeAll()
        const div = this.createRow();
        div.querySelector(".primeiroP").textContent = this.dados[index].primeiroP
        div.querySelector(".PspanA").textContent = this.dados[index].PspanA
        div.querySelector(".segundoP").textContent = this.dados[index].segundoP
        div.querySelector(".PspanB").textContent = this.dados[index].PspanB
        

        this.lista.corpo.append(div)    

        
    }
    removeAll(value){
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