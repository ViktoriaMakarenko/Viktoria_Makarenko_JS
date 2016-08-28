/**
 * Created by Makarenko on 26.08.2016.
 */
'use strict';
document.body.style.margin = '10px';

var inputForAddingItem = document.createElement('input');
inputForAddingItem.setAttribute('type','text');
inputForAddingItem.style.fontSize = '20px';
inputForAddingItem.style.marginRight = '20px';
inputForAddingItem.style.padding = '5px';
inputForAddingItem.setAttribute('placeholder','enter new task');
document.body.appendChild(inputForAddingItem);

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

var buttons = controls.querySelectorAll('button');
for (var i = 0; i < buttons.length ; i++){
    if (i == (buttons.length - 1)){
        buttons[i].style.margin = '20px 0';
    } else {
        buttons[i].style.margin = '20px 20px 20px 0';
    };
    buttons[i].style.padding = '5px';
};

var tabsWrap = document.createElement('div');
tabsWrap.style.fontSize = '0';
tabsWrap.setAttribute('class', 'tabWrap');

for (var i = 0; i < 4; i++){
    var tabs = document.createElement('div');
    tabs.style.display = 'inline-block';
    tabs.style.verticalAlign = 'top';
    tabs.style.width = '25%';
    tabs.style.border = '1px solid #f1f6f7';
    tabs.style.boxSizing = 'border-box';
    tabs.setAttribute('class', 'tab' + (i + 1));

    var items = document.createElement('div');
    items.setAttribute('class', 'items');
    items.style.fontSize = '16px';
    items.style.minHeight = '23px';

    var tabsName = document.createElement('input');
    tabsName.setAttribute('type','checkbox');
    tabsName.setAttribute('id', 'tab' + (i + 1));
    var labelTab = document.createElement('label');
    labelTab.setAttribute('for','tab' + (i + 1));
    labelTab.innerText = 'Tab ' + (i + 1);

    var itemsWrap = document.createElement('div');

    var noItems = document.createElement('p');
    noItems.innerText = 'No tasks';

    items.appendChild(tabsName);
    items.appendChild(labelTab);
    itemsWrap.appendChild(noItems);
    items.appendChild(itemsWrap);
    tabs.appendChild(items);
    tabsWrap.appendChild(tabs);
};
document.body.appendChild(tabsWrap);

addButton.onclick = function () {
    if (inputForAddingItem.value){
        var activeTabs = tabsWrap.querySelectorAll('.tabWrap .items input:checked ~ div');
        for (var i = 0; i < activeTabs.length; i++){
            var activeTab = activeTabs[i];
            var itemWrap = document.createElement('div');
            itemWrap.style.fontSize = '20px';
            itemWrap.style.display = 'block';
            var newItem = inputForAddingItem.cloneNode(true);
            newItem.setAttribute('type','checkbox');
            newItem.setAttribute('class', 'task' + i + 1);
            newItem.setAttribute('name', 'task' + i + 1);
            var label = document.createElement('label');
            label.setAttribute('for','task' + i + 1);
            label.innerText = inputForAddingItem.value;
            activeTab.appendChild(itemWrap);
            itemWrap.appendChild(newItem);
            itemWrap.appendChild(label);
            var emptyTab = activeTabs[i].querySelector('p');
            emptyTab.style.display = 'none';
        };
        inputForAddingItem.value = '';
    };
};

removeButton.onclick = function () {
    var activeTabs = tabsWrap.querySelectorAll('.tabWrap .items input:checked ~ div');
    for (var i = 0; i < activeTabs.length; i++) {
        var activeTab = activeTabs[i];
        for (var j = 0; j < activeTab.childNodes.length; j++) {
            if (activeTab.childNodes[j].querySelector('input:checked') && (activeTab.childNodes[j].style.display == 'block')) {
                activeTab.removeChild(activeTab.childNodes[j]);
                j--;
            };
        };
        if (activeTab.childNodes.length < 2){
            var emptyTab = activeTabs[i].querySelector('p');
            emptyTab.style.display = 'block';
        };
    };

};

hideButton.onclick = function () {
    var activeTabs = tabsWrap.querySelectorAll('.tabWrap .items input:checked ~ div');
    for (var i = 0; i < activeTabs.length; i++) {
        var activeTab = activeTabs[i];
        for (var j = 0; j < activeTab.childNodes.length; j++){
            if (activeTab.childNodes[j].querySelector('input:checked')){
                activeTab.childNodes[j].style.display = 'none';
            };
        };
    };
};

showButton.onclick = function () {
    var activeTabs = tabsWrap.querySelectorAll('.tabWrap .items input:checked ~ div');
    for (var i = 0; i < activeTabs.length; i++) {
        var activeTab = activeTabs[i];
        for (var j = 0; j < activeTab.childNodes.length; j++){
            if (activeTab.childNodes[j].nodeName == 'DIV' && activeTab.childNodes[j].style.display === 'none'){
                activeTab.childNodes[j].style.display = 'block';
            };
        };
    };
};
//requests



function getInfo(i) {
	var delay = i * 1000;
	var request = new XMLHttpRequest();
	request.open('GET', 'data/data' + i + '.json');
	request.send();
	request.onloadend = setTimeout(function() {
		var tasksFromJson = JSON.parse(request.responseText);
		var activeTab = tabsWrap.querySelector('.tabWrap .tab' + i);
		for (var j = 0; j < tasksFromJson.length; j++){
			var itemWrap = document.createElement('div');
			itemWrap.style.fontSize = '20px';
			itemWrap.style.display = 'block';
			var newItem = document.createElement('input');
			newItem.setAttribute('type','checkbox');
			newItem.setAttribute('class', 'taskFromJson' + i + '-' + (j + 1));
			newItem.setAttribute('name', 'taskFromJson' + i + '-' + (j + 1));
			var label = document.createElement('label');
			label.setAttribute('for','taskFromJson' + i + '-' + (j + 1));
			label.innerText = tasksFromJson[j].time + ' ' + tasksFromJson[j].task;
			var wrapper = activeTab.querySelector('.items>div');
			wrapper.appendChild(itemWrap);
			itemWrap.appendChild(newItem);
			itemWrap.appendChild(label);
			var emptyTab = activeTab.querySelector('.items div>p');
			emptyTab.style.display = 'none';
		};
		if (i <= 3){
			i++;
			getInfo(i);
		};
	}, delay);
};

getInfo(1);
