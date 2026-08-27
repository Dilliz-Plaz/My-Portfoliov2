// 1. Grab all the triggers and the modal elements
const triggers = document.querySelectorAll(".js-popup-trigger");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementById("close-modal");
// consts for download
const downloadBtn = document.getElementById("imagelink");
const modalImage = document.getElementById("modal-image");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const parent = this.closest(".relative");

    const imgTarget = parent.querySelector("img");

    modalImg.src = imgTarget.src;
    modalImg.alt = imgTarget.alt;

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

//logic for download

downloadBtn.addEventListener("click", function () {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = modalImage.naturalWidth;
  canvas.height = modalImage.naturalHeight;

  ctx.drawImage(modalImage, 0, 0);

  const fontSize = canvas.width * 0.03;
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";

  ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
  ctx.shadowBlur = 5;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;

  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  const padding = canvas.width * 0.02;

  ctx.fillText(
    "© Dylan Seifert",
    canvas.width - padding,
    canvas.height - padding,
  );

  const watermarkedDataUrl = canvas.toDataURL("image/jpeg", 0.9);

  const tempLink = document.createElement("a");
  tempLink.href = watermarkedDataUrl;

  const originalSrc = modalImage.src.split("/").pop() || "image";
  tempLink.download = `watermarked-${originalSrc}`;

  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
});
