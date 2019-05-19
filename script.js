var doorimage1 = document.getElementById("door1") ;
var doorimage2 = document.getElementById("door2") ;
var doorimage3 = document.getElementById("door3") ;
var startbutton=document.getElementById("start");
var botdoorpath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
var closedDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
var opdoor1,opdoor2,opdoor3;
var numClosedDoors;
var currentlyPlaying= true;
function isBot(door)
{
  if (door.src === botdoorpath) {
  return true;}
 	else {
  return false;
	}
}

function isClicked(door)
{
  if (door.src === closedDoorPath) {
  return false;}
 	else {
  return true;
	}
}

function playDoor(door)
{
  numClosedDoors--;
  if (numClosedDoors == 0 && isBot(door)) {
  gameOver('win');
	}
  else if(isBot(door)){
    gameOver('');
  }
}


function randomChoreDoorGenerator()
{
  numClosedDoors=3;
  var botdoor= Math.floor(Math.random()*numClosedDoors);
  if(botdoor==0)
    {
      opdoor1=botdoorpath;
      opdoor3=beachDoorPath;
      opdoor2=spaceDoorPath;
    }
  else if(botdoor==1)
    {
      opdoor1=spaceDoorPath;
      opdoor3=botdoorpath;
      opdoor2=beachDoorPath ;
    }
  else{
    opdoor1=beachDoorPath ;
    opdoor3=spaceDoorPath;
    opdoor2=botdoorpath;
  }

}



function opendoor1()
{
  if((!isClicked(doorimage1)) && currentlyPlaying)
  {doorimage1.src=opdoor1;
  playDoor(doorimage1);
  }
}
function opendoor2()
{
  if(!isClicked(doorimage2) && currentlyPlaying)
  {doorimage2.src=opdoor2;
  playDoor(doorimage2);}
}
function opendoor3()
{
  if(!isClicked(doorimage3) && currentlyPlaying)
  {doorimage3.src=opdoor3;
  playDoor(doorimage3);}
}
function gameOver(status)
{
  if(status=='win')
    {
      startbutton.innerHTML="you win! Play Again?";
    }
  else
    {
      startbutton.innerHTML="Game Over :/Play Again?";
    }
  currentlyPlaying=false;
}
function startRound(){
  doorimage1.src=closedDoorPath;
  doorimage2.src=closedDoorPath;
  doorimage3.src=closedDoorPath;
  numClosedDoors=3;
  startbutton.innerHTML="Good Luck!";
  currentlyPlaying=true;
  randomChoreDoorGenerator();
}
startRound();
