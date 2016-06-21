var i = 20,
	j = 20;
	
//прямоугольник
for (var y = 1; y <= j; y++ ){
	if ( y == 1 || y == j) {
		for (var x = 1; x <= i; x++ ){
			document.write("*");
		}
		document.write("</br>");
	} else {
		document.write("*");
		for (x = 2; x < i; x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	}
}

document.write("</br>");

//прямоугольный треугольник
var p = 1;
for (var y = 1; y <= j; y++ ){
	if ( y == 1 ) {
			document.write("*");
			document.write("</br>");
	} else {
		if ( y == j ) {
			for ( x = 1; x <= i; x++ ){
				document.write("*");
			}
			document.write("</br>");
		} else {
			document.write("*");
			for ( var x = 1; x <= ( p - 2 ); x ++ ){
				document.write("&nbsp");
			}
			document.write("*");
			document.write("</br>");
		}
		
	}
	p += ( i / j );
}

document.write("</br>");

//равносторонний треугольник
for (var y = 1; y <= Math.round( j / 2 ); y++ ){
	if ( y == 1 ) {
		document.write("*");
		document.write("</br>");
	} else {
		document.write("*");
		for ( x = 1; x <= ( y * 2 - 3 ); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	}
}
for (var y = ( Math.round( j / 2 ) - 1 ); y >= 1; y-- ){
	if ( y == 1 ) {
		document.write("*");
		document.write("</br>");
	} else {
		document.write("*");
		for ( x = 1; x <= ( y * 2 - 3 ); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	}
}

document.write("</br>");

//ромб
var halfOfHeight = Math.floor( j / 2 );

var p = i;
for (var y = 1; y <= halfOfHeight ; y++ ){
	if ( y == 1 ) {
		for ( x = 1; x <= Math.floor( i / 2 ) - 1; x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	} else {
		for ( x = 1; x <= Math.floor( p / 2 ); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		for ( x = 1; x <= ( i - p - 2 ); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	}
	p -= ( 2 * i / ( 2 * halfOfHeight - 1 ) );
}
var w = p + 2 * ( 2 * i / ( 2 * halfOfHeight - 1 ) );
for (var y = ( j - halfOfHeight - 1 ); y >= 1; y-- ){
	if ( y == 1 ) {
		for ( x = 1; x <= Math.floor( i / 2 ) - 1; x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	} else {
		for ( x = 1; x <= ( Math.floor( w / 2 )  ); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		for ( x = 1; x <= (  i - w - 2); x++ ){
			document.write("&nbsp");
		}
		document.write("*");
		document.write("</br>");
	}
	w += ( 2 * i / ( 2 * halfOfHeight - 1 ) );
}

document.write("</br>");