var warehousesNumber = parseInt ( prompt ( "Please enter the number of warehouses" ));
if ( warehousesNumber ){
	var variants = 1,
		i = warehousesNumber;
	do {
		variants *= i;
		i--;
	} while ( i != 0);
	document.write( "There are " + variants + " variants of delivery from " + warehousesNumber +" warehouses."+ "</br>");
} else {
	alert ( "Incorrect input data.");
}
