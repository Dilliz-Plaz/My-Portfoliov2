document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MEMORY EXPIRATION LOGIC ---
  const MEMORY_DAYS = 7;
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const currentTime = new Date().getTime();

  let storedData = JSON.parse(localStorage.getItem("socialMemory"));

  if (storedData && currentTime > storedData.expiresAt) {
    storedData = null;
    localStorage.removeItem("socialMemory");
  }

  if (!storedData) {
    storedData = {
      clicks: [],
      expiresAt: currentTime + MEMORY_DAYS * MS_PER_DAY,
    };
  }

  const clickedLinks = storedData.clicks;

  // --- 2. URL LOGIC ---
  const params = new URLSearchParams(window.location.search);
  const showParam = params.get("show");
  const allowedLinks = showParam ? showParam.split(",") : null;

  // Instantly wipe the ?show= parameter from the address bar so users can't see or edit it
  if (window.location.search) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // --- 3. FILTER & CLICK TRACKING LOGIC ---
  const allLinks = document.querySelectorAll(".social-container [data-social]");

  allLinks.forEach((link) => {
    const socialName = link.getAttribute("data-social");

    // If no ?show parameter exists, hiddenByUrl becomes false, allowing all links to show
    const hiddenByUrl =
      allowedLinks !== null && !allowedLinks.includes(socialName);

    const hiddenByMemory = clickedLinks.includes(socialName);

    if (hiddenByUrl || hiddenByMemory) {
      link.style.display = "none";
    } else {
      link.addEventListener("click", () => {
        if (!clickedLinks.includes(socialName)) {
          clickedLinks.push(socialName);
          storedData.expiresAt =
            new Date().getTime() + MEMORY_DAYS * MS_PER_DAY;
          localStorage.setItem("socialMemory", JSON.stringify(storedData));
        }

        setTimeout(() => {
          link.style.display = "none";
        }, 100);
      });
    }
  });
});
