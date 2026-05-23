function drawCanyon(t_canyon)
{
    // Draw the Canyon
    fill(76, 107, 143);
    rect(t_canyon.x_pos,floorPos_y,t_canyon.width,height)

    // Anchor Point for the Canyon
    // fill('red');
    // ellipse(t_canyon.x_pos, floorPos_y,10);
}

function drawCanyons()
{
    // Draw all Canyons in the Canyons Array
    for (var i = 0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
    }
}

function checkIfGameCharIsOverAnyCanyons()
{
    // Check if the Game Character is over any Canyons
    for (var i = 0; i < canyons.length; i++)
    {
        checkIfGameCharIsOverCanyon(canyons[i]);
    }
}

function checkIfGameCharIsOverCanyon(t_canyon)
{
    // Check if the Game Character is on floor
    var cond1 = gameChar_y >= floorPos_y;
    // Check if the Game Character is from left of canyon
    var cond2 = gameChar_x - gameChar_width/2 >     (t_canyon.x_pos);
    // Check if the Game Character is from right of canyon
    var cond3 = gameChar_x + gameChar_width/2 < (t_canyon.x_pos + t_canyon.width);

    // Check if the Game Character is over canyon
    if(cond1 && cond2 && cond3) 
    {
        isPlummeting = true;  //Character falls down in the canyon if all the condition satisfies
        
        // Death Sound is played if Character falls down the Canyon
        if(!deathSoundPlayed) 
        {
            deathSound.play();
            deathSound.setVolume(0.3);
            deathSoundPlayed = true;
        }
    }
}