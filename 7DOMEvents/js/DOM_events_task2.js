'use strict';

document.body.style.margin = '10px';

var inputForAddingItem = document.createElement('input');
inputForAddingItem.setAttribute('type','text');
inputForAddingItem.style.fontSize = '20px';
inputForAddingItem.style.marginRight = '20px';
inputForAddingItem.style.padding = '5px';
inputForAddingItem.setAttribute('placeholder','enter new task');
document.body.appendChild(inputForAddingItem);

var items = document.createElement('div');
items.setAttribute('class', 'items');

var controls = document.createElement('div');
controls.setAttribute('class', 'controls');

var addButton = document.createElement('button');
addButton.innerText = 'Add';
controls.appendChild(addButton);

var removeButton = document.createElement('button');
removeButton.innerText = 'Remove';
controls.appendChild(removeButton);

var showButton = document.createElement('button');
showButton.innerText = 'Show';
controls.appendChild(showButton);

var hideButton = document.createElement('button');
hideButton.innerText = 'Hide';
controls.appendChild(hideButton);

controls.style.textAlign = 'center';
controls.style.fontSize = '16px';
controls.style.display = 'inline-block';

document.body.appendChild(controls);

var todo = document.createElement('h1');
todo.innerText = 'TODO list';
document.body.appendChild(todo);

var noItems = document.createElement('p');
noItems.innerText = 'You haven\'t any tasks';
document.body.appendChild(noItems);

var buttons = controls.querySelectorAll('button');
for (var i = 0; i < buttons.length ; i++){
	if (i == (buttons.length - 1)){
		buttons[i].style.margin = '20px 0';
	} else {
		buttons[i].style.margin = '20px 20px 20px 0';
	}
	buttons[i].style.padding = '5px';
}

var count = 1;

addButton.onclick = function () {
	var itemWrap = document.createElement('div');
	itemWrap.style.fontSize = '20px';
	var newItem = inputForAddingItem.cloneNode(true);
	newItem.setAttribute('type','checkbox');
	newItem.setAttribute('id', 'task' + count);
	var label = document.createElement('label');
	label.setAttribute('for','task' + count);
	label.innerText = inputForAddingItem.value;
	items.appendChild(itemWrap);
	itemWrap.appendChild(newItem);
	itemWrap.appendChild(label);
	count++;
	inputForAddingItem.value = '';
	noItems.style.display = 'none';
};

document.body.appendChild(items);

removeButton.onclick = function () {
	for (var i = 0; i < items.childNodes.length; i++){
		if (items.childNodes[i].querySelector('input:checked')){
			items.removeChild(items.childNodes[i]);
			i--;
		}
	}
	if (!items.length){
		noItems.style.display = 'block';
	}
};

hideButton.onclick = function () {
	for (var i = 0; i < items.childNodes.length; i++){
		if (items.childNodes[i].querySelector('input:checked')){
			items.childNodes[i].style.display = 'none';
		}
	}
};

showButton.onclick = function () {
	for (var i = 0; i < items.childNodes.length; i++){
		if (items.childNodes[i].style.display === 'none'){
			items.childNodes[i].style.display = 'block';
		}
	}
};


