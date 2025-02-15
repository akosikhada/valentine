const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
let count = 2;

const gifs = [
  "./assets/puso-ng-pusa.gif",
  "./assets/sigurado-ka-ba.gif",
  "./assets/gulat-na-gulat.gif",
  "./assets/iyakin.gif",
  "./assets/iyak-malala.gif",
  "./assets/halik.gif",
];

gifs.forEach((gifSrc) => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./assets/sigurado-ka-ba.gif";
    text.innerHTML = "No? 🤔";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./assets/gulat-na-gulat.gif";
    text.innerHTML = "Still No? 😳";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./assets/iyakin.gif";
    text.innerHTML = "Legit? 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "./assets/iyak-malala.gif";
    text.innerHTML = "You have no choice, pick Yes! 😭";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./assets/halik.gif";
  text.innerHTML = "Okay, Bembangan Time! 💑";
  yes.innerHTML = "I Love You ❤️";
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});

yearSpan.textContent = currentYear;
