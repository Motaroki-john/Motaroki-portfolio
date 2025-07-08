// Hamburger Menu Toggle
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "Data Analyst",
    "Problem Solver",
    "Data Enthusiast"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

if (!textElement) {
    console.error("Typewriter text element not found!");
} else {
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElement.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000); // Wait 1 second before erasing
        }
    }

    function eraseText() {
        if (textElement.innerHTML.length > 0) {
            textElement.innerHTML = textElement.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50); // Faster erase speed
        } else {
            textIndex = (textIndex + 1) % texts.length; // Loop through texts array
            characterIndex = 0;
            setTimeout(typeWriter, 500); // Wait 0.5 seconds before typing next text
        }
    }

    window.onload = typeWriter;

    // Optional: Pause typewriter on hover (uncomment to enable)
    /*
    let timeoutId;

    textElement.addEventListener("mouseover", () => {
        clearTimeout(timeoutId);
    });

    textElement.addEventListener("mouseout", () => {
        if (characterIndex < texts[textIndex].length) {
            timeoutId = setTimeout(typeWriter, speed);
        } else if (textElement.innerHTML.length === 0) {
            timeoutId = setTimeout(typeWriter, 500);
        } else {
            timeoutId = setTimeout(eraseText, 50);
        }
    });
    */
}