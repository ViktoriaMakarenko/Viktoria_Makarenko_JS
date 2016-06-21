var a = parseInt ( prompt ( "Please, enter the number" )),
	b = parseInt ( prompt ( "Please, enter the number larger then the first" )),
	summ = 0,
	j = 0,
	odd = [];
if ( a < b ){
	for ( var i = a; i <= b; i++){
		summ += i;
		if ( i % 2 ){
			odd[j] = i;
			j++;
		}
	}
	document.write( "The summ of integers between " + a + " and " + b + " is " + summ + "."+ "</br>");
	document.write( "Odd integers between " + a + " and " + b + " are " + odd + "."+ "</br>");
} else {
	alert ( "Incorrect input data.");
}
