var scores, roundScore, activePlayer, gamePlaying;
init();

/*scores = [0,0];
roundScore = 0;
activePlayer = 0;  
   
//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';   // fOR STYLING THE CURRENT NUMBER

document.querySelector('.dice').style.display = 'none';

//document.querySelector('#score-0').textContent = '0';      // Another way of selecting an attribute from html
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';         */

// ANONYMOUS FUCTION
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        
    //Random Number
   var dice = Math.floor(Math.random() * 6) + 1;

   //Display the result
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.jpg';
 // document.querySelector('.dice').style.display = 'block';

 //update the round score if the rolled number was not a 1

 if (dice !==1) {
     //Add score
     roundScore += dice;
     //same as roundScore = roundScore + dice
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
 } else {
    
   nextPlayer();
 }
    }
});   

// Implementing the hold function
  document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
    //add the current score to the global score
    scores[activePlayer] += roundScore;

    //update the UI 
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 
    //Checking the winner
   if ( scores[activePlayer]  >= 50 ) {
       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
       document.querySelector('.dice').style.display = 'none';
       gamePlaying = false;
} else {
    nextPlayer();
}
    } 
});
 

// do not repeat yourself function

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //we cans also use if statement
   /*  if (activePlayer ==== 0) {
         activatePlayer = 1;
     } else {
         activatePlayer = 0;
     }                       */

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

//Implementing the new game button

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

 document.querySelector('.dice').style.display = 'none';

//document.querySelector('#score-0').textContent = '0';      // Another way of selecting an attribute from html
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.add('active');
}


















//ANOTHER WAY OF WRITING IF THE FUNCTION WILL BE CALLED AT SO MANY PLACES
/*function btn() {    
    //Do something here
}
btn();
document.querySelector('.btn-roll').addEventListener('click', btn);  */



/*
var x = document.querySelector('#score-0').textContent;
var y = document.querySelector('#score-1').textContent;
console.log(x, y);      */