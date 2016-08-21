'use strict';
/*part1
1. Write a script that selects all the div nodes that are directly inside other div elements
    * Create a function using querySelectorAll()
    * Create a function using getElementsByTagName()*/
function divElementsWithTagName (){
	var divElements = document.getElementsByTagName("div");
	var result = [];
	for (var i = 0; i < divElements.length; i++){
		if (divElements[i].parentNode && divElements[i].parentNode.tagName === 'DIV'){
			result.push(divElements[i]);
		}
	}
	return result;
}
console.log(divElementsWithTagName());

function divElementsWithQuerySelectorAll (){
	return document.querySelectorAll("div>div");
}

console.log(divElementsWithQuerySelectorAll());
	
/*part2
2. Create a function that gets the value of <input type="text"> ands prints its value to the console*/

function printInputTextToConsole(){
	var textInputs = document.querySelectorAll("input[type='text']");
	if (textInputs.length > 0){
		var i = 0;
		while (i < textInputs.length){
			console.log(textInputs[i].value);
			i++;
		}
	} else {
		console.log('There are no <input type="text">.');
	}
	
}

printInputTextToConsole();

/*part3
Crеate a function that gets the value of <input type="color"> and sets the background of the body to this value*/

function setBackgroundOfTheBody(){
	var colorInput = document.querySelector("input[type='color']");
	if (colorInput && colorInput.value){
		document.body.style.background = colorInput.value;
		colorInput.oninput = function(){
			document.body.style.background = colorInput.value;
		}
	} else {
		console.log('There are no <input type="color">.');
	}
}

setBackgroundOfTheBody();
