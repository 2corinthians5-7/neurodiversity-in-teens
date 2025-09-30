const easterEggOne = document.getElementById("easter-egg-one");
const easterEggTwo = document.getElementById("easter-egg-two");
const easterEggThree = document.getElementById("easter-egg-three");
const easterEggFour = document.getElementById("easter-egg-four");
const easterEggFive = document.getElementById("easter-egg-five");
const easterEggSix = document.getElementById("easter-egg-six");

let tsarClick = false;
let dinoClick = false;
let starClick = false;
let referenceClick = false;
let surveyClick = false;
let secretClick = false;

function tsarClicked(){
    if(!tsarClick){
        tsarClick=true;
        easterEggOne.style.textDecoration = 'line-through';
    } 
}

function dinoClicked(){
    if(!dinoClick){
        dinoClick=true;
        easterEggTwo.style.textDecoration = 'line-through';
    } 
}

function starClicked(){
    if(!starClick){
        starClick=true;
        easterEggThree.style.textDecoration = 'line-through';
    } 
}

function referenceClicked(){
    if(!referenceClick){
        referenceClick=true;
        easterEggFour.style.textDecoration = 'line-through';
    } 
}

function surveyClicked(){
    if(!surveyClick){
        surveyClick=true;
        easterEggFive.style.textDecoration = 'line-through';
    }
}

function secretClicked(){
    if(!secretClick){
        secretClick=true;
        easterEggSix.style.textDecoration = 'line-through';
    } 
}
