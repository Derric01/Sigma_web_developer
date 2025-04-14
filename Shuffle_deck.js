// 🎴 Shuffle a Deck Using Fisher-Yates Algorithm

const card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

shuffle(card);
console.log(card);

// 🔁 Fisher-Yates Shuffle Algorithm
function shuffle(array) {
  // Start from the end of the array and move backwards
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const random = Math.floor(Math.random() * (i + 1));
    // Swap the current element with the randomly selected one
    [array[i], array[random]] = [array[random], array[i]];
  }
}

/*
🧠 How It Works:
- Fisher-Yates is an efficient, unbiased shuffle algorithm.
- It avoids the randomness issues of using sort(() => Math.random() - 0.5).
- Each element is swapped with a random earlier element, including itself.

🎲 Example Output:
["9", "K", "2", "J", "3", "7", "Q", "5", "4", "8", "10", "A", "6"]
*/
