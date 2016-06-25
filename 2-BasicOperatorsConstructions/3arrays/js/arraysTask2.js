var n = 5,
	arr = [],
	summ = 0;
if ( n ) {
	for ( var i = 0; i <= n - 1; i++){
		arr[i] = [];
		for ( var j = 0; j <= n - 1; j++){
			if ( i < ( n / 2 ) ){
				arr[i][j] = Math.round( Math.random() * 10 );
			} else {
				arr[i][j] = Math.round( Math.random() * (-10) );
			}
		}
	}
	for ( var i = 0; i <= n - 1; i++){
		if ( arr[i][i] < 0 ){
			arr[i][i] = 0;
		}
		if ( arr[i][i] > 0 ){
			arr[i][i] = 1;
		}
	}
	for ( var i = 0; i <= n - 1; i++){
		for ( var j = 0; j <= n - 1; j++){
			document.write(arr[i][j] + " , ");
		}
		document.write("</br>");
	}
} else {
	document.write("Incorrect input data.");
}