var startQuizEl = document.querySelector("#start");
var currentQuestionIndex = 0;
var timeEl = document.querySelector(".time");
var timerElement = document.querySelector(".timer-count");
var timerCount;
var questions = [
  {
    question: "Which element is usually used as the title of the page and/or first header?",
    options: ["<p>", "<div>", "<h1>", "<ryan>"],
    answer: 3
  },
  
  {
    question: "Which option is a class selector?",
    options: ["#box", "section", ".header", "class = henry"],
    answer: 3
  },

  {
    question: "Which datatype has a true or false value?",
    options: ["string", "number", "boolean", "willis"],
    answer: 3
  },

  {
    question: "Which method adds an element to the end of an array?",
    options: ["splice", "sort", "push", "vrabel"],
    answer: 3
  },

  {
    question: "What does the method getElementById do?",
    options: ["It gets the id from the Titans.", "It gets the id from the browser", "It gets the id from the JavaScript.", "It gets the id from the HTML."],
    answer: 4
  }
]

function startQuiz() {
    // hides the start screen
    var startBtn = document.getElementById("start");
    // un-hides questions section
    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
      } else {
        startBtn.style.display = "none";
      }
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
          timerElement.textContent = timerCount;
          
          
          }
        , 1000);
      }
        






  

  function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title in the html with current question
    
  
    // clear out any old question choices
   
  
    // loop over choices and create new button for each choice
     
  
     
  
      // display on the page by appending
      
    }
  
    startQuizEl.addEventListener("click", startQuiz);

console.log(questions)
console.log(startQuiz);

