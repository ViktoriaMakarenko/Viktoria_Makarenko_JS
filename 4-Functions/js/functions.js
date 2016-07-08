//first task

console.log(conc(1,1));

function testsOfconc(){
	console.log(conc(1,1));//11
	console.log(conc('1','1'));//11
	console.log(conc());//Function shoud have at least one input argument
}

//testsOfconc();

function conc(){
	if (arguments.length > 0){
		var result = '';
		for(var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
	} else {
		console.log('Function shoud have at least one input argument');
		return null;
	}
	
}

//second task

//console.log(comp(1,1));//on this step function comp is not defined yet

var comp = function (){
	if (arguments.length === 2){
		if (arguments[0] === arguments[1]){
			return 1;
		} else {
			return -1;
		}
	} else {
		console.log('Function must have two input arguments');
		return null;
	}
	
}

function testsOfcomp(){
	console.log(comp(1,1));//1
	console.log(comp('abc','abc'));//1
	console.log(comp('abC','abc'));//-1
	console.log(comp(1,'1'));//-1
	console.log(comp());//Function must have two input arguments'
	console.log(comp(1,2,3));//Function must have two input arguments'
}

//testsOfcomp();

//third task

document.write('<button id=\'showMessage\'>Log message to console!</button>');

document.getElementById('showMessage').onclick = function() {
    console.log('message in console');
}
	
//fourth task

var functionFibo = function fibo(n){
	if (n > 0){
		if (n === 1){
			return [1];
		}
		if (n === 2){
			return [1,1];
		}
		return  fibo(n-1).concat(fibo(n-1)[n-3]+fibo(n-1)[n-2]);
	} else {
		console.log("incorrect input data");
		return null;
	}
}

var n = prompt('Please, enter the count of Fibonacci numbers, that you would like to calculate');

console.log(functionFibo(n));

//fives task

console.log((function conc(){
	if (arguments.length > 0){
		var result = '';
		for(var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
		return result;
	} else {
		console.log('Function shoud have at least one input argument');
		return null;
	}
})(4,7));
