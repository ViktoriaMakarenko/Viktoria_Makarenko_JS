'use strict';

CanvasRenderingContext2D.prototype.ellipse = function (x, y, a, b) {
	this.save();
	this.beginPath();
	this.translate(x, y);
	this.scale(a / b, 1);
	this.arc(0, 0, b, 0, Math.PI * 2, true);
	this.restore();
	this.closePath();
}

//man in a hat
var canvas = document.getElementById('man');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#22545f'; 
ctx.fillStyle = '#90cad7';

ctx.lineWidth = 4;

ctx.ellipse(135, 250, 110, 100);
ctx.fill();
ctx.stroke();

ctx.translate(110, 305);
ctx.rotate(10*Math.PI/180);
ctx.ellipse(0, 0, 42, 14);
ctx.fill();
ctx.stroke();
ctx.rotate(-10*Math.PI/180);
ctx.translate(-110, -305);

var x = 65;
for (var i = 1; i <= 2; i++){
	ctx.ellipse(x, 215, 19, 12);
	ctx.fill();
	ctx.stroke();
	x += 90;
}

ctx.fillStyle = '#22545f';
ctx.ellipse(58, 216, 5.5, 9);
ctx.fill();
ctx.ellipse(147, 215, 3.5, 7);
ctx.fill();

ctx.moveTo(110, 217);
ctx.lineTo(85, 267);
ctx.stroke();

ctx.moveTo(86, 267);
ctx.lineTo(110, 267);
ctx.stroke();

ctx.strokeStyle = 'black'; 
ctx.fillStyle = '#396693';


ctx.ellipse(126, 162, 122, 22);
ctx.fill();
ctx.stroke();

ctx.ellipse(133, 143, 64, 22);
ctx.fill();
ctx.stroke();

ctx.strokeRect(69, 25, 128, 115);
ctx.fillRect(71, 26, 124, 118);

ctx.ellipse(133, 25, 64, 22);
ctx.fill();
ctx.stroke();


//bicycle
var canva = document.getElementById('bike');
var cont = canva.getContext('2d');

cont.strokeStyle = '#337d8f'; 
cont.fillStyle = '#90cad7';

cont.lineWidth = 4;

var x = 95;
for (var i = 1; i <= 2; i++){
	cont.beginPath();
	cont.arc(x, 247, 90, 0, Math.PI * 2);
	cont.fill();
	cont.stroke();
	x += 355;
	cont.closePath();
	cont.moveTo(x, 247);

}

cont.moveTo(450, 247);
cont.lineTo(415, 60);
cont.lineTo(465, 3);
cont.moveTo(415, 60);
cont.lineTo(343, 84);
cont.moveTo(255, 239);
cont.lineTo(424, 128);
cont.lineTo(202, 128);
cont.lineTo(90, 245);
cont.lineTo(256, 239);
cont.lineTo(173, 84);
cont.moveTo(269, 259);
cont.lineTo(286, 279);
cont.moveTo(236, 222);
cont.lineTo(219, 200);
cont.moveTo(138, 84);
cont.lineTo(214, 84);
cont.stroke();

cont.beginPath();
cont.arc(255, 239, 25, 0, Math.PI * 2);
cont.closePath();
cont.stroke();

//house

var cvs = document.getElementById('house');
var con = cvs.getContext('2d');

con.strokeStyle = 'black'; 
con.fillStyle = '#975b5b';

con.lineWidth = 4;

con.beginPath();
con.moveTo(2,250);
con.lineTo(229,2);
con.lineTo(452,250);
con.fill();
con.stroke();

con.fillRect(2, 250, 450, 337);
con.strokeRect(2, 250, 450, 337);

con.beginPath();
con.moveTo(315,190);
con.lineTo(315,65);
con.lineTo(365,65);
con.lineTo(365,190);
con.fill();
con.stroke();
con.ellipse(340, 65, 25, 6);
con.fill();
con.stroke();

con.fillStyle = 'black';

var x = 35;
var y = 291;
for (var i = 1; i <= 4; i++){
	con.fillRect(x, y, 80, 50);
	x += 84;
	if (i == 2){
		y += 54;
		x = 35;
	}
}

x = 255;
y = 291;
for (var i = 1; i <= 4; i++){
	con.fillRect(x, y, 80, 50);
	x += 84;
	if (i == 2){
		y += 54;
		x = 255;
	}
}


x = 255;
y = 435;
for (var i = 1; i <= 4; i++){
	con.fillRect(x, y, 80, 50);
	x += 84;
	if (i == 2){
		y += 54;
		x = 255;
	}
}
con.moveTo(50,475);
con.bezierCurveTo(55, 448, 95, 440, 115, 440);
con.bezierCurveTo(135, 440, 170, 448, 175, 475);
con.moveTo(50,474);
con.lineTo(50,589);
con.moveTo(175,474);
con.lineTo(175,589);
con.moveTo(115,440);
con.lineTo(115,589);
con.stroke();

var x = 95;
for (var i = 1; i <= 2; i++){
	con.beginPath();
	con.arc(x, 544, 6, 0, Math.PI * 2);
	con.stroke();
	x += 40;
	con.closePath();
	con.moveTo(x, 544);

}