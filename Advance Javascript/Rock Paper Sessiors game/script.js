// Select all weapon elements (rock, paper, scissors buttons) from the DOM.
const weapons = document.querySelectorAll(".weapons");

// Select the wrapper element, used to control game-related visuals.
const wrapper = document.querySelector(".wrapper");

// Select DOM elements for the scores: user, computer, and draw counts.
const you = document.querySelector(".you"); // Element to display the user's score.
const draw = document.querySelector(".draw"); // Element to display the draw count.
const comp = document.querySelector(".comp"); // Element to display the computer's score.

// Select DOM elements for displaying the user's and computer's moves visually.
const yourMove = document.querySelector(".your-move img"); // User's move image.
const compMove = document.querySelector(".comp-move img"); // Computer's move image.

// Select buttons for game control and resetting.
const playAgain = document.querySelector(".play-again"); // Button to replay the current game.
const restart = document.querySelector(".restart"); // Button to reset the game completely.
const result = document.querySelector(".result"); // Element to display the game result text.

// Define the outcomes of the game based on user and computer moves.
// Each user move maps to possible computer moves with their respective result (win, lose, draw).
const outcomes = {
  rock: { scissors: "win", paper: "lose", rock: "draw" },
  paper: { rock: "win", scissors: "lose", paper: "draw" },
  scissors: { paper: "win", rock: "lose", scissors: "draw" },
};

// Function to determine and display the result of the game.
function showResult(userMove, computerMoves) {
  // Get the result ("win", "lose", or "draw") based on the user's and computer's moves.
  const resultType = outcomes[userMove][computerMoves];
  
  // Update scores and result text based on the determined outcome.
  if (resultType === "win") {
    // Increment the user's score and update the result text to indicate a win.
    you.innerText = parseInt(you.innerText) + 1;
    result.innerText = "You win!";
  } else if (resultType === "lose") {
    // Increment the computer's score and update the result text to indicate a loss.
    comp.innerText = parseInt(comp.innerText) + 1;
    result.innerText = "Computer wins!";
  } else {
    // Increment the draw count and update the result text to indicate a draw.
    draw.innerText = parseInt(draw.innerText) + 1;
    result.innerText = "It's a draw!";
  }
}

// Function to randomly generate the computer's move.
function Computer() {
  // Define the array of possible moves.
  const moveArray = ["rock", "paper", "scissors"];
  // Generate a random index (0, 1, or 2) to select a move from the array.
  const computerChoice = Math.floor(Math.random() * 3);
  return moveArray[computerChoice];
}

// Add click event listeners to each weapon (rock, paper, scissors).
weapons.forEach((wep) => {
  wep.addEventListener("click", () => {
    // Get the user's move based on the weapon's ID attribute.
    const userMove = wep.id;

    // Generate the computer's random move using the Computer() function.
    const computerMoves = Computer();

    // Add animation classes to the move images for visual effect.
    yourMove.classList.add("anim");
    compMove.classList.add("anim");

    // Use a timeout to delay the result display for better user experience.
    setTimeout(() => {
      // Remove animation classes after the timeout.
      yourMove.classList.remove("anim");
      compMove.classList.remove("anim");

      // Update move images based on the user's and computer's choices.
      yourMove.src = `./images/${userMove}.png`;
      compMove.src = `./images/${computerMoves}.png`;

      // Display the result of the game.
      showResult(userMove, computerMoves);

      // Add the "winner" class to the wrapper element for visual feedback.
      wrapper.classList.add("winner");
    }, 1000); // Delay of 1 second (1000 ms).
  });
});

// Add event listener to the "Play Again" button for resetting visuals and replaying the game.
playAgain.addEventListener("click", () => {
  // Remove the "winner" class from the wrapper to hide the result screen.
  wrapper.classList.remove("winner");

  // Reset the move images to the default "rock" images for both user and computer.
  yourMove.src = `./images/rock.png`;
  compMove.src = `./images/rock.png`;
});

// Add event listener to the "Restart" button for resetting the game completely.
restart.addEventListener("click", () => {
  // Reset scores to zero.
  you.innerText = 0;
  comp.innerText = 0;
  draw.innerText = 0;

  // Reset move images to default "rock".
  yourMove.src = `./images/rock.png`;
  compMove.src = `./images/rock.png`;

  // Clear the result message.
  result.innerText = "";

  // Remove the "winner" class from the wrapper to reset visual styles.
  wrapper.classList.remove("winner");
});
