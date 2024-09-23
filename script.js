// Select DOM elements
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Handle 'Yes' button click
yesBtn.addEventListener("click", () => {
    question.textContent = "I love you too! 😘";
    gif.src = "https://media.tenor.com/6ZrCgdFco58AAAAi/happy.gif";
});

// Handle 'No' button hover
noBtn.addEventListener("mouseover", () => {
    // Ensure button stays within window boundaries
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    // Generate random position within boundaries
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Move the button to the new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
