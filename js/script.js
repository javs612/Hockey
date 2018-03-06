let ball
let p1
let p2

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  p1 = new Paddle(1,color('green'))
  p2 = new Paddle(2,color('red'))
  ball = new Ball()

}

function draw(){
	background('#214588')
	drawLine()
	ball.draw()
	ball.move()
	if(ball.collision(p1) || ball.collision(p2))
		ball.move()
	let checkScore = ball.checkScore()
	if (checkScore === 2)//anoto el player 2
		p2.updateScore()
	else if(checkScore === 1)
		p1.updateScore()

	p1.draw()
	p2.draw()
	if (keyIsPressed) {

		if(keyIsDown(87))
			p1.move(-1)
		if(keyIsDown(83))
			p1.move(1)
		//////
		if(keyIsDown(68))
			p1.move2(1)
		if(keyIsDown(65))
			p1.move2(-1)
		//////

		if(keyIsDown(UP_ARROW))
			p2.move(-1)
		if(keyIsDown(DOWN_ARROW))
			p2.move(1)
		///
		if(keyIsDown(LEFT_ARROW))
			p2.move3(-1)
		if(keyIsDown(RIGHT_ARROW))
			p2.move3(1)





	}

	showScore()

}


const drawLine = function(){
	stroke('#fff')
	strokeWeight(4)
	line(width / 2, 0, width / 2,height)
	line(width / 4, 0,width / 4,height)
	line((width / 2 + (width / 4)), 0,(width / 2 + (width / 4)),height)


	//porteria 1
	fill('#214588')
	stroke('#fff')
	ellipse(0, height / 2, 400, 400)
	line(0,((height / 2)-70),20,((height / 2)-70))
	line(0,((height / 2)+70),20,((height / 2)+70))

	//porteria 2
	fill('#214588')
	stroke('#fff')
	ellipse(width, height / 2, 400, 400)
	line((width-20),((height / 2)-70),width,((height / 2)-70))
	line((width-20),((height / 2)+70),width,((height / 2)+70))

	//circulo del medio
	fill('#214588')
	stroke('#fff')
	ellipse(width / 2, height / 2, 80, 80)

}


const showScore = function(){
	fill('black')
	textSize(50)
	text(p1.getScore(), width * 0.25, 70)
	text(p2.getScore(), width * 0.75, 70)

}


