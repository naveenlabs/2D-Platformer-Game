// Game Project - Final

// Global Variables
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;

// Variable for Side Scrolling
var cameraPosX;

// Array Variables for Scenes
var mountain;
var light;
var stars;
var clouds;
var cloudSpeed;

// Array Variables for canyons & diamonds
var canyons;
var diamonds;

// Array Variables for enemies & platforms 
var enemies;
var platforms;

// Variables for template
var game_Score;
var lives;

// Variables to draw flagpole
var flagpole;

// Variable to End Game
var gameOver;

// Variables for Key Pressed Functions
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

// Gradient Background Variables
var topcolour;
var bottomcolour;

// Sound Variables
var jumpSound;
var backgroundSound;
var diamondSound;
var deathSound;
var deathSoundPlayed;

// Font Variables
var font1;
var font2;

function preload()
{
    jumpSound = loadSound('Music/Jump.mp3');
    backgroundSound = loadSound('Music/BackGround.mp3');
    diamondSound = loadSound('Music/Diamond.mp3');
    deathSound = loadSound('Music/Death.mp3');

    font1 = loadFont('Fonts/Bungee.ttf');
    font2 = loadFont('Fonts/Honk.ttf');
}


function setup()
{
    createCanvas(1024, 576);

    game_Score = 0;
    lives = 3;
    
    // Initialize Game Character Positions
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    //To check if character is near Canyon
    gameChar_width = 20;
    
    // Camera Position
    cameraPosX = 0;
    
    // Initialize Ground Level
    floorPos_y = height * 3/4;
    
    //2 Background Gradient Colours
    topcolour = color(14, 17, 44, 100); 
    bottomcolour = color(99, 141, 180, 180);

    // Array for Stars
    stars = [];
    for (var i = 0; i < 1000; i++)
    {
        stars.push(new Star());
    }
    
    //Mountain Positions declared in Array
    mountain = [{x_pos: 150, y_pos: floorPos_y - 330, size: 0.6},
                {x_pos: 2300, y_pos: floorPos_y - 330, size: 0.6},
                {x_pos: 4350, y_pos: floorPos_y - 330, size: 0.6}];
    
    //Cloud Positions declared in Array
    clouds = [{x: 100, y: 80, scale: 1.3},
              {x: 400, y: 100, scale: 1.5},
              {x: 700, y: 70, scale: 1.2},
              {x: 1000, y: 100, scale: 1.4},
              {x: 1300, y: 120, scale: 1.6},
              {x: 1600, y: 70, scale: 1.2},
              {x: 1900, y: 90, scale: 1.1},
              {x: 2100, y: 110, scale: 1.3},
              {x: 2400, y: 130, scale: 1.5},
              {x: 2700, y: 100, scale: 1.6},
              {x: 3000, y: 110, scale: 1.3},
              {x: 3300, y: 70, scale: 1.1},
              {x: 3600, y: 100, scale: 1.4},
              {x: 3900, y: 80, scale: 1.5},
              {x: 4200, y: 120, scale: 1.3},
              {x: 4500, y: 150, scale: 1.2},
              {x: 4800, y: 110, scale: 1.4},
              {x: 5100, y: 100, scale: 1.3},
              {x: 5400, y: 70, scale: 1.2},
              {x: 5700, y: 130, scale: 1.1},
              {x: 6000, y: 110, scale: 1.4},
              {x: 6300, y: 80, scale: 1.2},
              {x: 6600, y: 120, scale: 1.4},
              {x: 6900, y: 100, scale: 1.5},
              {x: 7200, y: 130, scale: 1.6}];
    cloudSpeed = 1; 
    
    // Light Positions declared in Array
    light = [{x_pos: 750, y_pos: floorPos_y, size: 0.5}, 
             {x_pos: 1450, y_pos: floorPos_y, size: 0.5}, 
             {x_pos: 140, y_pos: floorPos_y, size: 0.5},
             {x_pos: 1720, y_pos: floorPos_y, size: 0.5},
             {x_pos: 2250, y_pos: floorPos_y, size: 0.5},
             {x_pos: 2920, y_pos: floorPos_y, size: 0.5},
             {x_pos: 3750, y_pos: floorPos_y, size: 0.5},
             {x_pos: 4050, y_pos: floorPos_y, size: 0.5},
             {x_pos: 4350, y_pos: floorPos_y, size: 0.5},
             {x_pos: 4950, y_pos: floorPos_y, size: 0.5}]

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
    // Diamonds declared in Array
    diamonds = [diamond1, diamond2, diamond3, diamond4, diamond5, diamond6];
    
    // Enemies declared in Array
    enemies = [];
    enemies.push(new Enemy(3400, floorPos_y + 150,0.4, 500));
    enemies.push(new Enemy(5200, floorPos_y + 150, 0.4, 700));
    enemies.push(new Enemy(6300, floorPos_y + 150, 0.4, 700));
    enemies.push(new Enemy(9100, floorPos_y + 150, 0.4, 500));
    enemies.push(new Enemy(10300, floorPos_y + 150, 0.4, 700));
    enemies.push(new Enemy(11300, floorPos_y + 150, 0.4, 700));
    enemies.push(new Enemy(13300, floorPos_y - 350, 0.4, 400));

    // Platforms declared in Array
    platforms = [];
    platforms.push(new createPlatforms(850, floorPos_y - 100, 150, 30));
    platforms.push(new createPlatforms(1020, floorPos_y - 200, 150, 25));
    platforms.push(createPlatforms(1190, floorPos_y - 100, 150, 20));
    platforms.push(createPlatforms(1850, floorPos_y - 100, 100, 20));
    platforms.push(createPlatforms(2050, floorPos_y - 100, 100, 20));
    platforms.push(createPlatforms(3050, floorPos_y - 100, 130, 20));
    platforms.push(createPlatforms(3200, floorPos_y - 150, 130, 30));
    platforms.push(createPlatforms(3400, floorPos_y - 150, 130, 30));
    platforms.push(createPlatforms(3550, floorPos_y - 100, 130, 20));
    platforms.push(createPlatforms(5050, floorPos_y - 100, 130, 20));
    platforms.push(createPlatforms(5220, floorPos_y - 150, 130, 30));
    platforms.push(createPlatforms(5420, floorPos_y - 200, 300, 40));
    platforms.push(createPlatforms(5780, floorPos_y - 150, 130, 30));
    platforms.push(createPlatforms(5970, floorPos_y - 100, 130, 20));

    // 
    init();

    //Sets anglemode to Degrees
    angleMode(DEGREES);

    //Character States
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    gameOver = false;
}

