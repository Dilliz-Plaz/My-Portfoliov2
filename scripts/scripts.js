const hero = document.getElementById("hero");
const greeting = document.getElementById("greeting");
const movealong = document.getElementById("movealong");
const games = document.getElementById("games");
const file = document.getElementById("file");
const camera = document.getElementById("camera");
const hellos = [
  "Hello",
  "Ahoj",
  "Bok",
  "Bonjour",
  "Ciao",
  "Cześć",
  "Hallo",
  "Halo",
  "Hei",
  "Hej",
  "Helo",
  "Hola",
  "Merhaba",
  "Olá",
  "Salut",
  "Szia",
  "Xin chào",
  "Γεια",
  "Привет",
  "Привіт",
  "שלום",
  "مرحبًا",
  "नमस्ते",
  "สวัสดี",
  "こんにちは",
  "你好",
  "안녕하세요",
];

let currentIndex = 0;
const swapTimer = setInterval(() => {
  greeting.classList.add("opacity-0");
  setTimeout(() => {
    greeting.textContent = hellos[currentIndex];
    greeting.classList.remove("opacity-0");
    currentIndex++;
    if (currentIndex >= hellos.length) {
      currentIndex = 0;
    }
  }, 300);
}, 2000);

movealong.classList.add("opacity-0");
setTimeout(() => {
  movealong.classList.remove("opacity-0");
}, 10000);

document.getElementById("hero").addEventListener("click", () => {
  hero.classList.add(
    "transition",
    "delay-150",
    "duration-450",
    "opacity-0",
    "hidden",
  );
});
