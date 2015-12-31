/* DPCobb
12-24-2015
7, 11, Doubles Dice Game */
var rollOut = " ", diceOne = " ", diceTwo = " ";
window.onload =  function init(){
    document.getElementById('rollbtn').addEventListener('click', rollDice);
};
var getRoll = {
    roll: function(){
        var diceRollOne = Math.floor((Math.random() * 6) + 1);
        diceRollOne = Math.round(diceRollOne);
        return diceRollOne;
    },
    result: function(rollOut, dice1, dice2){
        document.getElementById('rollone').innerHTML = (dice1);
        document.getElementById('rolltwo').innerHTML = (dice2);
        document.getElementById('result').innerHTML = (rollOut);
    }
}
function rollDice(){
    document.getElementById('result').style.fontSize = "3em";
    diceOne = getRoll.roll();
    diceTwo = getRoll.roll();
    var totalRoll = parseInt(diceOne) + parseInt(diceTwo);
    if (diceOne == diceTwo || totalRoll == 7 || totalRoll == 11){
        var rollResult = "Stop Drinking!";
    }
    else{
        rollResult = "Take a drink!";
    }
    getRoll.result(rollResult, diceOne, diceTwo);
}
