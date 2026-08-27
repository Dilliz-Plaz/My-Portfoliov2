const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
//Menu//
menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("text-white");
  menubtn.classList.toggle("rotate-90");
  menubtn.classList.toggle("z-100");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("opacity-0");
      menu.classList.add("opacity-100");
    }, 300);
  } else {
    menu.classList.remove("opacity-100");
    menu.classList.add("opacity-0");

    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    menu.classList.add("hidden");
  }
});
