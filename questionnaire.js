/*
NOTES
BUGS LEFT
Full name input at the start disappears.

FEATURES LEFT
Add all the questions
Change the design
Connect the data into Google Sheets.
*/

const questionText = document.getElementById("question");
const mcqDisplay = document.getElementById("mcq-display");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const questionNumberDisplay = document.getElementById("question-number-display");
const questionNumber = document.getElementById("question-number");
const shortAns = 80;
const longAns = 300;
const datalogForNow = [];

function approvedAnswer(){
    questionNumberAsInteger = Number(questionNumber.textContent);
    const mcq = document.getElementById("mcq");
    console.log(questionNumberAsInteger);
    if (questionNumberAsInteger >= questionStorage.length){
        return true;
    }
    else if(mcq.firstElementChild.firstElementChild.type=='text' && mcq.firstElementChild.firstElementChild.value != ""){
        return true;
    } else if (mcq.firstElementChild.firstElementChild.type=='radio'){
        for(i = 0; i < mcq.childElementCount; i++){
            if(mcq.children[i].firstElementChild.checked == true){
                return true;
            }
        }
        console.log(mcq.children[i].firstElementChild.checked);
    } else if (mcq.firstElementChild.firstElementChild.type=='checkbox') {
        for(i = 0; i < mcq.childElementCount; i++){
            if(mcq.children[i].firstElementChild.checked == true){
                return true;
            }
        }
    }
}

function createQuestion(currentQuestion,mcq,questionType){
    let item;
    if(questionType=="mcq"){
        answers = currentQuestion.choices;
        answers.forEach((element,index) => {
        item = document.createElement("li");
        const checkboxItem = document.createElement("input");
        const checkboxLabel = document.createElement("label");
        checkboxItem.type = "checkbox";
        checkboxItem.id = index;
        checkboxItem.class = "checkboxClass";
        checkboxLabel.for = index;
        checkboxLabel.id = `${index}-label`;
        checkboxLabel.class = "q-label";
        checkboxLabel.textContent = element;
        item.appendChild(checkboxItem);
        item.appendChild(checkboxLabel);
        mcq.appendChild(item);
        });
    } else if (questionType=="scq") {
        answers = currentQuestion.choices;
        answers.forEach((element,index) => {
        item = document.createElement("li");
        const radioItem = document.createElement("input");
        const radioLabel = document.createElement("label");
        radioItem.type = "radio";
        radioItem.id = index;
        radioItem.class = "radioClass";
        radioItem.name = `${currentQuestion}`;
        radioLabel.for = index;
        radioLabel.id = `${index}-label`;
        radioLabel.class = "q-label";
        radioLabel.textContent = element;
        item.appendChild(radioItem);
        item.appendChild(radioLabel);
        mcq.appendChild(item);
    })}
    else {
        item = document.createElement("li");
        let textboxItem = document.createElement("input");
        let submitButton = document.createElement("input");
        textboxItem.type = "text";
        textboxItem.class = "textboxClass";
        submitButton.type = "submit";
        submitButton.class = "submitButtonClass";
    };
};

class Choice{
    constructor(q,mcq,scq,answerLength,choices){
        this.q = q;
        this.mcq = mcq;
        this.scq = scq;
        this.answerLength = answerLength;
        this.choices = choices;
    }
}

//class Choice will be like this:
//consider: 
// type of answer 
//  -short answer (50 words max)
//  -long answer (300 words max)
// -multiple choice question
    // Requires the answer for the MCQ
//properties
// bool MCQ, (opt) int answerLength, string choice
//choice will be the answer

const Question1 = new Choice(
    "Enter your full name",
    false,
    false,
    shortAns,
    false
)

const Question2 = new Choice(
    "Click the category that resonates with you.",
    false,
    true,
    false,
    [
        "Year 7",
        "Year 8-9",
        "IGCSE student",
        "IB student",
        "Teacher/staff"
    ]
)

const Question3 = new Choice(
    "Are you neurodivergent?",
    false,
    true,
    false,
    ["Yes","No"]);

const Question4 = new Choice(
    "Have you met anyone neurodivergent? If yes, where?",
    true,
    false,
    false,
    ["In my family",
    "At school",
    "In my extracurricular classes",
    "My friend(s)",
    "In public (strangers)",
    "No I haven't"]
);

const Question5 = new Choice(
    "Good job completing this! :D"
);
const questionStorage = [Question1, Question2, Question3, Question4, Question5];
const amountOfQuestions = questionStorage.length;
console.log(amountOfQuestions);

questionText.textContent = Question1.q;

nextButton.addEventListener('click',(e)=>{
    //check which question type is the question
    //find out whether the user has checked the correct amount of items
    if(approvedAnswer()){
        mcq.innerHTML = '';
        mcqDisplay.appendChild(mcq);
        questionNumber.textContent = Number(questionNumber.textContent) + 1;
        if(Number(questionNumber.textContent) <= amountOfQuestions){
            let currentQuestion = questionStorage[Number(questionNumber.textContent)-1];
            questionText.textContent = currentQuestion.q;
            if(currentQuestion.mcq){
                createQuestion(currentQuestion,mcq,"mcq");
            } else if (currentQuestion.scq) {
                createQuestion(currentQuestion,mcq,"scq");
            } else {
                createQuestion(currentQuestion,mcq,"text");
            }
        } else {
            const magicWord = document.createElement("p");
            magicWord.textContent = "The code is 'abcd' ";
            mcq.appendChild(magicWord);
        }
    }
});

previousButton.addEventListener('click',(e)=>{
    if(Number(questionNumber.textContent)>1){
        mcq.innerHTML = '';
        mcqDisplay.appendChild(mcq);
        questionNumber.textContent = Number(questionNumber.textContent) - 1;
        const currentQuestion = questionStorage[Number(questionNumber.textContent)-1];
        questionText.textContent = currentQuestion.q;
        if(currentQuestion.mcq){
            createQuestion(currentQuestion,mcq,"mcq");
        } else if (currentQuestion.scq) {
            createQuestion(currentQuestion,mcq,"scq");
        } else {
            createQuestion(currentQuestion,mcq,"text");
        }
    }
});