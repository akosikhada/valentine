const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "./assets/cat-heart.gif",
  "./assets/rusure.gif",
  "./assets/3shocked-1.gif",
  "./assets/4.crying.gif",
  "./assets/5.crying.gif",
  "./assets/idc.gif",
];

gifs.forEach((gifSrc) => {
  const img = new Image();
  img.src = gifSrc;
});

no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "./assets/sigurado-ka-ba.gif";
    text.innerHTML = "Sigurado ka na ba diyan?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "./assets/gulat-na-gulat.gif";
    text.innerHTML = "Ayaw mo talaga? 🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "./assets/iyakin.gif";
    text.innerHTML = "Legit ba yan? 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "./assets/iyak-malala.gif";
    text.innerHTML = "No Choice ka na, pindutin mo na yan";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "./assets/halik.gif";
  text.innerHTML = "Okay, Bembangan Time!";
  yes.innerHTML = "I Love You ❤️";
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
