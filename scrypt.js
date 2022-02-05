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
        list.innerHTML += `<div class="card">
                                <div class="front-face face">
                                    <img src="images/front.png">
                                <\div>
                                <div class="back-face face">
                                    <img src="images/${cardList[i].figure}">
                                <\div>
                            </div>`
    }
}

function comparator() { 
	return Math.random() - 0.5; 
}

listCards()