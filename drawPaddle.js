var paddleHeight = 10;
var paddleWidth = 70;
var paddleX = (canvas.width-paddleWidth)/2;

function drawPadlle(paddleX, paddleWidth, paddleHeight){
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-(paddleHeight+10), paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}