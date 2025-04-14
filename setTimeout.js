const startBtn = document.getElementById("startBtn");
const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");

startBtn.addEventListener("click", () => {
  messageEl.style.opacity = 0;
  messageEl.textContent = "";
  
  let seconds = 5;
  countdownEl.textContent = `⏳ ${seconds}`;

  const interval = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      countdownEl.textContent = `⏳ ${seconds}`;
    } else {
      clearInterval(interval);
      countdownEl.textContent = "";
      showMessage();
    }
  }, 1000);
});

function showMessage() {
  setTimeout(() => {
    messageEl.textContent = "🎉 Boom! You waited patiently!";
    messageEl.style.opacity = 1;
  }, 500);
}
