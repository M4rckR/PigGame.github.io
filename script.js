'use strict';

const player_1 =document.querySelector('.player--0')
const player_2 =document.querySelector('.player--1')
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
        document.getElementById(`current--${activePlayer}`).textContent=suma;
    }
    else {
        activePlayer = activePlayer===0? 1:0;
        // Con esto asignamos o eliminamos si se encuentra dicha clase
        player_1.classList.toggle('player--active')
        player_2.classList.toggle('player--active')
    }

})

