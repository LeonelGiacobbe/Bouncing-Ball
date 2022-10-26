var x = 0, y = 0
var r = 255, g = 125, b = 5 
var rChange = 5, gChange = 5, bChange = 5
var speedx = 1.3, speedy = 1
var size = 50

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  fill(255)
  colorChange()
  movement()
  background(r,g,b)
  noStroke()
  circle(x,y,size) 
}

function mousePressed() {
  size = random(50,200)
}

function colorChange() {
  if (r >= 255){
    rChange =  rChange*-1
    r += rChange
  } else if (r <= 0) {
    rChange =  rChange*-1
    r += rChange
  } else {
    r  += rChange
  }

  if (g >= 255){
    gChange =  gChange*-1
    g += gChange
  } else if (g <= 0) {
    gChange =  gChange*-1
    g += gChange
  } else {
    g  += gChange
  }

  if (b >= 255){
    bChange =  bChange*-1
    b += bChange
  } else if (b <= 0) {
    bChange =  bChange*-1
    b += bChange
  } else {
    b  += bChange
  }
}

function movement() {
  if (x > width-size/2) {
    speedx = random(-1,-2.5)
  }

  x = x + speedx

  if (x < 0+size/2) {
    speedx = random(1,2.5)
  }

  x = x + speedx

  if (y > height-size/2) {
    speedy = random(-1,-2.5)
  }

  y = y + speedy
  
  if (y < 0+size/2) {
    speedy = random(1,2.5)
  }

  y = y + speedy
}