const buttons = document.getElementsByTagName('button');
let randomNum;
let count = 0;
const reset = document.querySelector('#resetButton');
const messageBox = document.querySelector('#message');

function genrateRandomvalue(){
    // randomNum = Math.floor((Math.random() * 10) +1);    
    randomNum = 9;
}

function resetGame(){
    genrateRandomvalue();
    enableButtons();
    resetCounter();
    deletText();
}

function enableButtons(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].removeAttribute('disabled');
        buttons[i].removeAttribute('style');
    }
}

function resetCounter(){
    count = 0;
}

function deletText(){
    messageBox.innerHTML = '';
}

function seeIfItIsRightAnswer(e){
    incrementClickCount();
    if(checkIfGameIsOver()){
        return;
    }
    if(checkIfItIsRightAnswer(e)){
        return;
    }
    if(isItLower(e)){
        return;
    }
    if(isItHigher(e)){
        return;
    }
}

function incrementClickCount(){
    count++;
}

function checkIfGameIsOver(){
    if(count > 10){ 
        let content = 'Game over, you are all out of tries. The number was ' + randomNum;
        let heading = document.createElement('h1');
        let textNode = document.createTextNode(content);
        heading.appendChild(textNode);
        heading.style.textAlign = 'center';
        messageBox.appendChild(heading);

        for(let i = 0; i < buttons.length; i++){
            buttons[i].setAttribute('disabled', '');
        }

        return true;

    }

    return false;
}

function checkIfItIsRightAnswer(e){
    if(randomNum == e.target.innerHTML){
        let content = 'You got it right!!';
        let heading = document.createElement('h1');
        let textNode = document.createTextNode(content);
        heading.appendChild(textNode);
        heading.style.textAlign = 'center';
        messageBox.appendChild(heading);
        e.target.style.backgroundColor = 'Green';
        heading.style.color = 'green';
        
        for(let i=0; i<buttons.length; i++){
            buttons[i].setAttribute('disabled', '');
        }

        return true;
    }

    return false;
}

function isItLower(e){
    if(e.target.innerHTML < randomNum){
        let content = 'The number ' + e.target.innerHTML + ' is too low';
        let heading = document.createElement('h1');
        let textNode = document.createTextNode(content);
        heading.appendChild(textNode);
        heading.style.textAlign = 'center';
        messageBox.appendChild(heading);
        e.target.style.backgroundColor = 'red';
        heading.style.color = 'red';
        return true;
    }

    return false;
}

function isItHigher(e){
    if(e.target.innerHTML > randomNum){
        let content =  'The number ' + e.target.innerHTML + ' is too high';
        let heading = document.createElement('h1');
        let textNode = document.createTextNode(content);
        heading.appendChild(textNode);
        heading.style.textAlign = 'center';
        messageBox.appendChild(heading);
        e.target.style.backgroundColor = 'red';
        heading.style.color = 'red';
        return true;
    }

    return false;
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', seeIfItIsRightAnswer);
}

window.addEventListener('load', genrateRandomvalue);
reset.addEventListener('click', resetGame);