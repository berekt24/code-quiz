var startQuizEl = document.querySelector("#start");
var currentQuestionIndex = 0;
var timeEl = document.querySelector(".time");
var timerElement = document.querySelector(".timer-count");
var timerCount = 60;
var questionTitle = document.querySelector("#questionTitle");
var optionA = document.querySelector("#option-A")
var optionB = document.querySelector("#option-B")
var optionC = document.querySelector("#option-C")
var optionD = document.querySelector("#option-D")
var finalScore = document.querySelector("#final-score")
var correctAns = 0;
var highscores =[];
var highScorelist = document.querySelector("#highScoresList")
var questions = [
  {
    question: "Which element is usually used as the title of the page and/or first header?",
    options: ["a. <p>", "b. <div>", "c. <h1>", "d. <ryan>"],
    answer: "c. <h1>"
  },
  
  {
    question: "Which option is a class selector?",
    options: ["a. #box", "b. section", "c. .header", "d. class = henry"],
    answer: "c. .header"
  },

  {
    question: "Which datatype has a true or false value?",
    options: ["a. string", "b. number", "c. boolean", "d. willis"],
    answer: "c. boolean"
  },

  {
    question: "Which method adds an element to the end of an array?",
    options: ["a. splice", "b. sort", "c. push", "d. vrabel"],
    answer: "c. push"
  },

  {
    question: "What does the method getElementById do?",
    options: ["a. It gets the id from the Titans.", "b. It gets the id from the browser", "c. It gets the id from the JavaScript.", "d. It gets the id from the HTML."],
    answer: "d. It gets the id from the HTML."
  }
]

function startQuiz() {
    // hides the start screen
    var startBtn = document.getElementById("start-screen");
    // un-hides questions section
    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
      } else {
        startBtn.style.display = "none";
      }
      getQuestion();
      document.querySelector(".questions").classList.remove("hide")
    // starts timer
    // show starting time
        timerCount = 60;
        
        startQuizEl.disabled = true;
        startTimer()
      }

      function startTimer() {
        // Sets timer
        timer = setInterval(function() {
          timerCount--;
          timeEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
        }
        
          
          }
        , 1000);
      }

      
        

  function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion)
    // update title in the html with current question
    questionTitle.textContent = questions[currentQuestionIndex].question;
    optionA.textContent = questions[currentQuestionIndex].options[0];
    optionB.textContent = questions[currentQuestionIndex].options[1];
    optionC.textContent = questions[currentQuestionIndex].options[2];
    optionD.textContent = questions[currentQuestionIndex].options[3];

   
    }

    function checkAnswers(event) {
        console.log(event.target.textContent)
        if (event.target.textContent === questions[currentQuestionIndex].answer) {
            correctAns++;
            document.querySelector("#answer").textContent = "Correct!"

        }
        else {document.querySelector("#answer").textContent = "Wrong!"
                timerCount -= 10;
                }
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
           getQuestion();
        }
        else {endGame();}
    }

    function endGame() {
        var end = document.querySelector("#endScreen");
        // end.setAttribute("style","display: block");
          if (end.setAttribute("style","display: none")) {;
            end.setAttribute("style","display: block");
          } else (
            timer.setAttribute("style","display: none"));

            finalScore.textContent = correctAns;
        

    }
  
    startQuizEl.addEventListener("click", startQuiz);

console.log(questions)
console.log(end);

