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

// Helps prevent one anim cycle from initiating before the previous is complete. 
var clickable = true;

// These variables track movements that need to happen but that have not yet been executed
var rightQueue = 0;
var leftQueue = 0;

// This prevents arrow keys from scrolling/changing positioning of screen
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

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
	console.log("Clear initiated");
	$('.display-element').removeClass("horizTranslate");
	$('.display-element').removeClass("horizTranslate2");
	$('.display-element').removeClass("horizTranslate3");
	$('.display-element').removeClass("horizTranslate4");

	$('.display-element').removeClass("horizTranslate5");
	$('.display-element').removeClass("horizTranslate6");
	$('.display-element').removeClass("horizTranslate7");
	$('.display-element').removeClass("horizTranslate8");

	clickable = true;
//	runQueue();
	
}

// Allows user to scroll left through quiz choices. 
function moveLeft(){
	if (optionsArray[indexSelected + 1] != null){
		clickable = false;
		console.log("Left anim initiated");
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

	} /* else if (leftQueue > 0){
		leftQueue--;
	}; */
};

// Allows user to scroll right through quiz choices. 
function moveRight(){
	console.log("Right anim initiated");
	if (optionsArray[indexSelected - 1] != null){
		clickable = false;
		console.log("Move conditions met")
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
		classPull = setTimeout(removeClass, 600);

	} /*else if (rightQueue > 0){
		console.log("Move conditions not met.");
		rightQueue--;
	}; */
}

// What happens when a user selects a quiz
function selectQuiz(){
	window.location.replace(optionsArray[indexSelected].link);
}

$(document).ready(function() {
	function myFunction() {
    	alert("You pressed a key inside the input field");
	}
});

$(document).keyup(function(){
	document.onkeydown = checkKey;
    function checkKey(e) {
    	console.log(clickable);
    	if (clickable){
		    if (e.keyCode == '37') {
		        moveRight();
		    } else if (e.keyCode == '39') {
		    	moveLeft();
		    } else if (e.keyCode == '13') {
		    	selectQuiz();
		    }

		// The move functions can only process one request at a time. If they recieve more than one request at a time, the move animations may not work properly. 
		// This functionality allows excess requests to be stored to a queue and executed once the move functions are available.
		// The queue total is capped at three in order to avoid a 'hijacked screen' scenario in which a user has pressed the arrow keys many times and now must wait for the screen to catch up. 
		} /*else if (rightQueue + leftQueue < 3){
			console.log("Function overloaded")
			if (e.keyCode == '37') {
		        rightQueue++;
		        runQueue();
		    } else if (e.keyCode == '39') {
		    	leftQueue++;
		    	runQueue();
		    }
		}
		console.log("Right queue: " + rightQueue);
		console.log("Left queue: " + leftQueue);
		*/
	};
});

/*
// This will executed movement requests from the queue if move functionality is available.
function runQueue(){
	if (clickable && rightQueue > 0){
		console.log("Running right queue.")
		moveRight();
		rightQueue--;
	};

	if (clickable && leftQueue > 0){
		console.log("Running left queue.")
		moveLeft();
		leftQueue--;
	};

	// If there are still movements in the queue, the function is called again.
	if (rightQueue > 0 || leftQueue > 0){
//		maintainQueue = setTimeout(runQueue, 200);
		runQueue();
	};
};
*/

$(document).ready(function(){
    $('#button-left').click(function(){
        moveRight();
    });

    $('#button-right').click(function(){
        moveLeft();
    });

    $('#button-center').click(function(){
        selectQuiz();
    });
});

