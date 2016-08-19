'use strict';


//man in a hat
var canvas = document.getElementById('man');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#22545f'; 
ctx.fillStyle = '#90cad7';


CanvasRenderingContext2D.prototype.ellipse = function (x, y, a, b) {
	this.save();
	this.beginPath();
	this.translate(x, y);
	this.scale(a / b, 1);
	this.arc(0, 0, b, 0, Math.PI * 2, true);
	this.restore();
	this.closePath();
}

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
	ctx.ellipse(x, 220, 18, 12);
	ctx.fill();
	ctx.stroke();
	x += 90;
}

ctx.fillStyle = '#22545f';
ctx.ellipse(58, 221, 5.5, 9);
ctx.fill();
ctx.ellipse(147, 220, 3.5, 7);
ctx.fill();

ctx.moveTo(110, 217);
ctx.lineTo(88, 267);
ctx.stroke();

ctx.moveTo(89, 267);
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
