function createPlatforms(x, y, length, shapeSize) 
{
  let p = {
            // Platform Properties
            x: x,
            y: y,
            length: length,
            shapeSize: shapeSize,
            draw: function() 
            {
                // Apply Shadow effect    
                push();
                drawingContext.shadowBlur = 20;
                drawingContext.shadowColor = color(255, 144, 192);

                // Draw the Crystal in the Platform
                stroke(255);
                fill(255, 144, 192);

                beginShape();
                vertex(this.x + 20, this.y); 
                vertex(this.x - (15 * this.shapeSize / 100) + 20, this.y); 
                vertex(this.x - (60 * this.shapeSize / 100) + 20, this.y - (70 * this.shapeSize / 100)); 
                vertex(this.x - (35 * this.shapeSize / 100) + 20, this.y - (70 * this.shapeSize / 100)); 
                endShape(CLOSE);

                beginShape();
                vertex(this.x - (60 * this.shapeSize / 100) + 20, this.y - (70 * this.shapeSize / 100)); 
                vertex(this.x - (45 * this.shapeSize / 100) + 20, this.y - (200 * this.shapeSize / 100)); 
                vertex(this.x - (25 * this.shapeSize / 100) + 20, this.y - (225 * this.shapeSize / 100)); 
                vertex(this.x + 20, this.y - (200 * this.shapeSize / 100)); 
                vertex(this.x - (2 * this.shapeSize / 100) + 20, this.y - (175 * this.shapeSize / 100)); 
                vertex(this.x - (35 * this.shapeSize / 100) + 20, this.y - (70 * this.shapeSize / 100)); 
                endShape(CLOSE);
                
                beginShape();
                vertex(this.x + 20, this.y); 
                vertex(this.x + (15 * this.shapeSize / 100) + 20, this.y - (60 * this.shapeSize / 100)); 
                vertex(this.x + 20, this.y - (200 * this.shapeSize / 100)); 
                vertex(this.x - (2 * this.shapeSize / 100) + 20, this.y - (175 * this.shapeSize / 100)); 
                vertex(this.x - (35 * this.shapeSize / 100) + 20, this.y - (70 * this.shapeSize / 100)); 
                endShape(CLOSE);
                pop();

                // Draw  the Platform
                fill(230, 232, 224);
                rect(this.x, this.y, this.length, 10);
                fill(29, 45, 81);
                rect(this.x, this.y + 10, this.length, 20);
                
                // Anchoring Point for Platforms
                // fill('red');
                // ellipse(this.x, this.y, 10);
            },
      
        checkContact: function(gc_x, gc_y) 
        {
            // Checks if a given point (gc_x, gc_y) is in contact with the Platform
            if (gc_x > this.x && gc_x < this.x + this.length) // Check horizontally within Platform Bounds
            {
                let d = this.y - gc_y; // Calculate the vertical distance to the platform
            if (d > 0 && d < 10)       // If the distance is within a certain range
            {
                return true;  // Contact is made
            }};
            return false;    // No contact is made
        }};
            return p;       // Returns the Platform object with its properties and methods
}

function drawPlatforms()
{
    // Draw the Platforms using Array in for loop
    for(var i = 0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
}