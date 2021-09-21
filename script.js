onload = function () {
	c = canvas.getContext('2d');
	canvas.width = W = innerWidth;
	canvas.height = H = innerHeight;
	var cPointsX = [];
	var cPointsY = [];
	var nums = [0,20,40,10,30,50];
	var pointsX = [];
	var pointsY = [];
	var step = 2*Math.PI/60;
	var r = H/5;
	function setPoints(){
		for(n=0; n < 2*Math.PI; n+=step){
			pointsX[pointsX.length] = W/2 + r*Math.cos(n);
			pointsY[pointsY.length] = H/3 - r*Math.sin(n)/2;
		}
	}
	setPoints();
	function draw() {
		c.fillRect(0, 0, canvas.width, canvas.height);
		c.lineWidth = 1;
		c.strokeStyle = "#ffffff";
		c.beginPath();
		for(n = 0; n < 6; n++) {
			if(n<3){
				c.moveTo(W/2,H/4.6);
				c.lineTo(cPointsX[n], cPointsY[n]);
			}
			else {
				c.moveTo(W/2, H/5*3);
				c.lineTo(cPointsX[n], cPointsY[n]+H/7)
			}
		}
		c.moveTo(cPointsX[0], cPointsY[0]);
		c.lineTo(cPointsX[5], cPointsY[5]+H/7);
		c.lineTo(cPointsX[2], cPointsY[2]);
		c.lineTo(cPointsX[4], cPointsY[4]+H/7);
		c.lineTo(cPointsX[1], cPointsY[1]);
		c.lineTo(cPointsX[3], cPointsY[3]+H/7);
		c.lineTo(cPointsX[0], cPointsY[0]);
		c.stroke();
		for(n = 0; n < 6; n++) {
			cPointsX[n] = pointsX[nums[n]];
			cPointsY[n] = pointsY[nums[n]];
			if(nums[n] > 0){
				nums[n]--;
			}
			else {
				nums[n] = 59;
			}
		}
		requestAnimationFrame(draw);
	}
	requestAnimationFrame(draw);
}