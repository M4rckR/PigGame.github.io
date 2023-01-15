'use strict';

const btnRoll = document.querySelector('.btn--roll');
const diceIgm = document.querySelector('.dice');
const player1 = document.getElementById('score--0')
const player2 = document.getElementById('score--1')
const currentScore1 = document.getElementById('current--0');
const currentScore2 = document.getElementById('current--1');

player1.textContent = 0;
player2.textContent = 0;
diceIgm.classList.add('hidden')
let suma = 0;
let activePlayer = 0;
const scores = [0, 0]



btnRoll.addEventListener('click', () => {
    diceIgm.classList.remove('hidden')
    let dice = Math.trunc((Math.random()*6)+1)
    diceIgm.src = `img/dice-${dice}.png`
    if(dice!==1) {
        suma+=dice
        currentScore1.textContent = suma;
    }
    else {

    }

})

