// This document specifically controls JavaScript functionality for the trivia site homepage.

// This page is capable of linking to a variety of quizes. This function defines the format for quiz option objects only within the homepage. 
		function quizOpt(name, thumbnail, link) {
		    this.name = name;
		    this.thumbnail = thumbnail;
		    this.link = link;
		}

var fourOJuly = new quizOpt("4th of July", "uncle-sam-hat.png", "4th-of-july.html");
var movies = new quizOpt("Movies", "camera.png", "movies.html");
var spaceTravel = new quizOpt("Space Travel", "moon.png", "space-travel.html");
var indexSelected = 0;

var optionsArray = [fourOJuly, movies, spaceTravel];

// This creates a display on the homepage that allows the user to select a quiz.
function loadDisplay(){
	for (var i = 0; i < optionsArray.length; i++){
		console.log("function running")
		$('#quiz-option-display').append("<div class='display-element' id='display" + i +"'></div>")
		$('#display' + i).html("<img class='home-image' src='assets/images/" + optionsArray[i].thumbnail + "'><h3 class='home-header'>" + optionsArray[i].name + "</h3>");

		// This hides thumbnails that a user must scroll to reach
		if (i > 1){
			$('#display' + i).hide();
		}
	}

	// This positions the quiz thumbnails.
	document.getElementById("display0").style.left = "35%";
	document.getElementById("display1").style.left = "85%";
}

// Allows user to scroll left through quiz choices. 
function moveLeft(){
	document.getElementById("display" + indexSelected).classList.add('horizTranslate');
	document.getElementById("display" + (indexSelected + 1)).classList.add('horizTranslate2');
	$('display' + (indexSelected + 2)).show();


}