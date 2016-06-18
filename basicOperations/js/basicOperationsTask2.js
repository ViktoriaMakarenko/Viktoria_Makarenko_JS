var getFirstNumber = prompt ( "Please enter first number" ),//first number is entered
	getSecondNumber = prompt ( "Please enter second number" ),//second number is entered
	getThirdNumber = prompt ( "Please enter third number" ),//third number is entered
	//calculate average
	avg = ( parseInt(getFirstNumber) + parseInt(getSecondNumber) + parseInt(getThirdNumber) ) / 3 ;
	
document.write( "Average of your numbers is " + avg );