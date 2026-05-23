function drawGameScore()
{ 
    fill(255);
    textSize(30);
    
    // Display the Game Score
    text(": " + game_Score + "/6", 60, 50);

    push();
    
    // Apply Glowing Effect
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(83, 241, 253)
    
    // x, y positions of the Diamond and the size of it
    var x_pos = 40;
    var y_pos = 50;
    var size = 50;
    
    // Draw the Diamond
    stroke(204, 255, 255);
    fill(83, 241, 253); 
    beginShape();
    vertex(x_pos, y_pos + size / 10); 
    vertex(x_pos + size / 3, y_pos - size / 3); 
    vertex(x_pos - size / 3, y_pos - size / 3); 
    endShape(CLOSE);

    fill(83, 241, 253); 
    beginShape();
    vertex(x_pos - size / 3, y_pos - size / 3); 
    vertex(x_pos - size / 5, y_pos - size / 2); 
    vertex(x_pos + size / 5, y_pos - size / 2); 
    vertex(x_pos + size / 3, y_pos - size / 3); 
    endShape();

    fill(83, 241, 253); 
    beginShape();
    vertex(x_pos, y_pos + size / 10); 
    vertex(x_pos - size / 10, y_pos - size / 3);
    endShape();
    beginShape();
    vertex(x_pos, y_pos + size / 10); 
    vertex(x_pos + size / 10, y_pos - size / 3);
    endShape();

    fill(83, 241, 253);
    beginShape();
    vertex(x_pos - size / 5, y_pos - size / 2); 
    vertex(x_pos - size / 10, y_pos - size / 3);
    endShape();
    beginShape();
    vertex(x_pos - size / 10, y_pos - size / 3);
    vertex(x_pos, y_pos - size / 2);
    endShape();
    beginShape();
    vertex(x_pos, y_pos - size / 2);
    vertex(x_pos + size / 10, y_pos - size / 3);
    endShape();
    beginShape();
    vertex(x_pos + size / 10, y_pos - size / 3);
    vertex(x_pos + size / 5, y_pos - size / 2);
    endShape();

    // Reset Glowing Effect
    pop();

}
function drawLifeTokens()
{
    var heartSize = 40;      // Initial size of the heart
    var minSizeFactor = 1;   // Minimum scale factor for beating effect
    var maxSizeFactor = 1.2; // Maximum scale factor for beating effect
    var scalingSpeed = 0.02; // Speed of the beating effect
    var heartSpacing = -50;  // Spacing between the hearts

    for (var i = 0; i < lives; i++)
    {
        // Draw the Heart
        push();
        
        fill('red');
        stroke(0);
        strokeWeight(4);
        beginShape();
        var offsetX = 1024 - 50 - (130 + heartSpacing) * i;
        var offsetY = 576 - 500; 
        var sizeFactor = minSizeFactor + Math.abs(Math.sin(frameCount * scalingSpeed)) * (maxSizeFactor - minSizeFactor);

        vertex(offsetX, offsetY);
        vertex(offsetX - 30 * sizeFactor, offsetY - 30 * sizeFactor);
        vertex(offsetX - 30 * sizeFactor, offsetY - 40 * sizeFactor);
        vertex(offsetX - 20 * sizeFactor, offsetY - 47.5 * sizeFactor);
        vertex(offsetX - 10 * sizeFactor, offsetY - 47.5 * sizeFactor);
        vertex(offsetX, offsetY - 37.5 * sizeFactor);
        vertex(offsetX + 10 * sizeFactor, offsetY - 47.5 * sizeFactor);
        vertex(offsetX + 20 * sizeFactor, offsetY - 47.5 * sizeFactor);
        vertex(offsetX + 30 * sizeFactor, offsetY - 40 * sizeFactor);
        vertex(offsetX + 30 * sizeFactor, offsetY - 30 * sizeFactor);
        endShape(CLOSE);
        
        pop();
    }
}