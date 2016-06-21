var firstNumber = parseInt ( prompt ( "Please enter first number" )),
	secondNumber = parseInt ( prompt ( "Please enter second number" )),
	thirdNumber = parseInt ( prompt ( "Please enter third number" ));
if ( ( firstNumber || firstNumber === 0 )&& ( secondNumber ||  secondNumber === 0 ) && thirdNumber ||  thirdNumber === 0 ){
	var avg = ( firstNumber + secondNumber + thirdNumber ) / 3 ;
	document.write( "Average of " + firstNumber + ", "  + secondNumber + " and "+ thirdNumber + " is " + avg + "." + "<br/>" );
} else {
	document.write( "Incorrect input data" + "<br/>" );
}