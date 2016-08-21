'use strict';

/*task 2.1
Write a script that creates a number of "div" elements. Each "div" element must have the following
    * Random "width" and "height" between "20px" and "100px"
    * Random "background-color"
    * Random "color"
    * Random "position" on the screen
    * A "strong" element with text "div" inside the "div"
    * Random "border-radius"
    * Random "border-color"
    * Random "border-width" between "1px" and "20px"*/
	
function createDivs(){
	var count = prompt('How many elements do you want to see?');
	for (var i = 0; i < count; i++){
		var div = document.createElement('div');
		var strong = document.createElement('strong');
		strong.innerText = 'div';
		div.appendChild(strong);
		var width = createDivs.randomSize();
		div.style.width = width;
		var height = createDivs.randomSize();
		div.style.height = height;
		div.style.backgroundColor = createDivs.randomColor();
		div.style.color = createDivs.randomColor();
		div.style.borderRadius = createDivs.randomProcent();
		var borderColor = createDivs.randomColor();
		var borderWidth = createDivs.randomBorderWidth();
		div.style.border =  borderWidth + ' solid ' + borderColor;
		div.style.textAlign = 'center';
		div.style.position = 'absolute';
		var widthProcent = (parseInt(width) + parseInt(borderWidth))/screen.width*100;
		div.style.left = Math.round(Math.random() * (100 - widthProcent)) + '%';
		var heightProcent = parseInt(height)/screen.height*100;
		div.style.top = Math.round(Math.random() * (100 - heightProcent)) + '%';
		document.body.appendChild(div);
	}
}

createDivs.randomSize = function (){
	return Math.round(Math.random() * 80 + 20) + 'px';
}

createDivs.randomColor = function () {
	return '#' + Math.round(Math.random() * 255).toString(16) + Math.round(Math.random() * 255).toString(16) + Math.round(Math.random() * 255).toString(16);
}

createDivs.randomProcent = function (){
	return Math.round(Math.random() * 100) + '%';
}

createDivs.randomBorderWidth = function (){
	return Math.round(Math.random() * 19 + 1) + 'px';
}
console.log('To see the result of task 2.1, uncomment line 57.');
//createDivs();

/*task 2.2
Write a script that creates 5 "div" elements and moves them in circular path with interval of 100 milliseconds*/

function circularMotion (){
	createDivsForCircularMotion();
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++){
		move(divs[i], i, 0);
	};
}

function createDivsForCircularMotion(){
	var centerWidth = document.body.clientWidth * 0.5;
	var centerHeight = screen.height * 0.5 - 50;
	var radius = 300;
	for (var i = 0; i < 5; i++){
		var div = document.createElement('div');
		div.style.background = createDivs.randomColor();
		div.style.width = '30px';
		div.style.height = '30px';
		div.style.position = 'absolute';
		var angle = 2*Math.PI/5*i;
		var left = centerWidth + (radius * Math.cos(angle)) - 30;
		div.style.left = left + 'px';
		var top = centerHeight + (radius * Math.sin(angle)) - 30;
		div.style.top = top + 'px';
		document.body.appendChild(div);
	}
}

function move (div, i, t) {
	var start = 2*Math.PI/5*i;
	t += 0.5;
	var centerWidth = document.body.clientWidth * 0.5;
	var centerHeight = screen.height * 0.5 - 50;
	var radius = 300;
		var left = centerWidth + (radius * Math.cos(t + start)) - 30;
		div.style.left = left + 'px';
		var top = centerHeight + (radius * Math.sin(t + start)) - 30;
		div.style.top = top + 'px';
	setTimeout(function () {
        move(div, i, t);
    }, 100);
}

console.log('To see the result of task 2.2, uncomment line 105.');
//circularMotion();

/*task 2.3
Create a "textarea" and two "input"s with "type="color""
    * Make the font "color" of the text area as the value of the first color "input"
    * Make the "background-color" of the "textarea" as the value of the second "input"*/
	
function textareaStyles(){
	var textarea = document.createElement('textarea');
	var inputColor1 = document.createElement('input');
	inputColor1.setAttribute('type','color');
	inputColor1.value = createDivs.randomColor();
	var inputColor2 = document.createElement('input');
	inputColor2.setAttribute('type','color');
	inputColor2.value = createDivs.randomColor();
	document.body.appendChild(textarea);
	document.body.appendChild(inputColor1);
	document.body.appendChild(inputColor2);
	textarea.style.color = inputColor1.value;
	textarea.style.backgroundColor = inputColor2.value;
	inputColor2.oninput = function(){
		textarea.style.backgroundColor = inputColor2.value;
	}
	inputColor1.oninput = function(){
		textarea.style.color = inputColor1.value;
	}
}

