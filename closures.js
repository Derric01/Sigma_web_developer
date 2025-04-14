/*
==============================
🔐 Closures in JavaScript (Real Examples)
==============================

📘 A closure is a function that has access to its outer function’s scope 
even after the outer function has returned.

✅ Closures help us:
- Preserve state (like a score or counter)
- Encapsulate logic (create "private" variables)
- Build powerful reusable functions
*/

// 🔹 Example 1: Basic Closure
function outer() {
    let message = "hello whats so good!!";

    function inner() {
        console.log(message); // inner has access to message
    }

    inner(); // prints: hello whats so good!!
}
outer();

// 🔹 Example 2: Counter using Closure
function counter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`count increased to ${count}`);
    }

    function getcount() {
        return count;
    }

    // Return both functions to allow external access
    return { increment, getcount };
}

const co = counter();
co.increment(); // count: 1
co.increment(); // count: 2
co.increment(); // count: 3
co.increment(); // count: 4
co.increment(); // count: 5
co.increment(); // count: 6

console.log(`The current count is ${co.getcount()}`); // 6

// 🔹 Example 3: Game Score Tracker using Closure
function CreateGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points} pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points} pts`);
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore };
}

const game = CreateGame(); // No need for 'new' with regular functions

game.increaseScore(8);  // +8 pts
game.decreaseScore(2);  // -2 pts
game.increaseScore(8);  // +8 pts

console.log(`The final score is ${game.getScore()}`); // 14

/*
==============================
🧠 Summary:
==============================
- Closures = functions + remembered variables from outer scope.
- Used for:
  → Data privacy (no direct access to `score`, `count`)
  → Maintaining state between function calls
  → Cleaner and more modular code

💡 Pro Tip:
Avoid using closures inside loops with `var` (use `let` instead) to prevent weird bugs!
*/
