function drawDiamond(t_diamond)
{
    // Draw the Diamond if it's not found yet
    if (t_diamond.isFound == false)
    {
        push();
        
        // Apple the Shadow Effect
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = color(83, 241, 253)

        //Code for Diamond (Collectable Item)
        stroke(204, 255, 255);
        fill(83, 241, 253); 
        beginShape();
        vertex(t_diamond.x_pos, t_diamond.y_pos + t_diamond.size / 10); 
        vertex(t_diamond.x_pos + t_diamond.size / 3, t_diamond.y_pos - t_diamond.size / 3); 
        vertex(t_diamond.x_pos - t_diamond.size / 3, t_diamond.y_pos - t_diamond.size / 3); 
        endShape(CLOSE);

        fill(83, 241, 253); 
        beginShape();
        vertex(t_diamond.x_pos - t_diamond.size / 3, t_diamond.y_pos - t_diamond.size / 3); 
        vertex(t_diamond.x_pos - t_diamond.size / 5, t_diamond.y_pos - t_diamond.size / 2); 
        vertex(t_diamond.x_pos + t_diamond.size / 5, t_diamond.y_pos - t_diamond.size / 2); 
        vertex(t_diamond.x_pos + t_diamond.size / 3, t_diamond.y_pos - t_diamond.size / 3); 
        endShape();

        fill(135, 206, 250); 
        beginShape();
        vertex(t_diamond.x_pos, t_diamond.y_pos + t_diamond.size / 10); 
        vertex(t_diamond.x_pos - t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        endShape();
        beginShape();
        vertex(t_diamond.x_pos, t_diamond.y_pos + t_diamond.size / 10); 
        vertex(t_diamond.x_pos + t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        endShape();

        fill(70, 130, 180); 
        beginShape();
        vertex(t_diamond.x_pos - t_diamond.size / 5, t_diamond.y_pos - t_diamond.size / 2); 
        vertex(t_diamond.x_pos - t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        endShape();
        beginShape();
        vertex(t_diamond.x_pos - t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        vertex(t_diamond.x_pos, t_diamond.y_pos - t_diamond.size / 2);
        endShape();
        beginShape();
        vertex(t_diamond.x_pos, t_diamond.y_pos - t_diamond.size / 2);
        vertex(t_diamond.x_pos + t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        endShape();
        beginShape();
        vertex(t_diamond.x_pos + t_diamond.size / 10, t_diamond.y_pos - t_diamond.size / 3);
        vertex(t_diamond.x_pos + t_diamond.size / 5, t_diamond.y_pos - t_diamond.size / 2);
        endShape();
        pop();

        // Anchor Point for Diamond (Collectable Item)
        // fill('red');
        // ellipse(t_diamond.x_pos, t_diamond.y_pos, 10);
    }
}

function drawDiamonds()
{
    // Draw all Diamonds in the Diamond Array
    for (var i = 0; i < diamonds.length; i++)
    {
        drawDiamond(diamonds[i]);
    }
}

function checkIfGameCharInAnyDiamondRange()
{
    // Check if the Game Character is in range of any Diamonds
    for (var i = 0; i < diamonds.length; i++)
    {
        checkIfGameCharInDiamondRange(diamonds[i]);
    }
}

function checkIfGameCharInDiamondRange(t_diamond)
{
    // Check if the Game Character is in range of a specific diamond (t_diamond)
    if(t_diamond.isFound == false)
    {
        // Calculate the distance between Game Character and Diamond
        var d = dist(gameChar_x, gameChar_y, t_diamond.x_pos, t_diamond.y_pos)
        // If the distance is less than 30, the diamond is collected
        if (d < 30)
        {
            t_diamond.isFound = true;
            // Increment the Game Score once Diamond is collected
            game_Score++;
            // Play Diamond Collection Sound
            diamondSound.play();
            diamondSound.setVolume(0.3);
        }
    }
}