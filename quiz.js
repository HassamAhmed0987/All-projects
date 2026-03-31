





const quizStartBtn = document.querySelector(".start-html-quiz")
let htmlModel = document.querySelector(".html-model")
let closeBtn = document.querySelector(".quiz-close")

quizStartBtn.addEventListener("click", function () {

    htmlModel.style.display = "flex"
})
closeBtn.addEventListener("click",function () {
    htmlModel.style.display = "none"

})



// ------------------------------------------------------------------------------
const questions = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlinks Text Mark Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which tag is used to start HTML document?",
        answer: [
            { text: "<body>", correct: false },
            { text: "<html>", correct: true },
            { text: "<head>", correct: false },
            { text: "<start>", correct: false }
        ]
    },
    {
        question: "Which tag is used for the largest heading?",
        answer: [
            { text: "<h3>", correct: false },
            { text: "<heading>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<h6>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a paragraph?",
        answer: [
            { text: "<p>", correct: true },
            { text: "<text>", correct: false },
            { text: "<para>", correct: false },
            { text: "<pg>", correct: false }
        ]
    },
    {
        question: "Which tag is used to insert an image?",
        answer: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<pic>", correct: false },
            { text: "<photo>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a link?",
        answer: [
            { text: "<href>", correct: false },
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<url>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a line break?",
        answer: [
            { text: "<break>", correct: false },
            { text: "<br>", correct: true },
            { text: "<lb>", correct: false },
            { text: "<line>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create an unordered list?",
        answer: [
            { text: "<list>", correct: false },
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false },
            { text: "<li>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create an ordered list?",
        answer: [
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<li>", correct: false },
            { text: "<order>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a list item?",
        answer: [
            { text: "<ul>", correct: false },
            { text: "<item>", correct: false },
            { text: "<li>", correct: true },
            { text: "<ol>", correct: false }
        ]
    },
    {
        question: "Which tag is used to make text bold?",
        answer: [
            { text: "<stronger>", correct: false },
            { text: "<b>", correct: true },
            { text: "<bold>", correct: false },
            { text: "<bb>", correct: false }
        ]
    },
    {
        question: "Which tag is used to make text italic?",
        answer: [
            { text: "<italic>", correct: false },
            { text: "<it>", correct: false },
            { text: "<i>", correct: true },
            { text: "<emphasis>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a table?",
        answer: [
            { text: "<tb>", correct: false },
            { text: "<tab>", correct: false },
            { text: "<table>", correct: true },
            { text: "<tbl>", correct: false }
        ]
    },
    {
        question: "Which tag is used for table rows?",
        answer: [
            { text: "<td>", correct: false },
            { text: "<row>", correct: false },
            { text: "<tr>", correct: true },
            { text: "<th>", correct: false }
        ]
    },
    {
        question: "Which tag is used for table data?",
        answer: [
            { text: "<tr>", correct: false },
            { text: "<data>", correct: false },
            { text: "<td>", correct: true },
            { text: "<th>", correct: false }
        ]
    },
    {
        question: "Which tag is used for table headings?",
        answer: [
            { text: "<td>", correct: false },
            { text: "<th>", correct: true },
            { text: "<tr>", correct: false },
            { text: "<head>", correct: false }
        ]
    },
    {
        question: "Which tag contains metadata?",
        answer: [
            { text: "<meta>", correct: false },
            { text: "<head>", correct: true },
            { text: "<body>", correct: false },
            { text: "<title>", correct: false }
        ]
    },
    {
        question: "Which tag sets the page title?",
        answer: [
            { text: "<meta>", correct: false },
            { text: "<name>", correct: false },
            { text: "<title>", correct: true },
            { text: "<head>", correct: false }
        ]
    },
    {
        question: "Which tag contains visible page content?",
        answer: [
            { text: "<main>", correct: false },
            { text: "<html>", correct: false },
            { text: "<body>", correct: true },
            { text: "<head>", correct: false }
        ]
    },
    {
        question: "Which tag is used to create a form?",
        answer: [
            { text: "<input>", correct: false },
            { text: "<form>", correct: true },
            { text: "<button>", correct: false },
            { text: "<submit>", correct: false }
        ]
    }
]





const questionElement = document.querySelector(".question")
const answerButtons = document.querySelector(".answer-btns")
const nextBtn = document.querySelector(".next")
const totalQuestion = document.querySelector(".totalquestion")





totalQuestion.textContent = `${questions.length} Questions`

let questionindex = 0
let score = 0


function startQuiz() {
    questionindex = 0
    score = 0
    showQuestion()
}


function showQuestion() {
    resetState()
    let currentQuestion = questions[questionindex]
    let questionNo = questionindex + 1

    questionElement.textContent = `${questionNo}: ${currentQuestion.question}`


    currentQuestion.answer.forEach(function (answer) {
        let button = document.createElement("button")
        let input = document.createElement("input")
        let text = document.createElement("span")
        button.classList.add("btn")
        button.appendChild(input)
        button.appendChild(text)
        input.type = "radio"
        input.name = "answer"
        text.textContent = answer.text
        answerButtons.appendChild(button)
        // button.textContent = answer.text
        // console.log(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        input.addEventListener("click", selectAnswer)
    })
}
function resetState() {
    nextBtn.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.parentElement.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.parentElement.classList.add("correct")
        score++
        // console.log(selectedBtn.parentElement);
    } else {
        selectedBtn.parentElement.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(function (button) {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
        // input.disabled = true
    })
    nextBtn.style.display = "block"
}


function showScore() {
    resetState()
    questionElement.textContent = `You scored ${score} out of ${questions.length}`
    nextBtn.style.display = "block"
    nextBtn.textContent = "Play Again"
}


function handleNextButton() {
    questionindex++
    if (questionindex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextBtn.addEventListener("click", function () {
    if (questionindex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }

})

startQuiz()
