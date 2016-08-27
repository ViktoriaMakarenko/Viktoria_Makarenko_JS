'use strict';

var gameStorage = window.localStorage;

//show high score

function showHighScore(){
	clearList();
	var k = Number(gameStorage.getItem('count'));
	var arrOfWiners = [];
	if (k){
		for (var i = 1; i <= k; i++){
			var nick = gameStorage.getItem(i);
			var iter = gameStorage.getItem(nick);
			arrOfWiners.push({'nickName': nick, 'iter': Number(iter)});
		};
	
		arrOfWiners.sort(compareResults);

		for (var i = 0; i < arrOfWiners.length; i++){
			var highScoreList = document.querySelector('.high_score table tbody');
			highScoreList.appendChild(highScoreItem(i, arrOfWiners[i]));
		};
	};
};

function compareResults(nickA, nickB) {
	return nickA.iter - nickB.iter;
};
	
function highScoreItem(i, winer){
	var box = document.createElement('tr');
	var nickName = document.createElement('td');
	var result = document.createElement('td');
	var numberInList = document.createElement('td');
	nickName.innerHTML = winer.nickName;
	result.innerHTML = winer.iter;
	numberInList.innerHTML = i + 1;
	box.appendChild(numberInList);
	box.appendChild(nickName);
	box.appendChild(result);
	return box;
};

startGame();
//start game
function startGame(){
	showHighScore();
	document.querySelector('#user_number').value = '';//clear input
	gameStorage.setItem('iterations', 0);//clear iterations
	var listIter = document.querySelectorAll('.iterations div div');
	if (listIter.length > 0){
		for (var i = 0; i < listIter.length; i++) {
			listIter[i].remove();
		};
	};
	document.querySelector('#check').className = '';
	var digits = [];
	var i = 0;
	while (i < 4){
		var number = String(Math.floor(Math.random() * 10));
		if (i == 0 && number != 0){
			digits.push(number);
			i++;
		};
		for (var j = 0; j < i; j++){
			if (number == digits[j]){
				var contain = true;
				break;
			} else {
				contain = false;
			};
		};
		if (!contain && contain != undefined){
			digits.push(number);
			i++;
		};
	};
	gameStorage.setItem('computerNumber', digits);
	console.log(digits);
	document.querySelector('.game_content').style.display = 'block';
};

//check result
function check(){
	var digits = gameStorage.getItem("computerNumber").split(',');
	var ram = 0;
	var sheep = 0;
	var iterations = Number(gameStorage.getItem('iterations'));
	var userNumber = document.querySelector('#user_number').value;
	var userDigits = userNumber.split('');
	if (userDigits.length == 4){
		var repeat = false;
		var workNumber = userNumber.split('');
		for (var i = 0; i < 4; i++){
			workNumber.shift();
			var nextNumbers = workNumber.toString();
			if(nextNumbers.indexOf(userDigits[i]) != -1){
				error('.error_repeating_digits');
				var repeat = true;
				return null;
			};
		};
		if (!repeat){
			for (var i = 0; i < 4; i++){
				if (!isNaN(userDigits[i])){
					if (i == 0 && userDigits[i] === '0'){
						error('.error_first_digit');
						return null;
					};
					if (userDigits[i] === digits[i]){
						ram++;
					} else {
						var j = 0;
						while (j < 4){
							if (userDigits[i] === digits[j]){
								sheep++;
								break;
							};
							j++;
						};
					};
				} else {
					error('.error_digit');
					return null;
				};
			};
		};
	} else {
		error('.error_length');
		return null;
	};
	
	iterations++;
	gameStorage.setItem('iterations', iterations);

	var result = userNumber + ' || sheep: ' + sheep + ', ' + 'ram: ' + ram;
	
	var iteration = document.createElement('div');
	var parent = document.querySelector('.iterations div');
	iteration.innerHTML = result;
	parent.appendChild(iteration);
	//end of the game
	if (ram === 4){
		var count = Number(gameStorage.getItem('count')) + 1;
		gameStorage.setItem('count', count);
		var nickName = prompt('Congratulations! You won! Please, enter you nickname for high-score list.');
		while (!isNaN(nickName)){
			nickName = prompt('Incorrect nick! Please, enter you nickname for high-score list.');
		};
		gameStorage.setItem(count, nickName);
		gameStorage.setItem(nickName, iterations);
		var startAgain = confirm('Do you want start again?');
		if (startAgain) {
			startGame();
		} else {
			document.querySelector('#check').className = 'noLink';
			clearList();
			showHighScore();
		};
	};
};

 function error(errorSelector){
	document.querySelector(errorSelector).style.display = 'block';
	setTimeout(function () {document.querySelector(errorSelector).style.display = 'none';}, 5000);
 };
 
function clearStorage(){
	gameStorage.clear();
	clearList();
 };

function clearList(){
	var highScoreList = document.querySelectorAll('.high_score table tbody tr');
	if (highScoreList.length > 0){
		for (var i = 0; i < highScoreList.length; i++) {
			highScoreList[i].remove();
		};
	};
 };