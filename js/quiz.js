//====================================================================================================================//
//========================================== DATA SECTION =========================================================//
//====================================================================================================================//

// holds all the data for the quiz in an array of hashes
var trivia = [{
			   question1: "What is the capital of New York?", 
			   choices1: ["Manhattan", "Albany", "Deer Park"], 
			   answer1: "Albany"}, 
			  {question2: "What is the capital of Nebraska?",
			   choices2: ["Boise", "Tusla", "Lincoln"],
			   answer2: "Lincoln"},
			  {question3: "What is the capital of Oregon?",
			   choices3: ["Sacramento", "Portland", "Salem"],
			   answer3: "Salem"},
			   {question4: "What is the capital of Arizona?",
			   choices4: ["Scottsdale", "Phoenix", "Tempe"],
			   answer4: "Phoenix"},
			   {question5: "What is the capital of Florida?",
			   choices5: ["Miami", "Jacksonville", "Tallahassee"],
			   answer5: "Tallahassee"
}];

// set the counter for button clicks
var btnCount = 0;

// holds sum total of correct choices
var sumTotalChoice = [];


//====================================================================================================================//
//========================================== FUNCTIONS SECTION =========================================================//
//====================================================================================================================//

// this function creates starting question, a container div, and 3 radio buttons with choices 
function createMaterial() {

	var div = "<div id=\"container\"></div>";
	var question = "<p>" + trivia[0]["question1"] + "</p>";
	var input = "<div>";

	for (var i = 0; i < 3; i++){
		 input += "<input class=\"radio\" value="+trivia[0]["choices1"][i]+" name=\"choice\" type=\"radio\">" +
		 		 "<label for=\"choice\" class=\"label\">" + trivia[0]["choices1"][i] + "</label><br />";
	}

	input += "</div>";

	button = "<button id = \"button\">" + "Next Question" + "</button>";

	//attaches the newly created elements to the DOM
	$("body").append(div);
	$("#container").append(question).append(input).append(button);
}

function rightChoice () {
	sumTotalChoice.push(1);
	
}


createMaterial();


//====================================================================================================================//
//========================================== jQUERY SECTION =========================================================//
//====================================================================================================================//


$(document).ready( function ( ) {
	$("button").on("click", function(){
		// evaluate the length of the checked radio buttons
		// which enforces that one is checked before clicking next
		if ($(".radio:checked").length > 0) {
			if (btnCount == 0) {
				if ( $(".radio:checked").val() == "Albany" ) {
					rightChoice();
				}
				// change the inner contents of p to a new question
				$("p").html(trivia[1].question2);
				// iterate over each label class element
				// and change it's text to the new value 
				$(".label").each( function(i) {
					$(this).text(trivia[1]["choices2"][i]);
				}); 
			}
			else if (btnCount == 1) {
				if ( $(".radio:checked").val() == "Lincoln" ) {
					rightChoice();
				}
				$("p").html(trivia[2].question3);
				$(".label").each( function(i) {
					$(this).text(trivia[2]["choices3"][i]);
				});
			}
			else if (btnCount == 2) {
				if ( $(".radio:checked").val() == "Salem" ) {
					rightChoice();
				}
				$("p").html(trivia[3].question4);
				$(".label").each( function(i) {
					$(this).text(trivia[3]["choices4"][i]);
				});
			}
			else if (btnCount == 3)	{
				if ( $(".radio:checked").val() == "Phoenix" ) {
					rightChoice();
				}
				$("p").html(trivia[4].question5);
				$(".label").each( function(i) {
					$(this).text(trivia[4]["choices5"][i]);
				});
				$("button").text("Your Score");
			}
			else {
				if ( $(".radio:checked").val() == "Tallahassee" ) {
					rightChoice();
				}
				$("h1").text("Thanks for playing!");
				$("div, button, h3, p").remove();
			}
		}
		
		btnCount++;
	});
});

















