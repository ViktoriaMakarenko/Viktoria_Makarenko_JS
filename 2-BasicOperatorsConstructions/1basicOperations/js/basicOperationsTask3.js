var r = parseFloat ( prompt ( "Please, enter the radius of the cylinder" )),
	h = parseFloat ( prompt ( "Please, enter the height of the cylinder" ));
if ( r > 0 && h > 0){
	var v = Math.PI * Math.pow( r , 2 ) * h ,
		s = 2 * Math.PI * r * ( r + h );
	document.write( "Cylinder volume is equal to " + v + "<br/>" );
	document.write( "Cylinder area is equal to " + s + "<br/>" );
} else {
	document.write( "Incorrect input data" + "<br/>" );
}