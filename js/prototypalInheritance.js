'use strict'
let domElement = function (){};

domElement.init = function (type){
	this.type = type;
	this.type_ = this.type;
	return this;
}

Object.defineProperty(domElement, 'type', {
	get: function() { return this.type_; },
	set: function(newValue) {
		if (typeof newValue === 'string' && /^[A-Za-z0-9]{1,}$/.test(newValue)){
			this.type_ = newValue;
		} else {
			throw new Error('Incorrect data: ' + newValue + '.It must be non-empty string that contains only Latin letters and digits.');
		}
	}
});
