let nCards = parseInt(prompt("Quantas cartas você deseja? (número par entre 4 e 14 cartas)"))

function listCards(){
    if(nCards<4 || nCards>14 || nCards%2 !== 0){
        while(nCards<4 || nCards>14 || nCards%2 !== 0){
            nCards = parseInt(prompt("Quantas cartas você deseja? ( número par entre 4 e 14 cartas)"))
        }
    }

    const list = document.querySelector(".cards-list")
    
    for(let i = 0; i<nCards; i++){
        list.innerHTML += `<div class="card"><img src="images/front.png"></div>`
    }
}

listCards()