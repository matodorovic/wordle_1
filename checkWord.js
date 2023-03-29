export default function wordle(correctWord, guess) {
  let correctLetters = correctWord.toLowerCase().split("");
  let guessedLetters = guess.toLowerCase().split("");

  console.log(correctLetters);
  console.log(guessedLetters);

  let resultArr = [];
  let correct = [];
  let misplaced = [];

  if (correctLetters.length != guessedLetters.length) {
    console.log("Words does not have the same length");
  } else {
    for (let i = 0; i < correctLetters.length; i++) {
      if (correctLetters[i] === guessedLetters[i]) {
        resultArr.push({ letter: guessedLetters[i], result: "correct" });
        correct.push(guessedLetters[i]);
      } else if (correctLetters.includes(guessedLetters[i])) {
        resultArr.push({ letter: guessedLetters[i], result: "misplaced" });
        misplaced.push(guessedLetters[i]);
      } else {
        resultArr.push({ letter: guessedLetters[i], result: "incorrect" });
      }
    }

    for (let j = 0; j < correctLetters.length; j++) {
      if (
        correctLetters.includes(guessedLetters[j]) &&
        correct.includes(guessedLetters[j]) &&
        resultArr[j].result === "misplaced"
      ) {
        resultArr.splice(j, 1, {
          letter: guessedLetters[j],
          result: "incorrect",
        });
        guessedLetters[j] = "";
      }
    }

    console.log(resultArr);

    return resultArr;
  }
}

wordle("cykla", "hallå");

