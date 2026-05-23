function drawGameCharacter()
{
    if (gameOver)
    {
        drawGameOver();
        
        // Set the game char back to the starting point
        gameChar_x = width/2;
        gameChar_y = floorPos_y;
        
        // Apply the Shadow Effect
        drawingContext.shadowBlur = 30;
        drawingContext.shadowColor = color(255,255,0)
        
        // Draw the Game Character Facing Front
        stroke(0);
        //head
        fill(0);
        ellipse(gameChar_x,gameChar_y - 45,20);
        //body
        rect(gameChar_x - 3,gameChar_y - 36,5,25,2);
        //left leg
        push();
        translate(gameChar_x - 3,gameChar_y - 13);
        rotate(20);
        rect(0,0,5,15,2);
        pop();
        //right leg
        push();
        translate(gameChar_x - 3,gameChar_y - 11);
        rotate(-20);
        rect(0,0,5,15,2);
        pop();
        //left hand 
        push();
        translate(gameChar_x - 2,gameChar_y - 33);
        rotate(50);
        rect(0,0,5,17,2);
        pop();
        //right hand
        push();
        translate(gameChar_x - 3,gameChar_y - 29);
        rotate(-50);
        rect(0,0,5,17,2);
        pop();

        return;
    }

    // The Game Character
    fill(0);
    noStroke();
    
    // Apply Shadow Effect
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(255,255,0);
    
    if(isLeft && isFalling) // Character Jumping Left
    {
        //head
        ellipse(gameChar_x - 10,gameChar_y - 31,20);
        //body
        push();
        translate(gameChar_x - 11 ,gameChar_y - 25);
        rotate(-30);
        rect(0,0,5,25,2);
        pop();
        //left leg
        push();
        translate(gameChar_x  ,gameChar_y - 4.5);
        rotate(-70);
        rect(0,0,5,20,2);
        pop();
        //right leg 1 
        push();
        translate(gameChar_x + 3,gameChar_y - 9);
        rotate(100);
        rect(0,0,5,17,2);
        pop();
        //right leg 2
        push();
        translate(gameChar_x - 12,gameChar_y - 12);
        rotate(60);
        rect(0,0,5,15,2);
        pop();
        //left hand 1
        push();
        translate(gameChar_x - 6,gameChar_y - 18);
        rotate(-110);
        rect(0,0,5,15,2);
        pop();
        //left hand 2 
        push();
        translate(gameChar_x + 2,gameChar_y - 24);
        rotate(-50);
        rect(0,0,5,15,2);
        pop();
        //right hand 1 
        push();
        translate(gameChar_x - 10,gameChar_y - 23);
        rotate(50);
        rect(0,0,5,12,2);
        pop();
        //right hand 2 
        push();
        translate(gameChar_x - 13,gameChar_y - 16);
        rotate(130);
        rect(0,0,5,13,2);
        pop();
    }

    else if(isRight && isFalling) // Character Jumping Right
    {
        //head
        ellipse(gameChar_x + 10,gameChar_y - 33,20);
        //body
        push();
        translate(gameChar_x + 3 ,gameChar_y - 27);
        rotate(30);
        rect(0,0,5,25,2);
        pop();
        //left leg
        push();
        translate(gameChar_x - 4,gameChar_y - 9);
        rotate(70);
        rect(0,0,5,19,2);
        pop();
        //right leg 1 
        push();
        translate(gameChar_x - 6,gameChar_y - 3);
        rotate(-100);
        rect(0,0,5,17,2);
        pop();
        //right leg 2
        push();
        translate(gameChar_x + 6,gameChar_y - 7);
        rotate(-60);
        rect(0,0,5,18,2);
        pop();
        //left hand 1
        push();
        translate(gameChar_x + 5,gameChar_y - 26);
        rotate(110);
        rect(0,0,5,14,2);
        pop();
        //left hand 2 
        push();
        translate(gameChar_x - 7,gameChar_y - 31);
        rotate(50);
        rect(0,0,5,15,2);
        pop();
        //right hand 1 
        push();
        translate(gameChar_x + 4,gameChar_y - 21);
        rotate(-45);
        rect(0,0,5,12,2);
        pop();
        //right hand 2 
        push();
        translate(gameChar_x + 13,gameChar_y - 12);
        rotate(-130);
        rect(0,0,5,15,2);
        pop();
    }

    else if(isLeft) // Character Facing Left
    {
        //head
        ellipse(gameChar_x - 13,gameChar_y - 45,20);
        //body
        push();
        translate(gameChar_x - 12 ,gameChar_y - 38);
        rotate(-30);
        rect(0,0,5,25,2);
        pop();
        //left leg
        push();
        translate(gameChar_x - 1 ,gameChar_y - 18);
        rotate(-45);
        rect(0,0,5,25,2);
        pop();
        //right leg 1 
        push();
        translate(gameChar_x + 3,gameChar_y - 19);
        rotate(80);
        rect(0,0,5,18,2);
        pop();
        //right leg 2
        push();
        translate(gameChar_x - 15,gameChar_y - 15);
        rotate(-20);
        rect(0,0,5,18,2);
        pop();
        //left hand 1
        push();
        translate(gameChar_x - 7,gameChar_y - 34);
        rotate(-85);
        rect(0,0,5,15,2);
        pop();
        //left hand 2 
        push();
        translate(gameChar_x + 3,gameChar_y - 36);
        rotate(-15);
        rect(0,0,5,15,2);
        pop();
        //right hand 1 
        push();
        translate(gameChar_x - 13,gameChar_y - 36);
        rotate(15);
        rect(0,0,5,17,2);
        pop();
        //right hand 2 
        push();
        translate(gameChar_x - 11,gameChar_y - 21);
        rotate(130);
        rect(0,0,5,14,2);
        pop();
    }

    else if(isRight) // Characetr Facing Right
    {
        //head
        ellipse(gameChar_x + 13,gameChar_y - 45,20);
        //body
        push();
        translate(gameChar_x + 7 ,gameChar_y - 39);
        rotate(30);
        rect(0,0,5,25,2);
        pop();
        //left leg
        push();
        translate(gameChar_x - 4,gameChar_y - 19);
        rotate(45);
        rect(0,0,5,25,2);
        pop();
        //right leg 1 
        push();
        translate(gameChar_x - 3,gameChar_y - 14);
        rotate(-80);
        rect(0,0,5,15,2);
        pop();
        //right leg 2
        push();
        translate(gameChar_x + 9,gameChar_y - 17);
        rotate(20);
        rect(0,0,5,18,2);
        pop();
        //left hand 1
        push();
        translate(gameChar_x + 7,gameChar_y - 37);
        rotate(85);
        rect(0,0,5,15,2);
        pop();
        //left hand 2 
        push();
        translate(gameChar_x - 8,gameChar_y - 36);
        rotate(15);
        rect(0,0,5,15,2);
        pop();
        //right hand 1 
        push();
        translate(gameChar_x + 8,gameChar_y - 35);
        rotate(-15);
        rect(0,0,5,17,2);
        pop();
        //right hand 2 
        push();
        translate(gameChar_x + 14,gameChar_y - 18);
        rotate(-130);
        rect(0,0,5,15,2);
        pop();
    }

    else if(isFalling || isPlummeting) // Character Juping Facing Forward
    {
        //head
        fill(0);
        ellipse(gameChar_x,gameChar_y - 43,20);
        //body
        rect(gameChar_x - 3,gameChar_y - 34,5,25,2);
        //left leg
        push();
        translate(gameChar_x - 3,gameChar_y - 11);
        rotate(20);
        rect(0,0,5,15,2);
        pop();
        //right leg
        push();
        translate(gameChar_x - 3,gameChar_y - 10);
        rotate(-20);
        rect(0,0,5,15,2);
        pop();
        //left hand
        push();
        translate(gameChar_x ,gameChar_y - 26);
        rotate(130);
        rect(0,0,5,17,2);
        pop();
        //right hand
        push();
        translate(gameChar_x + 2,gameChar_y - 22);
        rotate(-130);
        rect(0,0,5,17,2)
        pop();
    }

    else // Character Facing Front
    {
        //head
        fill(0);
        ellipse(gameChar_x,gameChar_y - 45,20);
        //body
        rect(gameChar_x - 3,gameChar_y - 36,5,25,2);
        //left leg
        push();
        translate(gameChar_x - 3,gameChar_y - 13);
        rotate(20);
        rect(0,0,5,15,2);
        pop();
        //right leg
        push();
        translate(gameChar_x - 3,gameChar_y - 11);
        rotate(-20);
        rect(0,0,5,15,2);
        pop();
        //left hand 
        push();
        translate(gameChar_x - 2,gameChar_y - 33);
        rotate(50);
        rect(0,0,5,17,2);
        pop();
        //right hand
        push();
        translate(gameChar_x - 3,gameChar_y - 29);
        rotate(-50);
        rect(0,0,5,17,2);
        pop();
    }
    
    // Anchoring Point for the Game Character
    // fill('red');
    // ellipse(gameChar_x, gameChar_y, 10);
}