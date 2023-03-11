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
    runGame('addition');
})



/**
 * The main game "loop" called when the script is first loaded and after the user's answer has been proceed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`The type of game ${gameType} is undefined`);
        throw `The type of game ${gameType} is undefined. Aborting...`
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
        alert(`Yessss! Your answer is correct!`);
        incrementScore();
    } else {
        alert(
            `Hmmmm... Your answer ${userAnswer} is incorrect. The correct answer is ${calculatedAnswer[0]}`
        );
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
        return [operand1 + operand2, 'addition']
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract']
    } else if (operator === '*') {
        return [operand1 * operand2, 'multiply']
    } else {
        alert(`The ${operator} is invalid!`);
        throw `The ${operator} is invalid! Aborting...`
    }
}


function incrementScore() {
    let score = parseInt(document.getElementById('score').textContent);
    score++;
    document.getElementById('score').textContent = score;
}



function incrementWrongAnswer() {
    let incorrect = parseInt(document.getElementById('incorrect').textContent);
    incorrect++;
    document.getElementById('incorrect').textContent = incorrect;
}



function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;

    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "*";
}

// function displayDivisionQuestion()
