const questions = [
    {
        question: "Vanessa, Evan and _____________ followed a path that ends at a cliff, where Vanessa finds Jake's license plate.",
        answers: [
            { text: "Janae", correct: false},
            { text: "Bronwyn", correct: false},
            { text: "Keely", correct: true},
            { text: "TJ", correct: false},
        ]
    },
    {
        question: "Who is the villain in one of us is lying Season2?",
        answers: [
            { text: "Kris", correct: false},
            { text: "Addy", correct: false},
            { text: "Simon", correct: true},
            { text: "Griffen", correct: false}, 
        ]
    },
    {
        question: "Simon told ___________ to smash ______________ car.",
        answers: [
            { text: "Ann, Nate's", correct: false},
            { text: "Cooper, Addy's", correct: false},
            { text: "Addy, Giselle's", correct: true},
            { text: "Oscar, Bronwyn's", correct: false},
        ]
    },
    {
        question: "Addy was suspended after smashing ________________",
        answers: [
            { text: "Giselle's car", correct: true},
            { text: "Oscar's watch", correct: false},
            { text: "Jake's glasses", correct: false},
            { text: "Cooper's car", correct: false},
        ]
    },
    {
        question: "Jake was __________ and died?",
        answers: [
            { text: "strangled", correct: false},
            { text: "stabbed", correct: false},
            { text: "shot", correct: true},
            { text: "Mummified", correct: false},
        ]
    },
    {
        question: "On the day of Vanessa's interview, Evans finds she was missing from her dressing room. Vanessa then wakes up locked up in a car trunk. Who kidnapped her?",
        answers: [
            { text: "Murder Club", correct: true},
            { text: "Jake's Crew", correct: false},
            { text: "TJ", correct: false},
            { text: "Maeve", correct: false},
        ]
    },
    {
        question: "At Bayview High, five students namely ____________, are given to detention.",
        answers: [
            { text: "Simon, Addy, Janae, Nate, Cooper", correct: false},
            { text: "Bronwyn, Cooper, Nate, Simon, Addy", correct: true},
            { text: "Bronwyn, Nate, Simon, Chris", correct: false},
            { text: "Cooper, Browyn, Nate, Addy, Simon", correct: false},
        ]
    },
    {
        question: "What is Addy's full name?",
        answers: [
            { text: "Addy Cooper", correct: false},
            { text: "Addy Tejada", correct: false},
            { text: "Addy Prentiss", correct: true},
            { text: "Addy Morris", correct: false},
        ]
    },
    {
        question: "Who is Cooper's girlfriend?",
        answers: [
            { text: "Keely Moore", correct: true},
            { text: "Kris Greene", correct: false},
            { text: "Shally Puplin", correct: false},
            { text: "Ann Prentiss", correct: false},
        ]
    },
    {
        question: "A new student at Bayview in season2, guest season1 is ___________",
        answers: [
            { text: "Javier Rojas", correct: false},
            { text: "Ann Prentiss", correct: false},
            { text: "Ellen Macaulay", correct: false},
            { text: "Fiona Jennings", correct: true},
        ]
    },
    {
        question: "Bronwyn threatened to murder Simon after she discovered ________________",
        answers: [
            { text: "he was receiving sexually explicit content from Maeve", correct: true},
            { text: "he was a snitch", correct: false},
            { text: "he killed a close friend while on a drug business", correct: false},
            { text: "he was warned to not go further on a mission", correct: false},
        ]
    },
    {
        question: "Who killed Simon in one of us is lying?",
        answers: [
            { text: "Janae", correct: false},
            { text: "Bronwyn", correct: false},
            { text: "Jake", correct: true},
            { text: "Monae", correct: false},
        ]
    },
    {
        question: "_____________ and _____________ destroyed Simon's laptop while _____________ sends a hard drive to the police department in season1?",
        answers: [
            { text: "Bronwyn, Nate, Maeve", correct: true},
            { text: "Cooper, Jakes, Nate", correct: false},
            { text: "Kevin, Monae, Miller", correct: false},
            { text: "Nate, Bronwyn, Wheeler", correct: false},
        ]
    },
    {
        question: "Simon's father was __________",
        answers: [
            { text: "a Mayor", correct: true},
            { text: "a Drugbaron", correct: false},
            { text: "a Doctor", correct: false},
            { text: "an Instructor", correct: false},
        ]
    },
    {
        question: "Officer ___________ initiated an investigation into Simon's death.",
        answers: [
            { text: "Miller", correct: true},
            { text: "Wheeler", correct: false},
            { text: "Roger", correct: false},
            { text: "Chris", correct: false},
        ]
    },
    {
        question: "Simon's death was as a result of a _____________ allergy",
        answers: [
            { text: "Green", correct: false},
            { text: "Peanut", correct: true},
            { text: "Coco", correct: false},
            { text: "Oil", correct: false},
        ]
    },
    {
        question: "In season1, A memorial service was held for Simon where his best friend ______________ sang the song ______________.",
        answers: [
            { text: "Vanessa, Deepened", correct: false},
            { text: "Bronwyn, Stay Here", correct: false},
            { text: "Janae, Fuck You", correct: true},
            { text: "Monae, We All Cry", correct: false},
        ]
    },
    {
        question: "Chibuike Uche acted as ______________ in the series.",
        answers: [
            { text: "Cooper Clay", correct: true},
            { text: "Nate Macauley", correct: false},
            { text: "Giselle Ward", correct: false},
            { text: "Principal Gupta", correct: false},
        ]
    },
    {
        question: "Simon was known with his friend ___________ for starting an online group to snitch on his classmates.",
        answers: [
            { text: "Janae", correct: true},
            { text: "Bronwyn", correct: false},
            { text: "Jake", correct: false},
            { text: "Monae", correct: false},
        ]
    },
    {
        question: "Season2 had Jake's brother whose name is ___________",
        answers: [
            { text: "Cole Riordan", correct: true},
            { text: "Cooper Clay", correct: false},
            { text: "Jason Statham", correct: false},
            { text: "Simon Kelleher", correct: false},
        ]
    },
    {
        question: "Fiona Unsuccessfully attempts to kill ____________.",
        answers: [
            { text: "Maeve", correct: false},
            { text: "Addy", correct: true},
            { text: "Bronwyn", correct: false},
            { text: "Janae", correct: false},
        ]
    },
    {
        question: "Fiona was arrested and __________________.",
        answers: [
            { text: "died in prison", correct: true},
            { text: "was granted bail", correct: false},
            { text: "was released", correct: false},
            { text: "she wanted to speak to her attorney", correct: false},
        ]
    },
    {
        question: "____________ threatened to reveal Vanessa's relationship with Evans if she doesn't stop investigating _______________.",
        answers: [
            { text: "TJ, The Motley Crew", correct: false},
            { text: "Nate, Roxanne", correct: false},
            { text: "Fiona Jennings, Zach", correct: false},
            { text: "Simon Says, The Murder Club", correct: true},
        ]
    },
    {
        question: "A photo of Evans and Vanessa is posted on ______________.",
        answers: [
            { text: "The Dark Web", correct: false},
            { text: "Pinterest", correct: false},
            { text: "Instagram", correct: true},
            { text: "X", correct: false},
        ]
    },
    {
        question: "___________ sang Fuck You.",
        answers: [
            { text: "Billie Jean", correct: false},
            { text: "Eddie Murphy", correct: false},
            { text: "Lily Allen", correct: true},
            { text: "Lana Del Ray", correct: false},
        ]
    },
    {
        question: "___________ broke up with ___________ and starts a fight with TJ.",
        answers: [
            { text: "Ann, Cole", correct: false},
            { text: "Jake, Addy", correct: true},
            { text: "Keely, Brown", correct: false},
            { text: "Cooper, FJ", correct: false},
        ]
    },
    {
        question: "Addy was chased by an unseen stranger and ran into _____________.",
        answers: [
            { text: "Nate", correct: true},
            { text: "Andy Cooper", correct: false},
            { text: "Kris", correct: false},
            { text: "TJ", correct: false},
        ]
    },
    {
        question: "Maeve searches Addy's locker and found ______________.",
        answers: [
            { text: "an EpiPen", correct: true},
            { text: "an Hard drive", correct: false},
            { text: "a Flash drive", correct: false},
            { text: "a Glock", correct: false},
        ]
    },
    {
        question: "Detective wheeler arrrested _____________ for ____________ murder.",
        answers: [
            { text: "Simon, Jake's death", correct: false},
            { text: "Nate, Simon's death", correct: true},
            { text: "Cooper, Avery's death", correct: false},
            { text: "Janae, TJ's death", correct: false},
        ]
    },
    {
        question: "In a ________________, Simon tells the group that they want them to pay for hurting Jake.",
        answers: [
            { text: "Letter", correct: false},
            { text: "Text only Message", correct: false},
            { text: "Deepfake video", correct: true},
            { text: "Voice note", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = 'Identified as Chimdalu, a beautiful girl from North Carolina.. Thank you for playing!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();