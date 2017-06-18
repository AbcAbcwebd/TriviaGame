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
		$('#quiz-option-display').append("<div class='display-element' id='display" + i +"'></div>")
		$('#display' + i).html("<img class='home-image' src='assets/images/" + optionsArray[i].thumbnail + "'><h3 class='home-header'>" + optionsArray[i].name + "</h3>");

		// This hides thumbnails that a user must scroll to reach
		if (i > 1){
			$('#display' + i).css("left", "100%");
		}
	}

	// This positions the quiz thumbnails.
	document.getElementById("display0").style.left = "35%";
	document.getElementById("display1").style.left = "85%";
}

// Removes class from a particular HTML object
function removeClass(){
	$('.display-element').removeClass("horizTranslate");
	$('.display-element').removeClass("horizTranslate2");
	$('.display-element').removeClass("horizTranslate3");
	$('.display-element').removeClass("horizTranslate4");

	$('.display-element').removeClass("horizTranslate5");
	$('.display-element').removeClass("horizTranslate6");
	$('.display-element').removeClass("horizTranslate7");
	$('.display-element').removeClass("horizTranslate8");
	
}

// Allows user to scroll left through quiz choices. 
function moveLeft(){
	if (optionsArray[indexSelected + 1] != null){
		if (indexSelected > 0){
		document.getElementById("display" + (indexSelected - 1)).classList.add('horizTranslate4');
		$('#display' + (indexSelected - 1)).css("left", "-45%");
		}

		document.getElementById("display" + indexSelected).classList.add('horizTranslate');
		$('#display' + indexSelected).css("left", "-15%");
		
		document.getElementById("display" + (indexSelected + 1)).classList.add('horizTranslate2');
		$('#display' + (indexSelected + 1)).css("left", "35%");
		

		// If a third element is available it should be moved onto the screen.
		if (optionsArray[indexSelected + 2] != null){
			document.getElementById("display" + (indexSelected + 2)).classList.add('horizTranslate3');
			$('#display' + (indexSelected + 2)).css("left", "85%");
			
		}

		indexSelected++;
		console.log(indexSelected);
		classPull = setTimeout(removeClass, 600);

	}
};

// Allows user to scroll right through quiz choices. 
function moveRight(){
	if (optionsArray[indexSelected - 1] != null){
		if (indexSelected > 0){
		document.getElementById("display" + (indexSelected - 1)).classList.add('horizTranslate8');
		$('#display' + (indexSelected - 1)).css("left", "35%");
		}

		document.getElementById("display" + indexSelected).classList.add('horizTranslate5');
		$('#display' + indexSelected).css("left", "85%");
		
		if (optionsArray[indexSelected + 1] != null){
			document.getElementById("display" + (indexSelected + 1)).classList.add('horizTranslate6');
			$('#display' + (indexSelected + 1)).css("left", "100%");
		};

		// If a third element is available it should be moved onto the screen.
		if (optionsArray[indexSelected - 2] != null){
			document.getElementById("display" + (indexSelected - 2)).classList.add('horizTranslate7');
			$('#display' + (indexSelected - 2)).css("left", "-15%");
			
		}

		indexSelected--;
		console.log(indexSelected);
		classPull = setTimeout(removeClass, 600);

	}
}

function countLeft(){
	
};

function countRight(){
	
}