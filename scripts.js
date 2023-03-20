let firstCard = 0
let secondCard = 0
let dealerFirstCard = 0
let dealerSecondCard = 0
let dealerHand = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let hand = 0


function startGame(){
    firstCard = Math.floor(Math.random() * 11) + 1
    secondCard = Math.floor(Math.random() * 11) + 1
    hand = firstCard + secondCard

    document.getElementById("start-game-el").style.display = "none"
    document.getElementById("new-game-el").style.display = "block"

    if(firstCard == 11 && SecondCard == 11){
        firstCard = 11
        SecondCard = 1
    }

    console.log(firstCard)
    console.log(secondCard)
    document.getElementById("cards-el").textContent = "Cards: " + firstCard + " " + secondCard

    console.log(hand)
    document.getElementById("hand-el").textContent = "Hand: " + hand

    if(hand < 21){
        message = "Hit or Stand?"
    } else {
        message = "you win"    
        hasBlackJack = true
    }

    if(hasBlackJack == true){
        document.getElementById("hit-el").style.display = "none"
        document.getElementById("stand-el").style.display = "none"
    }

    document.getElementById("message-el").textContent = message
}

function newCard(){
    let card = Math.floor(Math.random() * 11) + 1
    console.log("drawing a new card from the deck " + card)

    if (card + hand > 21 && card == 11){
        card = 1
    }

    hand += card
    document.getElementById("hand-el").textContent = "Hand: " + hand
    document.getElementById("cards-el").textContent += " " + card

    cardEval()

}

function cardEval(){
    if(hand > 21){
        message = "you lose"
        isAlive = false
        document.getElementById("hit-el").style.display = "none"
        document.getElementById("stand-el").style.display = "none"
    } else if(hand < 21){
        message = "hit or stand?"
    } else {
        message = "you win"    
        hasBlackJack = true
    }

    if(hasBlackJack == true){
        document.getElementById("hit-el").style.display = "none"
        document.getElementById("stand-el").style.display = "none"
    }

    document.getElementById("message-el").textContent = message
}

function newGame(){
    document.getElementById("hit-el").style.display = "block"
    document.getElementById("stand-el").style.display = "block"
    document.getElementById("message-el").textContent = message
    document.getElementById("cards-el").textContent = "Cards: " + firstCard + " " + secondCard
    hasBlackJack = false

    firstCard = Math.floor(Math.random() * 11) + 1
    SecondCard = Math.floor(Math.random() * 11) + 1
    hand = firstCard + secondCard
    dealerFirstCard = 0
    dealerSecondCard = 0
    dealerHand = 0

    document.getElementById("dealer-cards-el").textContent = ""
    document.getElementById("dealer-hand-el").textContent = ""
    document.getElementById("hand-el").textContent = "Hand: " + hand
    startGame()

}

function dealer(){
    dealerFirstCard = Math.floor(Math.random() * 11) + 1
    dealerSecondCard = Math.floor(Math.random() * 11) + 1
    dealerHand = dealerFirstCard + dealerSecondCard

    document.getElementById("dealer-cards-el").textContent = "Cards: " + dealerFirstCard + " " + dealerSecondCard
    document.getElementById("dealer-hand-el").textContent = "Hand: " + dealerHand

    while(dealerHand < 15){
        let dealerCard = Math.floor(Math.random() * 11) + 1

        if (dealerCard + dealerHand > 21 && dealerCard == 11){
            dealerCard = 1
        }
    
        dealerHand += dealerCard
        document.getElementById("dealer-hand-el").textContent = "Hand: " + dealerHand
        document.getElementById("dealer-cards-el").textContent += " " + dealerCard
    }

    if(dealerHand > 21){
        message = "you win"    
        document.getElementById("hit-el").style.display = "none"
        document.getElementById("stand-el").style.display = "none"
        document.getElementById("message-el").textContent = message
    } else {
        if(dealerHand > hand){
            message = "You lose"
            isAlive = false
            document.getElementById("hit-el").style.display = "none"
            document.getElementById("stand-el").style.display = "none"
        } else if(hand == dealerHand){
            message = "It's a tie"
            document.getElementById("hit-el").style.display = "none"
            document.getElementById("stand-el").style.display = "none"
        } else {
            message = "You win"    
            document.getElementById("hit-el").style.display = "none"
            document.getElementById("stand-el").style.display = "none"
        }
        document.getElementById("message-el").textContent = message
    }


    
}

function stand(){
    document.getElementById("hit-el").style.display = "none"
    document.getElementById("stand-el").style.display = "none"
    dealer()
}