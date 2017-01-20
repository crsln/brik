var score = 0;


function drawScore(posX, posY){
	ctx.font = "10px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Score: "+score, posX, posY);
	document.getElementById('score').innerHTML = "SCORE: "+score;
}