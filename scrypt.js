let nCards = parseInt(prompt("Quantas cartas você deseja? (número par entre 4 e 14 cartas)"))//Numero de cartas
const cardList = [] //Array com as cartas
let nPlays = 0 //Número de jogadas
let playsOk = 0 //Jogadas bem sucedidas

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
        list.innerHTML += `<div class="card" data-identifier="card" onClicK="turnCard(this)" id="${cardList[i].figureNumber}">
                                <div class="front-face face" data-identifier="back-face">
                                    <img src="images/front.png">
                                <\div>
                                <div class="back-face face" data-identifier="front-face">
                                    <img class="img" src="images/${cardList[i].figure}">
                                <\div>
                            </div>`
    }
}

//Gera um valor aleatório
function comparator() { 
	return Math.random() - 0.5; 
}

//Array que armazena as cartas a serem comparadas
let cardsToComparate = []

//Função para comparar as cartas
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
                    const card = cardsToComparate[i].querySelector(".back-face-turned")
                    card.classList.remove("back-face-turned")
                    card.classList.add("back-face")
                    cardsToComparate[i].classList.remove("selected")
                }
            }else{
                playsOk++
                if(playsOk === (nCards/2)){
                    alert(`Você ganhou em ${nPlays} jogadas!`)
                }
             }
            cardsToComparate = []
        }, 1000)
    }
}

//Função de virar a carta
function turnCard(element){
    nPlays++

    element.classList.add("selected")
    const card = document.querySelector(".selected .back-face")
    card.classList.remove("back-face")
    card.classList.add("back-face-turned")

    comparing(element)
}

listCards()