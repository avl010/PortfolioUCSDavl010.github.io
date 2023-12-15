// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var numRollsInput;


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
  // in h3 report how much money was won or lost and the balance
  if (dieSum <= 5){
    outcome = "You lose, please pay me $5.";
    balance -= 5;
    document.querySelector("h3").classList.remove('win'); // Remove win class
    document.querySelector("h3").classList.add('lose'); // Add lose class
  } else if (dieSum >= 9){
    outcome = "You win, I pay you $5.";
    balance += 5;
    document.querySelector("h3").classList.remove('lose'); // Remove lose class
    document.querySelector("h3").classList.add('win'); // Add win class
  } else {
    outcome = "It's a draw, nobody wins or loses.";
    document.querySelector("h3").classList.remove('win', 'lose'); // Remove win and lose classes
  }

    banner = die1 + " + " + die2 + " is: " + dieSum + "<br>" + outcome;

    // Display the current balance and outcome on the HTML page
    document.querySelector("h3").innerHTML = banner + "<br>Current Balance: $" + balance;
}

function letsPlay() {
  var numRollsInput = document.getElementById("numRollsInput").value;

  if (numRollsInput && !isNaN(numRollsInput) && numRollsInput > 0) {
      numRolls = parseInt(numRollsInput);
      var finalBalanceElement = document.getElementById("finalBalance");

      // Initialize balance to 0 before rolling
      balance = 0;
      document.querySelector("h3").innerHTML = "Current Balance: $" + balance;

      finalBalanceElement.innerHTML = ""; // Clear previous final balance

      // Start the recursive roll process
      rollMultipleTimes(0, numRolls, finalBalanceElement);
  } else {
      alert("Invalid input. Please enter a valid number of rolls.");
  }
}

function rollMultipleTimes(currentRoll, totalRolls, finalBalanceElement) {
  if (currentRoll < totalRolls) {
      // Roll the dice for the current iteration
      rollDice();
      whoWon();

      // Introduce a delay for better visualization (adjust the delay time as needed)
      setTimeout(function() {
          // Continue to the next roll
          rollMultipleTimes(currentRoll + 1, totalRolls, finalBalanceElement);
      }, 1000); // Change 1000 to the desired delay time in milliseconds
  } else {
      // Display the final balance on the HTML page after all rolls
      finalBalanceElement.innerHTML = "Game over! Your final balance is: $" + balance;
  }
}