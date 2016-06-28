//first task
console.log(reverseString('sample'));
function reverseString(str){
	if (typeof str != 'undefined'){
		return str.toString().split('').reverse().join('');
	}
}

//second task
console.log(checkBrackets('((a+b)/(5-d)'));
function checkBrackets(expression){
	if (expression.indexOf(')') < expression.indexOf('(')){
		return 'The brackets are put incorrectly.';
	}
	var arr = expression.split('');
	var i = 0,
		count1 = 0,
		count2 = 0;
	while (i <= (arr.length - 1)){
		if ((arr[i] === '(')){
			count1++;
		}
		if (arr[i] === ')'){
			count2++;
		}
		if (count2 > count1){
			return 'The brackets are put incorrectly.';
			break;
		}
		i++;
	}
	if (count1 > count2){
		return 'The brackets are put incorrectly.';
	}
	return 'The brackets are put correctly.';
}

//third task
console.log(findWordInTheText('in','We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.'));
 
function findWordInTheText(some, someText){
	i = 0;
	var j = 0;
	someTextForFunction = someText.toLowerCase();
	someForFunction = some.toLowerCase();
	while (true){
		var findIndex = someTextForFunction.indexOf(someForFunction, j);
		if (findIndex == -1) break;
		j = findIndex+1;
		i++;
	}
	return someText + '\n' + "There are " + i + ' occurrences of \'' + someForFunction + '\'' + ' in the text.';
}

//fourth task
