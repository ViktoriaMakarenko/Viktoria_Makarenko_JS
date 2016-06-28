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

Array.prototype.delSomeElement = function(x) {
	i = 0;
	while ( i  <= (this.length - 1)){
		if (this[i] === x){
			delete this[i];
		}
		i++;
	}
	return this;
};

var myArray = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];

console.log(myArray.delSomeElement(1));

//third task

var myObject = {firstName : "Olga", lastName: {beforeWedding : 'Petrova', afterWedding : 'Sidorova'}, age: 32};

function cloneObject(obj) {  
    var newObj = {};  
    for (var prop in obj) {  
        if (typeof obj[prop] == 'object') {  
          newObj[prop] = cloneObject(obj[prop]);  
        } else {
          newObj[prop] = obj[prop];
        }
    } 
    return newObj;  
}

var copy = cloneObject(myObject);
console.log(copy);

/*myObject['firstName'] = 'Helen';
myObject['lastName']['beforeWedding'] = 'Kozlova';
console.log(myObject);
console.log(copy);*/

//fourth task

var persons = [
     { firstName : "Gosho", lastName: "Petrov", age: 32 },
     { firstName : "Bay", lastName: "Ivan", age: 80 },
     { firstName : "Petia", lastName: "Ivanov", age: 18 },
	 { firstName : "Helen", lastName: "Kozlova", age: 35 },
	 { firstName : "Olga", lastName: "Petrova", age: 40 }
   ];
   
var min = persons[0]['age'],
	indexOfYoungerPerson = 0,
	youngerPersons = [],
	j = 0; 
function searchTheYoungestPerson(){
	for (i = 1; i <= (persons.length - 1); i++){
		if (persons[i]['age'] == min){
			youngerPersons[j] = cloneObject(persons[indexOfYoungerPerson]);
			j += 1;
			youngerPersons[j] = persons[i];
			j++;
		}
		if (persons[i]['age'] < min){
			min = persons[i]['age'];
			indexOfYoungerPerson = i; 
		}
	}
	if (youngerPersons.length > 0){
		result = 'The youngest persons are '; 
		for (i = 0; i <= (youngerPersons.length - 1); i++){
			for (var key in youngerPersons[i]){
				result += youngerPersons[i][key] + ' ';
			}
			result += '; ';
		}
		result.trim();
	} else {
		result = 'The youngest person is '; 
		for (var key in persons[indexOfYoungerPerson]){
				result += persons[indexOfYoungerPerson][key] + ' ';
			}
		persons[indexOfYoungerPerson] + '.';
	}
	return result;
	
}

console.log(searchTheYoungestPerson());

//fives task

var persons = [
    { firstName : "Gosho", lastName: "Ivanov", age: 32 },
    { firstName : "Petia", lastName: "Ivan", age: 80 },
    { firstName : "Petia", lastName: "Ivanov", age: 32 },
	{ firstName : "Helen", lastName: "Kozlova", age: 80 },
	{ firstName : "Olga", lastName: "Petrova", age: 40 }
   ];

function groupsByProperty(persons,prop){
	var resultObject = {};
	for (var i = 0; i < persons.length; i++){
		var groupName = persons[i][prop];
		if (!resultObject.hasOwnProperty(groupName)) {
			resultObject[groupName] = [];
		}
		resultObject[groupName].push(persons[i]);
	}
	return resultObject;
}

console.log(groupsByProperty(persons,'age'));

 



