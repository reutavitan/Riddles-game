
class Riddle {
    constructor(riddle) {
        this.id = riddle.id
        this.name = riddle.name
        this.taskDescription = riddle.taskDescription
        this.correctAnswer = riddle.correctAnswer
        this.difficulty = riddle.difficulty 
    }
    ask(prompt) {

        console.log(`riddle: ${this.name} \n Description: ${this.taskDescription}`)
        let answer;
        do {
            answer = prompt("Your answer:");
        } while (answer !== this.correctAnswer);

        console.log(`${answer} correct answer`);
    }
}
export default Riddle;

export class MultipleChoiceRiddle extends Riddle {
    constructor(details) {
        super(details);
        this.choices = details.choices;
    }

    ask(prompt) {
        console.log(`riddle: ${this.name} \n Description: ${this.taskDescription}`);

        this.choices.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });

        let answer;
        do {
            answer = prompt("Enter the number of your answer: ");
        } while (
            this.choices[Number(answer) - 1] !== this.correctAnswer
        );

        console.log(`${answer} correct answer`);
    }
}