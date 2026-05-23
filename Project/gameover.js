function init()
{
    // Global Variables
    floorPos_y = height * 3/4;
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    gameChar_width = 20;
    
    game_Score = 0;
    
    // Canyon Properties
    var canyon1 = {x_pos: 820, width: 570};
    var canyon2 = {x_pos: 1820, width: 360};
    var canyon3 = {x_pos: 3020, width: 700};
    var canyon4 = {x_pos: -2000, width: 2100};
    var canyon5 = {x_pos: 4120, width: 150};   
    var canyon6 = {x_pos: 5020, width: 1100};
    var canyon7 = {x_pos: 7020, width: 1100};
    // Canyons declared in Array
    canyons = [canyon1, canyon2, canyon3, canyon4, canyon5, canyon6, canyon7];
    
    // Collectable Item Properties (Diamond)
    var diamond1 = {x_pos: 1090, y_pos: floorPos_y - 210, size: 50, isFound: false};
    var diamond2 = {x_pos: 2620, y_pos: floorPos_y - 15, size: 50, isFound: false};
    var diamond3 = {x_pos: 3260, y_pos: floorPos_y - 165, size: 50, isFound: false};
    var diamond4 = {x_pos: 3460, y_pos: floorPos_y - 165, size: 50, isFound: false};
    var diamond5 = {x_pos: 5280, y_pos: floorPos_y - 165, size: 50, isFound: false};
    var diamond6 = {x_pos: 5840, y_pos: floorPos_y - 165, size: 50, isFound: false};
    // Diamonds declared in array
    diamonds = [diamond1, diamond2, diamond3, diamond4, diamond5, diamond6];
    
    // Flagpole (banner) position
    banner = {x_pos: 6600, isReached: false};

    // Game States
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    deathSoundPlayed = false;
}


function checkIsPlayerDead()
{
    if (gameChar_y > height)  // Check if the character falls below the screen
    {
        //Decreament of lives
        lives--;
        //Restart game again if there is still life
        if (lives > 0)
        {
            init();  // Reset the game
        }
        
        // If no lives left, end the game
        else
        {
            gameOver = true;
        }
    }
}


function drawGameOver()
{
    fill(255);
    
    // Apply the Shadow Effect
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(0);
    textFont(font1, 100);
    text ("Mission", 250, height/2-100);

    // Draw "Mission Accomplished!!" message if lives remain
    if (lives > 0)
    {
        textFont(font1, 100);
        text ("Accomplished!!", 50, height/2);
    }
    
    // Draw "Failed" message if no lives left
    else
    {
        textFont(font1, 100);
        text ("Failed", 300, height/2); 
    }
}


function drawFlagpole()
{
    if (banner.isReached == false)
    {
          push(); 
          // Apply Shadow Effect
          drawingContext.shadowBlur = 30;
          drawingContext.shadowColor = color(0);
        
          // Draw the Flagpole
          stroke(0);
          strokeWeight(5);
          rectMode(CENTER);
          rect(banner.x_pos, floorPos_y - 180, 300, 150);
          line(banner.x_pos + 100, floorPos_y - 100, banner.x_pos + 100, floorPos_y);
          line(banner.x_pos - 100, floorPos_y - 100, banner.x_pos - 100, floorPos_y);
          pop();

          push();
          drawingContext.shadowBlur = 30;
          drawingContext.shadowColor = color(83, 241, 253);
          textFont(font2,45);
          fill(255);
          text("Welcome Home", banner.x_pos - 138, floorPos_y - 165);
          pop();
        
          // Anchoring point of the Banner (Flagpole)
          // fill('red');
          // ellipse(banner.x_pos, floorPos_y ,10); 

    }

}

function checkIfGameCharReachFlagpole()
{
    if (banner.isReached == false)  // Check if the banner is not reached yet
    {
        // Calculate the distance between the character and the flagpole
        var d = dist(gameChar_x, gameChar_y, banner.x_pos, floorPos_y)
        if (d < 10 && game_Score == 6)
        {
            banner.isReached = true;
            //set gameover to true
            gameOver = true;
        }
    }
}