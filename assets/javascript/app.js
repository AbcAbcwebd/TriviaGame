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
	$("#choices").append("<p id='choice-1' class='choice'></p>");
	$("#choices").append("<p id='choice-2' class='choice'></p>");
	$("#choices").append("<p id='choice-3' class='choice'></p>");
	$("#choices").append("<p id='choice-4' class='choice'></p>");

	// This loops through the questions and runs each of them.
	for (var i = 0; i < quiz.questions.length; i++){
		runQuestion(quiz, i)
	}

}

function runQuestion(quiz, ques){
	console.log(quiz.questions[ques].question);
	$('#question').text(quiz.questions[ques].question);

}