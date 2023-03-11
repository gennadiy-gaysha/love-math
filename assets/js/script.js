document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            let attrName = this.getAttribute("data-type");
            if(attrName === 'submit'){
                alert(`You clicked ${attrName.toUpperCase()} button`)
            } else {
                alert(`You chose ${attrName.toUpperCase()} game`);
            }
        })
    }
})

function runGame() {

}

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