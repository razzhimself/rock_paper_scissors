//How to Play Rock, Paper, Scissors.
//https://www.wikihow.com/Play-Rock,-Paper,-Scissors

//PROBOLEM SOLVING

//1. UNDERSTAND
//explain the problem in plain English:

//Write a program that allows the user to enter a text input,
//the text should be specific out of three options (rock,paper,scissors)
//which will represent the user's chosen weapon.
//afterwards the program will compare user's chosen weapon against the computer's randomly chosen weapon 
//and add one point to the winner of the round ,repeat as much needed rounds
//till the first to reach 5 points, eventually declare the winner.


//2.PLAN
//Q-Does your program have a user interface? 
//A-command line program, so we don’t need an interface,  
//The only user interaction will be allowing users to enter 
//a text via a prompt box.

//Q-What functionality will the interface have?
//A- represent via the prompt box the three text options that are viable 
//to the user to choose from (3 weapons: rock,paper,scissors)
//and of course take in the written input to transfer further down to other functions.

//Q-What inputs will your program have? 
//A-User's chosen weapon, in the beginning of every new round.

//Q-Will the user enter data or will you get input from somewhere else?
//A-The user will the enter the data via the prompt box.
//and the computer will generate a random value 
//which then will be translated to a weapon text.

//Q-What’s the desired output?
//A-two desired outputs 
// 1st - who won the current round (user vs computer)
// 2nd - who won the game (first to reac 5 points)

//Q-Given your inputs, what are the steps necessary to return the desired output?

//A- Algorithm in Pseudo Code:

//when the user enters a specific text which equals to one out of the three weapon options
//start the first round of Rock Paper Scissors game. 
//randomly generate computer's weapon ,compare it to the user's chosen weapon and eventually 
//add a point and declare the winner of the round. 
//if either user's / computer's points counter is lower than 5 , the program will continue to play round 
//and pop up a prompt every time a new round begins to let the user choose a new weapon.
//else terminate the program and announce the official winner.


// 3. DIVIDE & CONQUER 

//--> 'when the user enters a specific text which equals to one out of the three weapon options'

//user enters his chosen weapon via prompt 

function userPlay () {
    return prompt("Choose your weapon Rock,Paper or Scissors", "").toLowerCase();
}; 

let playerSelection = userPlay();




//--> 'randomly generate the computer's weapon'


//return computer's weapon result

 function computerPlay () {

    //return a round random number between min to max (included)

    function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
}

//return a round random number between 1 to 3 (included)

let randomValue = getRndInteger(1,3);


    if (randomValue === 1) {
        return 'rock';
    }
    else if (randomValue === 2) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
    
}

let computerSelection = computerPlay();


//--> compare computer's weapon to the user's chosen weapon 

//one round in a game , compares user's weapon selection vs computer's weapon
// then returns the appropiate result for the different cases.
function playRound(playerSelection,computerSelection) {

   

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie!'; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a tie!';
    } else if (playerSelection === null) {
        return; 
    } else {
        return 'Choose a valid weapon - either Rock,Paper or Scissors';
    }
  }
  
  //console.log('top-pr '+ playRound(playerSelection,computerSelection));

//-- >add a point to the the winner of the round.  
let userScore = 0; 
let computerScore = 0;
    
  function evaluation () {

    
    let roundResult = playRound(playerSelection,computerSelection);

    
    
    if (userScore < 5 && computerScore < 5 && roundResult === 'You Win! Rock beats Scissors' ||roundResult === 'You Win! Paper beats Rock' || roundResult === 'You Win! Scissors beats Paper' )  {
       //add one win to user's score.
       userScore = userScore + 1;
       console.log('You won this round, NICE!','user:',userScore,'computer:',computerScore);
       computerSelection = computerPlay();
    playerSelection = userPlay();
    playRound();
       return userScore; 
         
} else if (userScore < 5 && computerScore < 5 && roundResult === 'You Lose! Paper beats Rock' || roundResult === 'You Lose! Scissors beats Paper' || roundResult === 'You Lose! Rock beats Scissors') { 
    //add one win to computer's score.
    computerScore = computerScore + 1;
    console.log('Computer won this round, LOSER!','user:',userScore,'computer:',computerScore);
    computerSelection = computerPlay();
    playerSelection = userPlay();
    playRound();
    return computerScore; 
    
} else if (userScore < 5 && computerScore < 5 && roundResult === 'It\'s a tie!' ) {
    console.log('tie..');
    computerSelection = computerPlay();
    playerSelection = userPlay();
    playRound();
    return; 
} else if(userScore >= 5 ) {
    console.log('You won the game , great success!');
return 
} else if (computerScore >= 5) {
    console.log('You lost the game , real loser..'); 
   return; 
}
}


//play a 5 round game that keeps score and reports a winner or loser at the end.


function game () {
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();
    evaluation();

}

console.log(game());




