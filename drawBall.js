var ballRadius = 10;

function drawBall(posX, posY){	
		ctx.beginPath();
		ctx.arc(posX, posY, ballRadius, 0, Math.PI*2);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}