document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let attrName = this.getAttribute("data-type");
            if (attrName === 'submit') {
                alert(
                    `You clicked ${attrName.toUpperCase()} button`
                )
            } else {
                let gameType = attrName;
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
    num1 = Math.floor(Math.random() * 25 + 1);
    num2 = Math.floor(Math.random() * 25 + 1);

    if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === 'division') {
        displayDivisionQuestion(num1, num2)
    } else {
        alert(`${gameType.toUpperCase()} is undefined`);
        throw `${gameType.toUpperCase()} is undefined. Aborted!`
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "*";
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}
