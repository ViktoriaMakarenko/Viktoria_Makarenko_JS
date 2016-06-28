//first task

function Point(x, y) {
	this.x = x;
	this.y = y;
};

function Line(point1, point2) {
	this.point1 = point1;
	this.point2 = point2;
};

Line.prototype.getLength = function() {
	return Math.sqrt(Math.pow((this.point1.x - this.point2.x), 2) + Math.pow((this.point1.y - this.point2.y), 2)); 
};

var point1 = new Point(3, 7),
	point2 = new Point(6, 1),
	line1 = new Line(point1, point2),
	length1 = line1.getLength();
	
var	point3 = new Point(7, 10),
	point4 = new Point(5, 17),
	line2 = new Line(point3, point4),
	length2 = line2.getLength();
	
var	point5 = new Point(8, 1),
	point6 = new Point(4, 3),
	line3 = new Line(point5, point6),
	length3 = line3.getLength();
	
console.log('There are three lines. Their length equal to ' + length1 + ', ' + length2 + ' and ' + length3 + '.')
	
if (((length1 + length2) > length3) && ((length1 + length3) > length2) && ((length2 + length3) > length1)){
	console.log('Lines can form a triangle.');
} else {
	console.log('Lines can\'t form a triangle.');
}

//second task
function Arr(arr) {
	this.arr = arr;
};

Arr.prototype.delSomeElement = function() {
	i = 0;
	x = 1;
	while ( i  <= (this.arr.length - 1)){
		if (this.arr[i] === x){
			delete this.arr[i];
		}
		i++;
	}
	return this.arr;
};

var myArray = new Arr([1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"]);

console.log(myArray.delSomeElement());

//third task

var myObject = {firstName : "Olga", lastName: {beforeWedding : 'Petrova', afterWedding : 'Sidorova'}, age: 32};

var copy = myObject;
console.log(copy);

	
	

