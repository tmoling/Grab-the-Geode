//calculation for random number 19 to 120
var random = Math.floor(Math.random() * 120) + 19
//calculation for random number 1 to 12--four crystals
var number1 = Math.floor(Math.random() * 12) + 1
var number2 = Math.floor(Math.random() * 12) + 1
var number3 = Math.floor(Math.random() * 12) + 1
var number4 = Math.floor(Math.random() * 12) + 1
//var for current score set to 0
var userTotal = 0;
//var for wins and losses
var wins = 0;
var losses = 0;

//gives text for "random number" digits
//must be outside of function for number to be visible at beginning of game
//this id was used in html
$('#randomNumber').text(random);

//must be outside of function for number to be visible at beginning of game
//id was used in html
$('#numberOfWins').text(wins);
$('#numberOfLosses').text(losses);

function reset() {
  //calling variables in function
  random = Math.floor(Math.random() * 120) + 19;
  number1 = Math.floor(Math.random() * 12) + 1;
  number2 = Math.floor(Math.random() * 12) + 1;
  number3 = Math.floor(Math.random() * 12) + 1;
  number4 = Math.floor(Math.random() * 12) + 1;
  userTotal = 0;
  //must be within fuction in order to reset current to 0
  $('#currentScore').text(userTotal);
  $('#randomNumber').text(random);
}

//function to reset the wins
function winningTime() {
  alert("Congratulations! It's crystal clear you're an expert.");
  wins++;
  $('#numberOfWins').text(wins);
  reset();
}

//function to reset the losses
function bigLoser() {
  alert("It's crystal clear you need more practice! Try again.");
  losses++;
  $('#numberOfLosses').text(losses);
  reset()
}


//functions for generating random numbers on crystals
//random number is assigned with mouse click
//referencing number1(math.random) var
//make text for random number appear on screen
//player wins if current score adds up to random numbers...lose if goes over

$('#firstGeode').on('click', function () {
  userTotal = userTotal + number1;
  $('#currentScore').text(userTotal);
  if (userTotal === random) {
    winningTime();
  }
  else if (userTotal > random) {
    bigLoser();
  }
})
$('#secondGeode').on('click', function () {
  userTotal = userTotal + number2;
  $('#currentScore').text(userTotal);
  if (userTotal === random) {
    winningTime();
  }
  else if (userTotal > random) {
    bigLoser();
  }
})
$('#thirdGeode').on('click', function () {
  userTotal = userTotal + number3;
  $('#currentScore').text(userTotal);

  if (userTotal === random) {
    winningTime();
  }
  else if (userTotal > random) {
    bigLoser();
  }
})
$('#fourthGeode').on('click', function () {
  userTotal = userTotal + number4;
  $('#currentScore').text(userTotal);

  if (userTotal === random) {
    winningTime();
  }
  else if (userTotal > random) {
    bigLoser();
  }
});   