const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
const floatingHearts = document.querySelector(".floating-hearts");
const warningMessage = document.getElementById("warning-message");
let count = 2;

// Create floating hearts
function createFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.opacity = Math.random() * 0.4 + 0.2;
    heart.style.fontSize = Math.random() * 15 + 8 + "px";
    heart.innerHTML = "❤️";
    floatingHearts.appendChild(heart);
  }
}

createFloatingHearts();

// Warning messages for when mouse hovers over "No" button
const romanticWarnings = [
  "My darling, in every beat of my heart lies a wish for your 'Yes'... ❤️",
  "Love asked me to tell you that 'Yes' is the path to my heart... ❤️",
  "Each moment apart feels like eternity; please choose 'Yes'... ❤️",
  "My heart trembles at the thought of your 'No'... Choose love... ❤️",
  "Like a flower needs sunlight, my heart needs your 'Yes'... ❤️",
];

const gifs = [
  "./assets/puso-ng-pusa.gif",
  "./assets/sigurado-ka-ba.gif",
  "./assets/gulat-na-gulat.gif",
  "./assets/iyakin.gif",
  "./assets/iyak-malala.gif",
  "./assets/halik.gif",
];

// Preload gifs
gifs.forEach((gifSrc) => {
  const img = new Image();
  img.src = gifSrc;
});

// Add subtle button hover effect
function addButtonHoverEffects() {
  yes.addEventListener("mouseenter", () => {
    yes.style.transform = "translateY(-2px)";
    warningMessage.textContent =
      "Your 'Yes' would make me the happiest person alive... ❤️";
    warningMessage.style.color = "#ffb6c1";
    warningMessage.style.textShadow =
      "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 105, 180, 0.5)";
    warningMessage.style.borderColor = "rgba(255, 139, 171, 0.6)";
  });

  yes.addEventListener("mouseleave", () => {
    yes.style.transform = "translateY(0)";
    warningMessage.textContent = romanticWarnings[0];
    warningMessage.style.color = "#ffb6c1";
    warningMessage.style.textShadow =
      "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 105, 180, 0.5)";
    warningMessage.style.borderColor = "rgba(255, 105, 180, 0.4)";
  });

  no.addEventListener("mouseenter", () => {
    no.style.transform = "translateY(-2px)";
    // Change the warning message to a random romantic plea
    warningMessage.textContent =
      romanticWarnings[Math.floor(Math.random() * romanticWarnings.length)];
    warningMessage.style.color = "#ff8599";
    warningMessage.style.textShadow =
      "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 12px rgba(255, 139, 171, 0.7)";
    warningMessage.style.borderColor = "rgba(255, 139, 171, 0.6)";
    // Add pulse effect to the warning
    warningMessage.style.animation =
      "fadeInWarning 0.5s ease forwards, glowWarning 1s infinite alternate";
  });

  no.addEventListener("mouseleave", () => {
    no.style.transform = "translateY(0)";
    warningMessage.textContent = romanticWarnings[0];
    warningMessage.style.color = "#ffb6c1";
    warningMessage.style.textShadow =
      "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 105, 180, 0.5)";
    warningMessage.style.borderColor = "rgba(255, 105, 180, 0.4)";
    warningMessage.style.animation =
      "fadeInWarning 1s ease forwards, glowWarning 3s infinite alternate";
  });
}

addButtonHoverEffects();

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./assets/sigurado-ka-ba.gif";
    text.innerHTML = "My heart whispers your name. Are you sure?";
    yes.style.width = "65%";
    no.style.width = "30%";
    warningMessage.textContent =
      "Your love is the poetry of my soul. Please say 'Yes'... ❤️";
    count++;
  } else if (count == 3) {
    gif.src = "./assets/gulat-na-gulat.gif";
    text.innerHTML = "Every star in my sky is for you. Still no?";
    yes.style.width = "75%";
    no.style.width = "20%";
    warningMessage.textContent =
      "I've saved every dream for you. Choose 'Yes'... ❤️";
    count++;
  } else if (count == 4) {
    gif.src = "./assets/iyakin.gif";
    text.innerHTML = "My soul aches for your love. Please?";
    yes.style.width = "85%";
    no.style.fontSize = "1.2rem";
    no.style.width = "12%";
    warningMessage.textContent =
      "One 'Yes' from you would light up my entire universe... ❤️";
    count++;
  } else if (count == 5) {
    gif.src = "./assets/iyak-malala.gif";
    text.innerHTML = "You've stolen my heart already. Say yes!";
    yes.style.width = "96%";
    no.style.display = "none";
    warningMessage.textContent =
      "Without your love, my heart is just a shadow. Choose 'Yes'... ❤️";
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./assets/halik.gif";
  text.innerHTML = "Forever yours, in every heartbeat ❤️";
  yes.innerHTML = "I Love You ❤️";
  yes.style.width = "96%";
  no.style.display = "none";
  warningMessage.textContent = "You've made my heart bloom with happiness! ❤️";
  warningMessage.style.color = "#ffb6c1";
  warningMessage.style.textShadow =
    "0 2px 4px rgba(0, 0, 0, 0.8), 0 0 12px rgba(255, 139, 171, 0.7)";
  warningMessage.style.borderColor = "rgba(255, 139, 171, 0.6)";
  warningMessage.style.boxShadow =
    "0 4px 15px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 105, 180, 0.35)";

  // Add celebration effect
  celebrateYes();

  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});

// Celebration effect when "Yes" is clicked
function celebrateYes() {
  // Add extra floating hearts
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.classList.add("celebration-heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = Math.random() * 100 + "vh";
      heart.style.animationDuration = Math.random() * 3 + 2 + "s";
      heart.style.fontSize = Math.random() * 25 + 10 + "px";
      heart.innerHTML = "❤️";
      document.body.appendChild(heart);

      // Remove after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }
}

yearSpan.textContent = currentYear;
