//first task about arrays

var myArray = [],
	helpArray = [],
	resultArray = [],
	n = 20,
	i,
	j;
	
for (i = 0; i <= (n -1); i++){
	myArray[i] = i * 5;
}

console.log(myArray);

//second task about arrays

function testComparingOfCharArrays(){
	console.log(comparingOfCharArrays(['a','s','d','f'],['a','s','d','f']));//a,s,d,f = a,s,d,f
	console.log(comparingOfCharArrays(['a','s','d','f','a','d','d'],['b','d','d','f','f']));//b,d,d,f,f > a,s,d,f,a,d,d
	console.log(comparingOfCharArrays(['a','d','d','f','f'],['a','s','d','f','a','d','d']));//a,d,d,f,f < a,s,d,f,a,d,d
	console.log(comparingOfCharArrays(['b','d',5,'f','f'],['a','f','d','f','a','d','d']));//5 is not a char.
	console.log(comparingOfCharArrays(['b','a'],['a',false,'d','f']));// false is not a char.
	console.log(comparingOfCharArrays(['',''],['a','s','d','f']));// Elements mustn't be empty.
	console.log(comparingOfCharArrays([],['a','s','d','f']));//One of arrays is empty.
	console.log(comparingOfCharArrays([],[]));//One of arrays is empty.
	console.log(comparingOfCharArrays('asfd',[]));//Input data should be 2 arrays.element.
	console.log(comparingOfCharArrays('asfd','asfd'));//Input data should be 2 arrays.
	console.log(comparingOfCharArrays());//Input data should be 2 arrays.
	console.log(comparingOfCharArrays('',[]));//Input data should be 2 arrays.
};

//testComparingOfCharArrays();

console.log(comparingOfCharArrays(['a','s','d','f','a','d','d'],['b','d','d','f','f']));

function comparingOfCharArrays(arr1, arr2){
	if (!arr1 || !arr2 || (typeof arr1 !== 'object') || (typeof arr2 !== 'object')) {
        console.log("Input data should be 2 arrays.");
        return null;
    }
	
	if ((areArraysElementsChars(arr1) !== 0) && (areArraysElementsChars(arr2) !== 0)){
		if (arr1.length == arr2.length){
			if (!compareLetterByLetter(arr1,arr2)){
				return arr1 + " = " + arr2;
			} else {
				return compareLetterByLetter(arr1,arr2);
			}
		}
		if (arr1.length < arr2.length){
			if (!compareLetterByLetter(arr1,arr2)){
				return arr1 + " < " + arr2;
			} else {
				return compareLetterByLetter(arr1,arr2);
			}
		}
		if (arr1.length > arr2.length){
			if (!compareLetterByLetter(arr2,arr1)){
				return arr1 + " > " + arr2;
			} else {
				return compareLetterByLetter(arr2,arr1);
			}
		}
	} 
}

function compareLetterByLetter(lessArr,largerArr){
	for (i = 0; i <= (lessArr.length - 1); i++){
		if (lessArr[i] < largerArr[i]){
			return lessArr + " < " + largerArr;
			break;
		}
		if (lessArr[i] > largerArr[i]){
			return lessArr + " > " + largerArr;
			break;
		} 
	}
}

function areArraysElementsChars(arr){
	if (arr.length > 0){
		for (i = 0; i <= (arr.length - 1); i++){
			if (typeof arr[i] !== 'string'){
				console.log(arr[i] + ' is not a char.');
				return 0;
				break;
			} 
			if (!arr[i]){
				console.log('Elements mustn\'t be empty.');
				return 0;
				break;
			}
		}
	} else {
		console.log('One of arrays is empty.');
		return 0;
	}
}

//third task about arrays

function testsfindMaximalSequenceOfEqualElements (){
	console.log(findMaximalSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2,  2, 1]));//Length of sequences 1,1;3,3;2,2 is  equal.
	console.log(findMaximalSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2,  2, 2, 1]));//2,2,2
	console.log(findMaximalSequenceOfEqualElements([]));//The array is empty.
	console.log(findMaximalSequenceOfEqualElements([5]));//The array must have more than 1 element.
	console.log(findMaximalSequenceOfEqualElements());//No input data
	console.log(findMaximalSequenceOfEqualElements('fr'));//Input data should be array.
}

//testsfindMaximalSequenceOfEqualElements();

console.log(findMaximalSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2,  2, 2, 1]));

function findMaximalSequenceOfEqualElements(arr){
	if (!arr){
		console.log('No input data');
		return null;
	}
	if (typeof arr != 'object'){
		console.log('Input data should be array.');
		return null;
	}
	if (arr.length == 0){
		console.log('The array is empty.');
		return null;
	}
	if (arr.length == 1){
		console.log('The array must have more than 1 element.');
		return null;
	}
	j = 0;
	for (i = 1; i <= (arr.length - 1); i++){
		if (arr[i] === arr[i-1]){
			var firstOccurance = i - 1;
			if (i == (arr.length - 1)){
				var lastOccurance = i;
			}
			while (arr[i+1] === arr[i]){
				i++;
			}
			lastOccurance = i + 1;
		helpArray[j] = arr.slice(firstOccurance,lastOccurance);
		j++;
		}
	}
	for (k = 1; k <= (helpArray.length - 1); k++){
		if (helpArray[k].length >= helpArray[k - 1].length){
			resultArray = helpArray[k];
		}
		if (helpArray[k].length < helpArray[k - 1].length){
			resultArray = helpArray[k - 1];
		}
		if (helpArray[k].length == helpArray[k - 1].length){
			resultArray = "Length of sequences " + helpArray.join(';') + ' is  equal.';
		}
	}
	return resultArray;
}

//fourth task about arrays

function testsfindMaximalIncreasingSequence(){
	console.log(findMaximalIncreasingSequence([3, 2, 3, 4, 2, 2, 4]));//[2, 3, 4]
	console.log(findMaximalIncreasingSequence([15, 2, 3, 4, 2, 2, 4]));//[2, 3, 4, 15]
	console.log(findMaximalIncreasingSequence([3, 15, 3, 4, 20, 20, 4]));//[3, 4, 15, 20]
	console.log(findMaximalIncreasingSequence([10]));//[10]
	console.log(findMaximalIncreasingSequence([]));//The array is empty.
	console.log(findMaximalIncreasingSequence());//No input data
	console.log(findMaximalIncreasingSequence('fr'));//Input data should be array.
};

//testsfindMaximalIncreasingSequence();

console.log(findMaximalIncreasingSequence([3, 2, 3, 4, 2, 2, 4]));

function findMaximalIncreasingSequence(arr){
	if (!arr){
		console.log('No input data');
		return null;
	}
	if (typeof arr != 'object'){
		console.log('Input data should be array.');
		return null;
	}
	if (arr.length == 0){
		console.log('The array is empty.');
		return null;
	}
	if (arr.length == 1){
		return arr;
	}
	j = 0;
	helpArray = arr;
	for (i = 0; i <= (helpArray.length - 1); i++){
		for (j = i + 1; j <= (helpArray.length - 1); j++){
			if (arr[i] === arr[j]){
				helpArray.splice(j,1);
				j--;
			}
		}
	}
	for (i = 0; i <= (helpArray.length - 1); i++){
		var min = helpArray[i];
		var minIndex = i;
		for (j = i +1; j <= (helpArray.length - 1); j++){
			if (helpArray[j] < min){
				min = helpArray[j];
				minIndex = j;
			}
		}
		var x = helpArray[i];
		helpArray[i] = min;
		helpArray[minIndex] = x;
	}
	return helpArray;
}
