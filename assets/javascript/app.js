var questionCount = 0;

// This defines how the quiz objects will be structured. 
function quiz(name, questions, background) {
	    this.name = name;
	    this.questions = questions;
	    this.background = background;
	}

// This defines how the ask (question) objects will be structured. 
function ask(question, choices, correct, endImage) {
	    this.question = question;
	    this.choices = choices;

	    // Index of correct answer in above array.
	    this.correct = correct;

	    // Image to be displayed at end of question.
	    this.endImage = endImage;
	}

// The entire page will be generated dynamically using this function. The only thing on the actual page is basic head markup and the objects necesary for that particular quiz. 
// This allows quiz functionality to be quickly cloned to make any number of quizes, updating only the objects passed in. 
// The reason each quiz operates from a seperate HTML page is to make them easier to link to individually. 
function loadGame(quiz) {
	$('body').html("<h1>Super Trivia Game</h1>");
	$('body').append("<p id='time-left'>Time remaining: <span id='time-update'></span></p>");
	$('body').append("<p id='question'></p>");
	$('body').append("<div id='choices'></div>");
	$("#choices").append("<p id='choice-1' class='choice' value='0'></p>");
	$("#choices").append("<p id='choice-2' class='choice' value='1'></p>");
	$("#choices").append("<p id='choice-3' class='choice' value='2'></p>");
	$("#choices").append("<p id='choice-4' class='choice' value='3'></p>");

	// This initiates the first question. 
	runQuestion(quiz, questionCount)

}

// This functionality powers the individual questions. 
function runQuestion(quiz, ques){
	$('#question').text(quiz.questions[ques].question);

	//This populates the questions
	$('#choice-1').text(quiz.questions[ques].choices[0]);
	$('#choice-2').text(quiz.questions[ques].choices[1]);
	$('#choice-3').text(quiz.questions[ques].choices[2]);
	$('#choice-4').text(quiz.questions[ques].choices[3]);

	setTimeout(endQuestion, 15000)

	// Functionality to display time. 
	var timeLeft = 15;
	setInterval(function(){
		timeLeft--;
		if (timeLeft < 10){
			timeLeft = "0" + timeLeft;
		}
		$('#time-left').text("0:" + timeLeft);
	}, 1000);	

}

// On click functionality
$(document).ready(function(){

//	$('#choice-1').click(endQuestion(0));
	$("#choice-1").click(function(){ 
		console.log("clicked")
	});
});

function endQuestion(num){
	console.log(num);
//	console.log("Question ended.")
}