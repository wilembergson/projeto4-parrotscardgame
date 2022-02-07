let nCards = parseInt(prompt("Quantas cartas você deseja? (número par entre 4 e 14 cartas)"))//Numero de cartas
const cardList = [] //Array com as cartas

//Função para popular o array com as cartas
function listCards(){
    if(nCards<4 || nCards>14 || nCards%2 !== 0){
        while(nCards<4 || nCards>14 || nCards%2 !== 0){
            nCards = parseInt(prompt("Quantas cartas você deseja? ( número par entre 4 e 14 cartas)"))
        }
    }

    let figureNumber = 1
    let count = 0
    //Adicionando uma figura à cada 2 cartas
    for(let i=0; i<nCards; i++){
        cardList.push({figure:`figure-${figureNumber}.gif`})
        count++

        if(count === 2){
            figureNumber++
            count = 0
        }
    }

    cardList.sort(comparator)

    const list = document.querySelector(".cards-list")
    //Adicionando as cartas no HTML
    for(let i = 0; i<nCards; i++){
        list.innerHTML += `<div class="card" onClicK="turnCard(this)" id="${cardList[i].figureNumber}">
                                <div class="front-face face">
                                    <img src="images/front.png">
                                <\div>
                                <div class="back-face face">
                                    <img class="img" src="images/${cardList[i].figure}">
                                <\div>
                            </div>`
    }
}

function comparator() { 
	return Math.random() - 0.5; 
}

let cardsToComparate = []

function resetCards(card){
    const t = card.querySelector(".back-face-turned")
    t.classList.remove("back-face-turned")
    t.classList.add("back-face")
    card.classList.remove("selected") 
}
function comparing(element){
    cardsToComparate.push(element)

    if(cardsToComparate.length === 2){
        let images = []
        for(let i = 0; i < 2; i++){
            const img = cardsToComparate[i].querySelector(".back-face-turned .img")
            images.push(img.src)
        }

        setTimeout(()=>{
            if(images[0] !== images[1]){
                for(let i=0; i<cardsToComparate.length; i++){
                    const t = cardsToComparate[i].querySelector(".back-face-turned")
                    t.classList.remove("back-face-turned")
                    t.classList.add("back-face")
                    cardsToComparate[i].classList.remove("selected")
                }  
            }
            cardsToComparate = []
        }, 1000)
    }
}

function turnCard(element){
    if(element.classList.contains("selected")){
        const t = document.querySelector(".selected .back-face-turned")
        t.classList.remove("back-face-turned")
        t.classList.add("back-face")
        element.classList.remove("selected")
    }else{
        element.classList.add("selected")
        const t = document.querySelector(".selected .back-face")
        t.classList.remove("back-face")
        t.classList.add("back-face-turned")

        comparing(element)
    }  
}

listCards()