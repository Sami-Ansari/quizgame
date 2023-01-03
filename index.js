import { exit } from 'process';
async function runQuiz() {
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "New York"],
            correctChoice: "Paris"
        },
        {
            question: "What is the largest planet in our solar system?",
            choices: ["Earth", "Mars", "Jupiter"],
            correctChoice: "Jupiter"
        },
        {
            question: "What is the currency of Japan?",
            choices: ["Yen", "Dollar", "Euro"],
            correctChoice: "Yen"
        }
    ];
    let numCorrect = 0;
    for (const question of questions) {
        await askQuestion(question);
        numCorrect++;
    }
    console.log(`You got ${numCorrect} out of ${questions.length} questions correct!`);
    exit();
}
async function askQuestion(question) {
    console.log(question.question);
    for (let i = 0; i < question.choices.length; i++) {
        console.log(`${i + 1}: ${question.choices[i]}`);
    }
    const userChoice = await askUserForInput(`Enter the number of your choice:`);
    if (question.choices[userChoice - 1] === question.correctChoice) {
        console.log("Correct!");
    }
    else {
        console.log("Incorrect!");
    }
}
async function askUserForInput(prompt) {
    return new Promise((resolve, reject) => {
        process.stdin.resume();
        process.stdout.write(prompt);
        process.stdin.on("data", (data) => {
            resolve(data.toString().trim());
        });
    });
}
runQuiz();
