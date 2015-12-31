/*
DPCobb
Circle Of Death v3
*/

var deck=[], ruleData=[], cardsLeft = 52, ii = 0;
var suitCode = ["Hearts", "Diamonds", "Spades", "Clubs"];
var cardVal = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
var cardSelect = ["Pick someone to drink with",  "You have to drink", "Floor, last person to touch the table drinks", "Guys drink",  "Girls drink", "Heaven, last person to raise arms drinks", "Mate, pick someone to drink every time you do", "Make a rhyme", "Never have I ever", "Make a rule", "Question master", "Category", "Waterfall"];

function reset(){
    deck=[], ruleData=[], cardsLeft = 52, ii = 0, i = 0;
}
function createCards(){
    var cardNo = Math.floor((Math.random() * 14));
    cardNo = Math.round(cardNo);
    var suit = Math.floor((Math.random() * 5));
    suit = Math.round(suit);
    if (cardNo > 0){
        cardNo = cardNo - 1;
    }
    if (suit > 0){
        suit = suit - 1;
    }
    console.log(cardNo, suit);
    var cardDrawn = cardVal[cardNo] + " of " + suitCode[suit];
    var rule = cardSelect[cardNo];
    if (deck.indexOf(cardDrawn) === -1){
        deck.push(cardDrawn);
        ruleData.push(rule);
        console.log(cardDrawn);
    }
    else{
        createCards();
    }
}

function setDeck(){
    var createBtn =  document.getElementById('create');
    var drawBtn = document.getElementById('draw');
    var count = document.getElementById('counter');
    count.innerHTML = "Cards Left: 52";
    createBtn.style.visibility = 'hidden';
    drawBtn.style.visibility = 'visible';

    for(i = 0; i<52; i++){
        createCards();
    }
}

function drawCard(){
    if (cardsLeft === 0){
        var createBtn =  document.getElementById('create');
        var drawBtn = document.getElementById('draw');
        var gameEnd = document.getElementById('suit');
        var ruleEnd = document.getElementById('rule');
        gameEnd.innerHTML = "Game Over!";
        ruleEnd.innerHTML = " ";
        reset();
        createBtn.style.visibility = 'visible';
        drawBtn.style.visibility = 'hidden';
    }
    else{
        var showCard = deck[ii];
        var displayRule = ruleData[ii];
        ii++;
        cardsLeft -=1;
        var showSuit = document.getElementById('suit');
        var showRule = document.getElementById('rule');
        var counter = document.getElementById('counter');
        showSuit.innerHTML = showCard;
        showRule.innerHTML = displayRule;
        counter.innerHTML = "Cards Left: " + cardsLeft;
        console.log("remaining cards: " + cardsLeft);
    }
}
function reload(){
    window.location.reload(true);
}
