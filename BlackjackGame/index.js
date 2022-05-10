let random = (max,min) => Math.floor(Math.random() * (max-min) + min);
let firstCard = random(2,21);
let secondCard = random(2,21);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let player = {
    name: "Per",
    chips: 56
    // let playerEl = document.getElementById("player-el");
    // playerEl.textContent = playerName + ":$" + playerChips;
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " :$ " + player.chips;


function startgame(){
    rendergame();
}


function rendergame(){
    
    cardsEl.textContent = "Cards: ";
    for(let i = 0;i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum <= 20){
    messageEl.textContent = "Want to draw another card 🖐 ?";
    sumEl.textContent = "Sum: " + sum;
    
    // isAlive = true;
    }

    else if(sum === 21){
        messageEl.textContent ="Wohoo! You've got a BlackJack 👑 !";
        hasBlackJack = true;
       
        sumEl.textContent = "Sum: " + sum;
    }
    else{
        messageEl.textContent ="You're out of the game 😲 !";
       
        sumEl.textContent = "Sum: " + sum;
        isAlive = false;
    }
    // sum = 0;
    // console.log(message);
}

function newgame() {
    // console.log("Drawing another card!");

    if(isAlive === true && hasBlackJack  === false){
       let cardSum = random(2,21);
        sum += cardSum;
        cards.push(cardSum);
        console.log(cards);
        rendergame();
    }
    
}
