function guessingGame() {
  const correctAnswer = Math.floor(Math.random() * 100);
  let isOver = false;
  let numOfGuesses = 0;

  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numOfGuesses++;
    if (num === correctAnswer) {
      isOver = true;
      const guess = numOfGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numOfGuesses} ${guess}.`;
    }
    if (num < correctAnswer) return `${num} is too low`;
    if (num > correctAnswer) return `${num} is too high`;
  };
}

module.exports = { guessingGame };
