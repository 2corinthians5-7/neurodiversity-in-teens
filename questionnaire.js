const questionText = document.getElementById("question");
const mcqDisplay = document.getElementById("mcq-display");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const questionNumberDisplay = document.getElementById("question-number-display");
const questionNumber = document.getElementById("question-number");
const shortAns = 80;
const longAns = 300;

function approvedAnswer(){

    return true;
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
    "Are you neurodivergent?",
    false,
    true,
    false,
    ["Yes","No"]);

const Question2 = new Choice(
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

const Question3 = new Choice(
    "Good job completing this! :D"
);
const questionStorage = [Question1, Question2, Question3];
const amountOfQuestions = questionStorage.length;
console.log(amountOfQuestions);

questionText.textContent = Question1.q;

nextButton.addEventListener('click',(e)=>{
    //check which question type is the question
    //find out whether the user has checked the correct amount of items
    if(approvedAnswer()){
        mcq.innerHTML = '';
        mcqDisplay.appendChild(mcq);
        if(Number(questionNumber.textContent)+1 <= amountOfQuestions){
            questionNumber.textContent = Number(questionNumber.textContent) + 1;
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