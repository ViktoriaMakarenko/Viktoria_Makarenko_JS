//first task

console.log(reverseString('sample'));

function reverseString(str){
	if (typeof str != 'undefined'){
		return str.toString().split('').reverse().join('');
	}
}

//second task

console.log(checkBrackets('((a+b)/(5-d))'));

function checkBrackets(expression){
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

console.log(changeTheTextInAllRegions('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.'));

function changeTheTextInAllRegions(anyText){
	var result = changeTheText(anyText, '<upcase>', '</upcase>');
	result = changeTheText(result, '<lowcase>', '</lowcase>');
	result = changeTheText(result, '<mixcase>', '</mixcase>');
	return result;
}
function changeTheText(anyText, startText, finishText){
	var i = 0,
		result = anyText;
		while (true) {
			i = anyText.indexOf(startText, i);
			if (i == -1) break;
			var start = i + startText.length;
			var finish = anyText.indexOf(finishText, i);
			i++,
			t = anyText.substring(start,finish);
			switch (startText){
				case ('<upcase>'): {
					result = result.replace(t,t.toUpperCase());
					break;
				}
				case ('<lowcase>') : {
					result = result.replace(t,t.toLowerCase());
					break;
				}
				case ('<mixcase>') : {
					result = result.replace(t,mixCase(t));
					break;
				}
			}
			
			result = result.replace(startText,'');
			result = result.replace(finishText,'');
		}
	return result;
}

function mixCase(someText) {
	result = someText;
	var arr = someText.split(''),
		variants = ['lower','upper'];
	for (var i = 0; i < arr.length; i++){
		var letter = Math.floor(Math.random() * variants.length);
		if (letter === 1){
			result = result.replace(arr[i],arr[i].toLowerCase());
		} else {
			result = result.replace(arr[i],arr[i].toUpperCase());
		}
	}
	return result;
}

//fives task

console.log(changeUnbreakingWhiteSpaces('There are some white spaces \'\u00A0\'.'));
document.write('There are some white spaces \'\u00A0\'.');

function changeUnbreakingWhiteSpaces(str){
	return str.replace('\u00A0','&nbsp;');
}

//six task

console.log(getTextFromHtml());

function getTextFromHtml(){
	var body = document.body;
	var textContent = body.textContent || body.innerText;
	return textContent;
}

//seven task

console.log(parsesUrlAddress('http://www.tut.by/forum/index.php'));

function parsesUrlAddress(url){
	var result = {};
	var arr = url.split('://');
	console.log(arr);
	result['protocol'] = arr[0];
	arr2 = arr[1].split('/');
	result['server'] = arr2[0];
	var number = arr[1].indexOf('/');
	result['resource'] = arr[1].slice(number);
	return result;
}

