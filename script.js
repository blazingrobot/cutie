// Select DOM elements
const greeting = document.querySelector(".greeting"); // Update class name if needed
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Handle 'Yes' button click
yesBtn.addEventListener("click", () => {
    greeting.style.display = "none"; // Hide the greeting
    question.textContent = "I love you too! 😘";
    gif.src = "https://media.tenor.com/6ZrCgdFco58AAAAi/happy.gif";
});

// Handle 'No' button hover
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
