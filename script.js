var startQuiz = document.querySelector(".start");
var currentQuestionIndex = 0;

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
   
    // un-hides questions section
  
    // starts timer
    // show starting time
    
    // calls another function maybe called:
    // getQuestion();
  }

  function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title in the html with current question
  
  
    // clear out any old question choices
   
  
    // loop over choices and create new button for each choice
     
  
     
  
      // display on the page by appending
      
    }
  

startQuiz.addEventListener("click", function () {

})

console.log(questions)