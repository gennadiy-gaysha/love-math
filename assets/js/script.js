document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let attrName = this.getAttribute("data-type");
            if (attrName === 'submit') {
                alert(`You clicked ${attrName.toUpperCase()} button`)
            } else {
                alert(`You chose ${attrName.toUpperCase()} game`);
            }
        })
    }
})

/**
 * The main game "loop" called when the script is first loaded and after the 
 * user's answer has been proceed
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);
}
runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}