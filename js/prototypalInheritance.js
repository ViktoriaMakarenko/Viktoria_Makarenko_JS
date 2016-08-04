'use strict'

let domElement = {};

domElement.parent = this;

domElement.init = function (type){
	this.type = type;
	this.type_ = this.type;
	this.attributes_ = [];
	this.children = [];
	this.content_ = '';
	return this;
}

Object.defineProperty(domElement, 'type', {
	get: function() { return this.type_; },
	set: function(newValue) {
		if (typeof newValue === 'string' && /^[A-Za-z0-9]{1,}$/.test(newValue)){
			this.type_ = newValue;
		} else {
			throw new Error('Incorrect data: ' + newValue + '. It must be non-empty string that contains only Latin letters and digits.');
		}
	}
});

Object.defineProperty(domElement, 'content', {
	get: function() { return this.content_; },
	set: function(newValue) {
		if (typeof newValue === 'string' && this.children.length === 0){
			this.content_ = newValue;
		} else {
			throw new Error('Incorrect data: ' + newValue + '. Element mustn\'t have any children, content must be a string.');
		}
	}
});

Object.defineProperty(domElement, 'innerHTML', {
	get: function() { 
		if (this.children.length > 0){
			for (var i = 0; i < this.children.length; i++){
				this.content_ += this.children[i].innerHTML;
			}
		}
		this.innerHTML_ = '<' + this.type;
		if (this.attributes.length > 0){
			function compareAttrName(attr1, attr2) {
			  return attr1.attrName > attr2.attrName;
			}
			this.attributes.sort(compareAttrName);
			for (var i = 0; i < this.attributes.length; i++){
				this.innerHTML_ += ' ' + this.attributes[i].attrName + '=' + '\"' + this.attributes[i].attrValue + '\"';
			}
		}
		this.innerHTML_ +=  '>' + this.content_ + '</' + this.type + '>'; 
		return this.innerHTML_;
	},
	set: function(newValue){
		this.innerHTML_ = newValue;
	}
});

Object.defineProperty(domElement, 'attributes', {
	get: function() { return this.attributes_; },
	set: function(newValue) {
		for (var i = 0; i < newValue.length; i++){
			if (!newValue[i].attrName || !newValue[i].attrValue){
				if (typeof newValue[i].attrName !== 'string' || /^[-A-Za-z0-9]+$/.test(newValue[i].attrName)){
					throw new Error('Incorrect attribute name. It must be non-empty string that contains only Latin letters and digits or dashes "-".');
				} else {
					throw new Error('Incorrect attribute. It must has name (property attrName) and value (property attrValue).');
				}
			} else {
				this.attributes_ = newValue;
			}
		}
	}
});

domElement.addAttribute = function (name,value){
	var help = this.attributes;
	help.push({attrName :name, attrValue : value});
	this.attributes = help;
	return this;
}

domElement.removeAttribute = function (attribute){
	if (this.attributes.indexOf(attribute) === 0 || this.attributes.indexOf(attribute)){
		this.attributes.splice(this.attributes.indexOf(attribute));
	} else {
		throw new Error('Deleted element doesn\'t exist.');
	}
	return this;
}

domElement.appendChild = function (someElement){
	try {
		if (someElement.type){
			this.children.push(someElement);
		}
		if (typeof someElement === 'string'){
			someElement = Object.create(domElement).init(someElement);
			this.children.push(someElement);
		}
		someElement.parent = this;
		return this;
	} catch (err){
		throw new Error('Incorrect data: ' + someElement + '. It must be non-empty string that contains only Latin letters and digits.');
	}
}

var meta = Object.create(domElement).init('meta').addAttribute('charset', 'utf-8');
var head = Object.create(domElement).init('head').appendChild(meta);
var div = Object.create(domElement).init('div').addAttribute('style', 'font-size: 42px');
div.content = 'Hello, world!';
var body = Object.create(domElement).init('body').appendChild(div).addAttribute('id', 'myid').addAttribute('bgcolor', '#012345');
var root = Object.create(domElement).init('html').appendChild(head).appendChild(body);
console.log(root.innerHTML);