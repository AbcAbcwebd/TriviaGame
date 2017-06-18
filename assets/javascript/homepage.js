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

var optionsArray = [fourOJuly, movies, spaceTravel];

function loadDisplay(){
	for (var i = 0; i < optionsArray.length; i++){
		$('#quiz-option-display').append("<div></div>").attr('id','display' + i);
		$('#display0').html("<p>Working</p>")
	}
	
}