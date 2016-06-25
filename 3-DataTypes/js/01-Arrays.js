//first task about arrays

var myArray = [],
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
	console.log(comparingOfCharArrays('asfd',[]));//Input data shoul be 2 arrays.element.
	console.log(comparingOfCharArrays('asfd','asfd'));//Input data shoul be 2 arrays.
	console.log(comparingOfCharArrays());//Input data shoul be 2 arrays.
	console.log(comparingOfCharArrays('',[]));//Input data shoul be 2 arrays.
};

testComparingOfCharArrays();

function comparingOfCharArrays(arr1, arr2){
	if (!arr1 || !arr2 || (typeof arr1 !== 'object') || (typeof arr2 !== 'object')) {
        console.log("Input data shoul be 2 arrays.");
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
