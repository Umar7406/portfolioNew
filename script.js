// Mobile Navbar Toggle
const navbar = document.querySelector(".dropdown");
const links = document.querySelectorAll(".dropdown .links a");

function hamburg() {
    navbar.style.transform = "translateY(0px)";
}
function cancel() {
    navbar.style.transform = "translateY(-500px)";
}

// Close Navbar on Clicking Outside
document.addEventListener("click", (event) => {
    if (!navbar.contains(event.target) && !event.target.classList.contains("hamburg")) {
        cancel();
    }
});

// Close Navbar After Clicking a Link
links.forEach(link => {
    link.addEventListener("click", cancel);
});

// Typewriter Effect
const texts = ["DEVELOPER", "DESIGNER", "PROGRAMMER"];
const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;
let speed = 100;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;