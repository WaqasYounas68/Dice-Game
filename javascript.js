var scores, roundScore , activePlayer, dice;

newGame();


// ROLL DICE
document.querySelector('.btn-roll').addEventListener('click',function(){

    // Get Random Number
    dice = Math.floor((Math.random() * 6) + 1);

    // Display Dice Image
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    // Upload Number If numbe is not 1
    if(dice !== 1){
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }

})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0').classList.toggle('player-active');
        document.querySelector('.player-1').classList.toggle('player-active');
};

// HOLD DICE
document.querySelector('.btn-hold').addEventListener('click',function(){

    // Add scores
    scores[activePlayer] += roundScore;

    // Update Player UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Score Check If 100 Player Win
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER'
        document.querySelector('.player-' + activePlayer).classList.remove('player-active');
        document.querySelector('.player-' + activePlayer).classList.add('player-winner');
        roundScore = 0;
        document.querySelector('.btn-roll').disabled = true;
        document.querySelector('.btn-hold').disabled = true;
    }
    else{
        nextPlayer();
    }

})

// NEW GAME
document.querySelector('.btn-new').addEventListener('click',function(){
    
    newGame();
    
})

function newGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-' + activePlayer).classList.remove('player-winner');
    document.querySelector('.player-' + activePlayer).classList.add('player-active');
}