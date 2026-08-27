// 1. Grab all the triggers and the modal elements
const triggers = document.querySelectorAll(".js-popup-trigger");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementById("close-modal");
const openImg = document.getElementById("imagelink");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const parent = this.closest(".relative");

    const imgTarget = parent.querySelector("img");

    modalImg.src = imgTarget.src;
    modalImg.alt = imgTarget.alt;
    openImg.href = imgTarget.src;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  modalImg.src = "";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
