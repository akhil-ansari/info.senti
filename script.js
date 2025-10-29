const bubbles = document.querySelectorAll(".bubble");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayText = document.getElementById("overlay-text");
const closeBtn = document.getElementById("close-btn");

// Random bubble positions
bubbles.forEach(bubble => {
  bubble.style.top = `${Math.random() * 80 + 10}%`;
  bubble.style.left = `${Math.random() * 80 + 10}%`;
});

bubbles.forEach(bubble => {
  bubble.addEventListener("click", () => {
    overlayTitle.textContent = bubble.dataset.title;
    overlayText.textContent = bubble.dataset.text;
    overlay.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
