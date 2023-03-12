// We geather all buttons and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    runGame('addition')
})

/**
 * The main game "loop" called when the script is first loaded and after the user's answer has been proceed
 * It also generates two random numbers to display
 */
function runGame(gameType) {
    document.getElementById('answer-box').value = ''
    document.getElementById('answer-box').focus();


    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Game type ${gameType} is invalid`);
        throw `Game type ${gameType} is invalid. Aborting...`
    }
}

/**
 * Checks the answer against the first element in the returned calculateCorrectAnswer() array.
 * is called by Submit answer button
 * userAnswer
 * calculatedAnswer
 * isCorrect
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert(`Yess! You are perfectly right)))`);
        incrementScore();
    } else {
        alert(`Hmmm... Your answer is ${userAnswer}, but correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

/**
 * Get operands and operator directly from the DOM and returns an array where the first element is the correct answer
 * and the second element is the gameType
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').textContent);
    let operand2 = parseInt(document.getElementById('operand2').textContent);
    let operator = document.getElementById('operator').textContent;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    } else if (operator === '*') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '/') {
        return [operand1 / operand2, 'division'];
    } else {
        alert(`Invalid operation`);
        throw `Invalid operation. Aborting...`
    }

}

function incrementScore() {
    let score = document.getElementById('score').textContent;
    document.getElementById('score').textContent = ++score;
}

function incrementWrongAnswer() {
    let incorrect = document.getElementById('incorrect').textContent;
    document.getElementById('incorrect').textContent = ++incorrect;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '*';
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}
