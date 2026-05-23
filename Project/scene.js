function drawBackground()
{
    // Draw The Gradient Background
    for (let y = 0; y < height; y++)  
    {
        n = map(y, 0, height, 0, 1);

        let newcolour = lerpColor(topcolour, bottomcolour, n);
        stroke(newcolour);
        line(0, y, width, y);
    }
}

class Star 
{
  constructor() 
  {
    // Initialize Star Properties with random values
    this.x = random(-2000,8000);
    this.y = random(0, floorPos_y);
    this.size = random(1, 5);
  }

  show() 
  {
    // Draw the Stars
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
}

function drawStars()
{
    // Draw each star in the stars array
    for (var i = 0; i < stars.length; i++) 
    {
        stars[i].show();
    }
}

function drawMountains()
{
    // Drawing multiple mountains using array in for loop
    for (let i = 0; i < mountain.length; i++) 
    {
        // Initialize the Mountain Properties
        let xpos = mountain[i].x_pos;
        let ypos = mountain[i].y_pos;
        let size = mountain[i].size;

        push();
        beginShape();
        fill(29, 45, 81);
        vertex(20 * size + xpos, 550 * size + ypos);
        vertex(170 * size + xpos, 350 * size + ypos);
        vertex(170 * size + xpos, 550 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(17, 26, 55);
        vertex(170 * size + xpos, 350 * size + ypos);
        vertex(320 * size + xpos, 550 * size + ypos);
        vertex(170 * size + xpos, 550 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(4, 8, 20);
        vertex(50 * size + xpos, 550 * size + ypos);
        vertex(290 * size + xpos, 415 * size + ypos);
        vertex(520 * size + xpos, 520 * size + ypos);
        vertex(555 * size + xpos, 444 * size + ypos);
        vertex(600 * size + xpos, 495 * size + ypos);
        vertex(640 * size + xpos, 380 * size + ypos);
        vertex(700 * size + xpos, 540 * size + ypos);
        vertex(790 * size + xpos, 490 * size + ypos);
        vertex(870 * size + xpos, 550 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        fill(115, 136, 165);
        beginShape();
        vertex(185 * size + xpos, 370 * size + ypos);
        vertex(260 * size + xpos, 270 * size + ypos);
        vertex(260 * size + xpos, 432 * size + ypos);
        vertex(240 * size + xpos, 443 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(38, 59, 106);
        vertex(260 * size + xpos, 270 * size + ypos);
        vertex(380 * size + xpos, 420 * size + ypos);
        vertex(360 * size + xpos, 447 * size + ypos);
        vertex(290 * size + xpos, 415 * size + ypos);
        vertex(260 * size + xpos, 432 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(29, 45, 81);
        vertex(360 * size + xpos, 447 * size + ypos);
        vertex(480 * size + xpos, 290 * size + ypos);
        vertex(540 * size + xpos, 475 * size + ypos);
        vertex(520 * size + xpos, 520 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(17, 26, 55);
        vertex(480 * size + xpos, 290 * size + ypos);
        vertex(633 * size + xpos, 400 * size + ypos);
        vertex(600 * size + xpos, 495 * size + ypos);
        vertex(555 * size + xpos, 444 * size + ypos);
        vertex(540 * size + xpos, 475 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(17, 26, 55);
        vertex(651 * size + xpos, 410 * size + ypos);
        vertex(764 * size + xpos, 504 * size + ypos);
        vertex(700 * size + xpos, 540 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(115, 136, 165);
        vertex(535 * size + xpos, 330 * size + ypos);
        vertex(590 * size + xpos, 240 * size + ypos);
        vertex(590 * size + xpos, 369 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(38, 59, 106);
        vertex(590 * size + xpos, 240 * size + ypos);
        vertex(780 * size + xpos, 495 * size + ypos);
        vertex(764 * size + xpos, 504 * size + ypos);
        vertex(651 * size + xpos, 410 * size + ypos);
        vertex(640 * size + xpos, 380 * size + ypos);
        vertex(633 * size + xpos, 400 * size + ypos);
        vertex(590 * size + xpos, 369 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(29, 45, 81);
        vertex(780 * size + xpos, 495 * size + ypos);
        vertex(790 * size + xpos, 490 * size + ypos);
        vertex(835 * size + xpos, 524 * size + ypos);
        vertex(835 * size + xpos, 300 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(17, 26, 55);
        vertex(835 * size + xpos, 300.5 * size + ypos);
        vertex(930 * size + xpos, 550 * size + ypos);
        vertex(870 * size + xpos, 550 * size + ypos);
        vertex(835 * size + xpos, 524 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(115, 136, 165);
        vertex(275 * size + xpos, 288 * size + ypos);
        vertex(370 * size + xpos, 65 * size + ypos);
        vertex(390 * size + xpos, 406 * size + ypos);
        vertex(380 * size + xpos, 420 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(38, 59, 106);
        vertex(370 * size + xpos, 65 * size + ypos);
        vertex(473 * size + xpos, 300 * size + ypos);
        vertex(390 * size + xpos, 407 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(230, 232, 224);
        vertex(495 * size + xpos, 300 * size + ypos);
        vertex(535 * size + xpos, 330 * size + ypos);
        vertex(590 * size + xpos, 240 * size + ypos);
        vertex(610 * size + xpos, 267 * size + ypos);
        vertex(610 * size + xpos, 120 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(230, 232, 224);
        vertex(665 * size + xpos, 340 * size + ypos);
        vertex(740 * size + xpos, 220 * size + ypos);
        vertex(740 * size + xpos, 442 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(185, 206, 201);
        vertex(610 * size + xpos, 120 * size + ypos);
        vertex(720 * size + xpos, 252 * size + ypos);
        vertex(665 * size + xpos, 340 * size + ypos);
        vertex(610 * size + xpos, 267 * size + ypos);
        endShape(CLOSE);
        pop();

        push();
        beginShape();
        fill(185, 206, 201);
        vertex(740 * size + xpos, 220 * size + ypos);
        vertex(830 * size + xpos, 317 * size + ypos);
        vertex(780 * size + xpos, 495 * size + ypos);
        vertex(740 * size + xpos, 442 * size + ypos);
        endShape(CLOSE);
        pop();
        
        // Anchoring Point for the Mountains
        // fill('red');
        // ellipse(xpos,ypos,10);
    }
}

function drawClouds()
{
    // Draw multiple Clouds using array in for loop
    for (var i = 0; i < clouds.length; i++)
    {   
        noStroke();
        fill(255);
        ellipse(clouds[i].x, clouds[i].y, 40 * clouds[i].scale, 30 * clouds[i].scale);
        ellipse(clouds[i].x + 30 * clouds[i].scale, clouds[i].y, 40 * clouds[i].scale, 30 * clouds[i].scale);
        ellipse(clouds[i].x + 60 * clouds[i].scale, clouds[i].y, 40 * clouds[i].scale, 30 * clouds[i].scale);
        ellipse(clouds[i].x + 45 * clouds[i].scale, clouds[i].y - 15 * clouds[i].scale, 40 * clouds[i].scale, 30 * clouds[i].scale);
        ellipse(clouds[i].x + 15 * clouds[i].scale, clouds[i].y - 15 * clouds[i].scale, 40 * clouds[i].scale, 30 * clouds[i].scale);
        ellipse(clouds[i].x + 30 * clouds[i].scale, clouds[i].y - 10 * clouds[i].scale, 40 * clouds[i].scale, 30 * clouds[i].scale);

        // Anchor Point for the Cloud
        // fill('red');
        // ellipse(clouds[i].x,clouds[i].y,10);
    }

    // Moving the clouds
    for (var j = 0; j < clouds.length; j++)
    {
        clouds[j].x += cloudSpeed; 

        if (clouds[j].x > 7300)
        {
            clouds[j].x -= 7400; // Resets Cloud Position once it exceeds 7300 in x coordinate
        }
    }
}

function drawLights()
{   
    // Draw multiple Lights using array in for loop
    for (let i = 0; i < light.length; i++)
    {
        // Initialize the Light Properties
        let lightX = light[i].x_pos;
        let lightY = light[i].y_pos;
        let lightSize = light[i].size;

        beginShape();
        fill(0);
        vertex(lightX, lightY);
        vertex(lightX - 50 * lightSize, lightY);
        vertex(lightX - 50 * lightSize, lightY - 10 * lightSize);
        vertex(lightX - 40 * lightSize, lightY - 10 * lightSize);
        vertex(lightX - 40 * lightSize, lightY - 100 * lightSize);
        vertex(lightX - 50 * lightSize, lightY - 100 * lightSize);
        vertex(lightX - 50 * lightSize, lightY - 110 * lightSize);
        vertex(lightX, lightY - 110 * lightSize);
        vertex(lightX, lightY - 100 * lightSize);
        vertex(lightX - 10 * lightSize, lightY - 100 * lightSize);
        vertex(lightX - 10 * lightSize, lightY - 10 * lightSize);
        vertex(lightX, lightY - 10 * lightSize);
        endShape(CLOSE);

        beginShape();
        vertex(lightX + 55 * lightSize, lightY - 420 * lightSize);
        vertex(lightX + 45 * lightSize, lightY - 400 * lightSize);
        vertex(lightX + 110 * lightSize, lightY - 400 * lightSize);
        vertex(lightX + 100 * lightSize, lightY - 420 * lightSize);
        endShape(CLOSE);

        push();
        
        // Apply the Shadow Effect
        drawingContext.shadowBlur = 50 * lightSize;
        drawingContext.shadowColor = color('yellow');
        
        fill('yellow');
        beginShape();
        vertex(lightX + 45 * lightSize, lightY - 400 * lightSize);
        vertex(lightX + 55 * lightSize, lightY - 385 * lightSize);
        vertex(lightX + 100 * lightSize, lightY - 385 * lightSize);
        vertex(lightX + 110 * lightSize, lightY - 400 * lightSize);
        endShape(CLOSE);
        pop();

        push();
        stroke(0);
        strokeWeight(7 * lightSize);
        line(lightX - 25 * lightSize, lightY - 110 * lightSize, lightX - 25 * lightSize, lightY - 400 * lightSize);
        line(lightX - 25 * lightSize, lightY - 400 * lightSize, lightX + 30 * lightSize, lightY - 420 * lightSize);
        line(lightX + 30 * lightSize, lightY - 420 * lightSize, lightX + 100 * lightSize, lightY - 420 * lightSize);
        pop();
        
        // Anchorig Point for the Lights
        // fill('red');
        // ellipse(lightX,lightY,10);
    }
}

function backGroundMusic()
{
    // Play BackGround Music if it's not already playing
    if (!backgroundSound.isPlaying())
    {
        backgroundSound.play();
        backgroundSound.setVolume(0.05);
        backgroundSound.loop();
    }
}