document.write('Task 2.3');
textareaStyles();

/*task 2.4
Create a tag cloud:
    * Visualize a string of tags (strings) in a given container
    * By given "minFontSize" and "maxFontSize", generate the tags with different "font-size", depending on the number of occurrences*/
	
function tagCloud(tags, minFontSize, maxFontSize){
	var tagsArray = tags;
	var resultArray = [];
	for (var i = 0; i < tagsArray.length; i++){
		var count = 1;
		tagsArray[i] = tagsArray[i].toLowerCase();
		for (var j = i+1; j < tagsArray.length; j++){
			tagsArray[j] = tagsArray[j].toLowerCase();
			if (tagsArray[j] === tagsArray[i]){
				count++;
				tagsArray.splice(j,1);
				j--;
			}
		}
		resultArray.push({tag : tagsArray[i], count : count});
	}
	var min = resultArray[0].count;
	var max = resultArray[0].count;
	for (var i = 1; i < resultArray.length; i++){
		if (resultArray[i].count < min){
			min = resultArray[i].count;
		}
		if (resultArray[i].count > max){
			max = resultArray[i].count;
		}
	}
	var div = document.createElement('div');
	div.style.width = '300px';
	div.style.padding = '10px';
	div.style.border = '5px solid black';
	document.body.appendChild(div);
	for (var i = 0; i < resultArray.length; i++){
		var element = document.createElement('div');
		element.style.display = 'inline-block';
		element.innerText = resultArray[i].tag;
		element.style.fontSize = minFontSize + resultArray[i].count/max *(maxFontSize - minFontSize) + 'px';
		element.style.marginRight = '10px';
		element.style.color = createDivs.randomColor();
		div.appendChild(element);
	}
}
var tags = [
           "cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http",
           "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript",
           "http", "http", "CMS"
        ];
		
document.write('</br>Task 2.4');
tagCloud(tags, 40, 20);

/*task 2.5
Create a TreeView component
    * Initially only the top items must be visible
    * On item click
        * If its children are hidden (collapsed), they must be made visible (expanded)
        * If its children are visible (expanded), they must be made hidden (collapsed)
    * Research about events*/
	
function treeView(){
	var ul = document.createElement('ul');
	var li1 = document.createElement('li');
	li1.innerText = 'Item 1 sub';
	var li2 = document.createElement('li');
	li2.innerText = 'Item 2';
	var li3 = document.createElement('li');
	li3.innerText = 'Item 3 sub';
	var li4 = document.createElement('li');
	li4.innerText = 'Item 4';
	var li5 = document.createElement('li');
	li5.innerText = 'Item 5';
	var li1_ul = document.createElement('ul');
	var li1_1 = document.createElement('li');
	li1_1.innerText = 'Sub-1 Item 1';
	var li1_2 = document.createElement('li');
	li1_2.innerText = 'Sub-1 Item 2';
	var li3_ul = document.createElement('ul');
	var li3_1 = document.createElement('li');
	li3_1.innerText = 'Sub-3 Item 1';
	var li3_2 = document.createElement('li');
	li3_2.innerText = 'Sub-3 Item 2';
	document.body.appendChild(ul);
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	ul.appendChild(li4);
	ul.appendChild(li5);
	li1.appendChild(li1_ul);
	li1_ul.appendChild(li1_1);
	li1_ul.appendChild(li1_2);
	li3.appendChild(li3_ul);
	li3_ul.appendChild(li3_1);
	li3_ul.appendChild(li3_2);
	var subMenu = document.querySelectorAll('ul>li>ul');
	for (var i = 0; i < subMenu.length; i++){
		subMenu[i].style.display = 'none';
	}
	var sub = document.querySelectorAll('ul>li');
	for (var i = 0; i < sub.length; i++){
		var ul = sub[i].querySelector('ul');
		if (ul){
			sub[i].style.cursor = 'pointer';
			sub[i].onclick = displayToggle(ul);
		};
	};
}

function displayToggle(element){
	return function () {
		element.style.display = (element.style.display === '') ? 'none' : '';
	}
}
document.write('</br>Task 2.5*');
treeView();
