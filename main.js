//How to Play Rock, Paper, Scissors.
//https://www.wikihow.com/Play-Rock,-Paper,-Scissors


// PROBLEM SOLVING
// 1. Understand the Problem
//To gain clarity and understanding of the problem, write it down,
//reword it in plain English until it makes sense to you.

// Write a program that takes specific
// user's input (Rock, Paper, Scissors)
// and then compares the input value with a 
// randomly value generated by the computer,
// evaluates which value is 'stronger' and returns result
// as win (1 point) , the program runs the same function 
// for namerous rounds , the one who reached 5 wins first , wins.
//  
// 2. Plan
//Q-Does your program have a user interface? 

//A-Display a prompt box 

//Q-What functionality will the interface have?

//A-prompt box asks the user to choose a weapon (rock,paper,scissors),
//and output a message which contains the user's chosen weapon,
//the computer's weapon and based on that who won the round.

//Q-What inputs will your program have? 

//A-User's chosen weapon , for each round.

//Q-Will the user enter data or will you get input from somewhere else?

//A-yes the user will the data in the prompt box.
//and the computer will generate a random value.

//Q-What’s the desired output?

//A-two desired outputs 
// 1st - who won the current round (user vs computer)
// 2nd - who won the game (reached 5 wins first)


//Q-Given your inputs, what are the steps necessary to return the desired output?

//A- compare between user's input value and the computer's randomly generated value,
//detrmine which value is greater and decide who won the round.
// count user/computer wins , first to reach 5 wins , end the game and return a message.



//Pseudo Code

//when the user enters a string input of chosen weapon (out of 3) via prompt
//assign an int to a string value.
//Initialize a user/computer win-counter-variable and set its value to zero
//While user/computer win-counter-variable is smaller than 5
//compare the user's input value with a randomly generated int by the computer.
//add one to either user/computer win-counter-variable.
//else end the game and return a message with the announcment of the winner.


// 3. Divide and Conquer

 