function draw()
{
    //Side Scrolling
    cameraPosX = gameChar_x - width/2;  //Positioning Camera Position

    drawBackground();

    //Ground
    noStroke();
    fill(230, 232, 224); 
    rect(0, floorPos_y, width, height);
    fill(29, 45, 81);
    rect(0, floorPos_y + 30, width, height);

    //Start of Side Scrolling
    push();
    translate(-cameraPosX, 0);    //To make sure the Game Character stays in the middle and only the background moves
    
    // Call Function to draw the Stars
    drawStars();

    // Call Function to draw the Mountains
    drawMountains();

    // Call Function to draw the Clouds
    drawClouds();

    // Call Function to draw the Lights
    drawLights();

    // Call Function to draw the Canyons
    drawCanyons();

    // Call Function to check if the Game Character is over Canyons
    checkIfGameCharIsOverAnyCanyons();

    // Call Function to draw the diamonds
    drawDiamonds();

    // Call Function to check if Game Character is in the range of the Diamond
    checkIfGameCharInAnyDiamondRange();

    // Call Function to draw the Flag Pole
    drawFlagpole();

    // Call Functionn to check if game char has reached the flag pole
    checkIfGameCharReachFlagpole();

    // Call Function to draw Platforms & Enemies
    drawPlatforms();
    drawEnemies();

    // Call Function to draw the Game Character
    drawGameCharacter();

    //End of Side Scrolling
    pop();

    // Call Function to draw the Life Tokens
    drawLifeTokens();
    // Call Function to draw the Game Score
    drawGameScore();

               ///////////INTERACTION CODE//////////
    
    //Conditional statements to move the Game Character

    //To fall down in Canyon
    if(isPlummeting == true)  //Character falls down in the canyon if all the cond1, cond2 & cond3 satisfies
    {
        gameChar_y += 10;     //Character falls down in the canyon with 10 pixel speed.
        isLeft = false;       //To make not the character turn left after falling down the canyon
        isRight = false;      //To make not the character turn right after falling down the canyon
        checkIsPlayerDead();
        return;

    }
    
    if (gameChar_y < floorPos_y)    //Condition for falling after the Character jump
    {
        var isContact = false;
        for (var i = 0; i < platforms.length; i++)
        {
            if (platforms[i].checkContact(gameChar_x, gameChar_y))  // Check if character makes contact with any platform
            {
                isFalling = false;
                isContact = true;
                break;
            }
        }
        if (isContact == false)
        {    
            gameChar_y += 4;             //Character falls down back to ground by 4 pixels
            isFalling = true;
        }
    } 
    
    else 
    {
        gameChar_y = floorPos_y; 
        isFalling = false;
    } 

    if (isLeft == true)     //Condition to move Character left
    {
        gameChar_x -= 5;    //Charcater moves to the left by 5 pixel speed
    }

    if (isRight == true)    //Condition to move Character right
    {
        gameChar_x += 5;    //Character moves to the right by 5 pixel speed
    } 
}
    

// if statements to control the animation of the Game Character when keys are pressed
function keyPressed()
{
    // Call function to play the Background Music
    backGroundMusic();

    //if game over don't detect anymore key
    if (gameOver)
    {
        return;
    }
    
    //if statements to control the animation of the character when keys are pressed    
    if (keyCode == LEFT_ARROW || keyCode == 65)     
    {
        isLeft = true;          
    }
    
    else if (keyCode == RIGHT_ARROW || keyCode == 68) 
    {
        isRight = true;         
    }

    if (keyCode == 32 || keyCode == UP_ARROW || keyCode == 87)         
    {
        if (!isFalling && !isPlummeting)  
        {
            gameChar_y -= 170;      
            isFalling = true;
            jumpSound.play();
            jumpSound.setVolume(0.2);
        }
    }
}

function keyReleased() 
{
    //if game over don't detect anymore key
    if (gameOver)
    {
        return;
    }

    // if statements to control the animation of the character when keys are released 
    if (keyCode === LEFT_ARROW || keyCode == 65)     
    {
        isLeft = false;
    }
    else if (keyCode == RIGHT_ARROW || keyCode == 68) 
    {
        isRight = false;
    }
} 