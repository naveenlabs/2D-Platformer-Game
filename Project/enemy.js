function Enemy(x, y,size, range) 
{
    // Enemy Properties
    this.x = x;
    this.y = y;
    this.range = range;
    this.size = size;

    this.currentX = x;
    this.inc = 5;

    // Update the Enemy Position
    this.update = function() 
    {
        this.currentX += this.inc;
        if (this.currentX > this.x + this.range) 
        {
            this.inc -= 1;
        } 
        else if (this.currentX < this.x) 
        {
            this.inc += 1;
        }
    }

    // Draw the Enemy
    this.draw = function() 
    {
        this.update();
        stroke(0);

        push(); // Preserve drawing state
        
        // Apply Shadow Effect
        drawingContext.shadowBlur = 20 * this.size;
        drawingContext.shadowColor = color('lightblue');

        fill(0);
        ellipse((this.currentX + 398) * this.size, (this.y + 395) * this.size, 40 * this.size);
        strokeWeight(10 * this.size);
        line((this.currentX + 405) * this.size, (this.y + 420) * this.size, (this.currentX + 410) * this.size, (this.y + 445) * this.size);
        line((this.currentX + 410) * this.size, (this.y + 445) * this.size, (this.currentX + 395) * this.size, (this.y + 465) * this.size);
        line((this.currentX + 395) * this.size, (this.y + 465) * this.size, (this.currentX + 350) * this.size, (this.y + 500) * this.size);
        line((this.currentX + 395) * this.size, (this.y + 465) * this.size, (this.currentX + 425) * this.size, (this.y + 475) * this.size);
        line((this.currentX + 425) * this.size, (this.y + 475) * this.size, (this.currentX + 400) * this.size, (this.y + 500) * this.size);
        line((this.currentX + 405) * this.size, (this.y + 420) * this.size, (this.currentX + 370) * this.size, (this.y + 425) * this.size);
        line((this.currentX + 370) * this.size, (this.y + 425) * this.size, (this.currentX + 360) * this.size, (this.y + 450) * this.size);
        line((this.currentX + 405) * this.size, (this.y + 420) * this.size, (this.currentX + 440) * this.size, (this.y + 400) * this.size);
        line((this.currentX + 440) * this.size, (this.y + 400) * this.size, (this.currentX + 440) * this.size, (this.y + 370) * this.size);

        push();
        strokeWeight(15 * this.size);
        line((this.currentX + 460) * this.size, (this.y + 375) * this.size, (this.currentX + 420) * this.size, (this.y + 360) * this.size);
        pop();

        push();
        
        // Apply Shadow Effect
        drawingContext.shadowBlur = 20 * this.size;
        drawingContext.shadowColor = color('yellow');
        
        stroke('yellow');
        strokeWeight(9 * this.size);
        line((this.currentX + 412) * this.size, (this.y + 355) * this.size, (this.currentX + 335) * this.size, (this.y + 330) * this.size);
        pop();
        
        pop(); // Restore drawing state 
    }

    // Check for contact with the Game Character
    this.checkContact = function(gc_x, gc_y) 
    {
        // Calculate the distance between Enemy and Game Character
        var d = dist(gc_x, gc_y, (this.currentX + 440) * this.size , (this.y + 500) * this.size);
        if (d < 40) // Check if the game character is within the contact range of the enemy
        {
            // Play death sound if contact is detected
            if (!deathSoundPlayed)
            {
                deathSound.play();
                deathSound.setVolume(0.3)
                deathSoundPlayed = true;
            }
            return true; // Return true indicating contact
        }
        return false;    // Return false indicating no contact
    }
}

function drawEnemies()
{
    // Draw Enemy using Array in for loop
    for (var i = 0; i < enemies.length; i++)
    {
        enemies[i].draw();

        // Check for contact with the Game Character
        var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
        if(isContact)
        {
            lives--;    // Decrease player's lives
            if(lives > 0)
            {
                init(); // Reset the Game
                break;  // Exit loop if there are more lives
            }
            else
            {
                gameOver = true;
            }
        }
    }
}