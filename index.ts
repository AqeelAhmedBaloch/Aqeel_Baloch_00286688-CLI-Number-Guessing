#! /usr/bin/env node

import inquirer from "inquirer";
// 01 Computer will genetare a random number - done.

// 02 use input for guessing number

// 03 compare user input with computer generated number and show result done
// const randomNumber = 13;
// const randomNumber = Math.random();

console.log('\n\tAqeel Ahmed Baloch-CLI-Guessing Number\n')
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10 : ",
    },
]);

// console.log(answers);
// agar yeh condition true hai
if(answers.userGuessedNumber === randomNumber){
    console.log("Congtratulation you guessed right number")
}else{
    console.log("You guessed wrong number")
}