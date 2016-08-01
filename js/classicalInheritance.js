'use strict';

function Person (firstname, lastname, age){
	if (this.nameValidate(firstname) && (this.nameValidate(lastname)) && (this.ageValidate(age))){
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = Number(age);
	};
}
  
Object.defineProperty(Person.prototype, 'fullname', {
			get: function() { return this.firstname + ' ' + this.lastname; },
			set: function(newValue) {
				let fullnameArr = newValue.split(' ');
				if (fullnameArr.length === 2 && this.nameValidate(fullnameArr[0]) && this.nameValidate(fullnameArr[1])){
					this.firstname = newValue.split(' ')[0];
					this.lastname = newValue.split(' ')[1];
				} else {
					throw new Error('Incorrect data: ' + newValue + '. Fullname must be in format "Firstname Lastname".');
				}
				
			}
		});
		
Person.prototype.introduce = function(){
	return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
}

Person.prototype.nameValidate = function(name) {
	if ((typeof name !== 'string') || !(/^[A-Za-z]{3,20}$/.test(name))){
		throw new Error('Incorrect data: ' + name + '. firstname and lastname must contain from 3 to 20 Latin letters.');
		return false;
	}
	return true;
}

Person.prototype.ageValidate = function(age) {
	if (isNaN(Number(age))){
		throw new Error('Incorrect data: ' + '\'' + age + '\'' + '. Age must be a number.');
		return false;
	}
	return true;
}