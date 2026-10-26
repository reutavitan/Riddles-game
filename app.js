import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import Riddle from './classes/Riddle.js';
import Player from './classes/Player.js';
import riddles from './riddles/index.js';

console.log("Welcome to the Riddle Game!");
let answer = prompt("Enter your name: ");
const player = new Player(answer);


let difficulty = prompt("Choose difficulty:\n1. Easy\n2. Medium\n3. Hard");
const choices = ["easy", "medium", "hard"];
difficulty = choices[Number(difficulty) - 1];
const filteredRiddles = riddles.filter(riddle => riddle.difficulty === difficulty)


filteredRiddles.forEach(riddle => {
    let startTime = Date.now()
    const rid = new Riddle(riddle);
    rid.ask(prompt);
    let endTime = Date.now()
    player.recordTime(startTime,endTime);

});
player.showStats();
// Entry point of the game. Run it with: node app.js
//
// This file should:
// 1. Import PromptSync (from 'prompt-sync') and create the `prompt` function.
// 2. Import the Riddle class, the Player class, and the array of all riddles (from riddles/index.js).
// 3. Show a welcome message and ask the player for their name, then create a Player object.
// 4. Loop over all riddles. For each riddle:
//    - save the start time (Date.now())
//    - create a Riddle object and call its ask() method
//    - save the end time (Date.now())
//    - save the time using player.recordTime()
// 5. After the loop, call player.showStats() to show total time and average time per riddle.
