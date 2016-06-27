// first task
var result;
function testslastDigitToWord(){
	console.log(lastDigitToWord(512));//Last digit of 512 is two.
	console.log(lastDigitToWord(0));//Last digit of 0 is zero.
	console.log(lastDigitToWord());//Input data should be an integer.
	console.log(lastDigitToWord('fd'));//Input data should be an integer.
	console.log(lastDigitToWord(true));//Input data should be an integer.
}

//testslastDigitToWord();

console.log(lastDigitToWord(512));

function lastDigitToWord(myNumber){
	if ((myNumber || (myNumber === 0)) && (typeof myNumber == 'number')){
		var lastDigit = myNumber % 10;
		switch (lastDigit){
			case (0) : 	{result = 'Last digit of ' +myNumber + ' is zero.';
						break;}
			case (1) : 	{result = 'Last digit of ' +myNumber + ' is one.';
						break;}
			case (2) : 	{result = 'Last digit of ' +myNumber + ' is two.';
						break;}
			case (3) : 	{result = 'Last digit of ' +myNumber + ' is three.';
						break;}
			case (4) : 	{result = 'Last digit of ' +myNumber + ' is four.';
						break;}	
			case (5) : 	{result = 'Last digit of ' +myNumber + ' is five.';
						break;}
			case (6) : 	{result = 'Last digit of ' +myNumber + ' is six.';
						break;}
			case (7) : 	{result = 'Last digit of ' +myNumber + ' is seven.';
						break;}
			case (8) : 	{result = 'Last digit of ' +myNumber + ' is eight.';
						break;}
			case (9) : 	{result = 'Last digit of ' +myNumber + ' is nine.';
						break;}
		}
		return result;
	}
	console.log('Input data should be an integer.');
	return null;
 }
 
 //second task
 
 console.log(reverseOfNumber(256));
 
 function reverseOfNumber(myNumber){
	if (myNumber && (myNumber >= 10) && (typeof myNumber == 'number')){
		result = Number (myNumber.toString().split('').reverse().join(''));
		return myNumber + ' became ' +result;
	}
	console.log('Input data should be an integer more ore equal 10.');
	return null;
 }
 
 // third task
 
console.log(findingWordInTheText());
 
function findingWordInTheText(){
	var some = 'Some',
		someText = 'There is some text, in witch we will find the word \'Some\'. Some or some. May be it will some.',
		caseSensivity = confirm('Do you want to search with case sensevity?');
		return findWordInTheText(some, someText, caseSensivity);
};

function findWordInTheText(some, someText, caseSensivity){
	i = 0,
	j = 0;
	someTextForFunction = someText;
	someForFunction = some;
	if (!caseSensivity){
		someTextForFunction = someText.toLowerCase();
		someForFunction = some.toLowerCase();
	}
	while (true){
		var findIndex = someTextForFunction.indexOf(someForFunction, j);
		if (findIndex == -1) break;
		j = findIndex+1;
		i++;
	}
	return someText + '\n' + "There are " + i + ' occurrences of \'' + someForFunction + '\'' + ' in the text.';
}

//fourth task

console.log(findDivs());

var countOfDivs = 0;

function findDivs(){
	return countOfDivs = 'There are ' + document.getElementsByTagName('DIV').length + ' divs on the page.';
}
 
  
 
 
 
 