var n = 15,
	arr = [],
	odd = [],
	arrLength = n,
	summ = 0,
	j = 0;
if (n) {
	for ( var i = 0; i <= n; i++){
		arr[i] = Math.round( Math.random() * 10 );
	}
	var min = arr[0],
		max = arr[0];
		
	for ( var i = 0; i <= arrLength; i++){
		if ( arr[i] % 2 ){
			odd[j] = arr[i];
			j++;
		}
		if ( arr[i] > max){
			max = arr[i];
		}
		if ( arr[i] < min){
			min = arr[i];
		}
		summ += arr[i];
	}
	var avg = summ / n;

	document.write(	"The maximum element of the array is " + max + "." + "</br>" +
					"The minimum element of the array is " + min + "." + "</br>" +
					"The sum of elements in the array is equal to "+ summ + "." + "</br>" +
					"The average of elements in the array is "+ avg + "." + "</br>" +
					"Odd elements in the array are "+ odd + "." + "</br>")
} else {
	document.write("Incorrect input data.");
}