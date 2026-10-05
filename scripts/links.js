document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  let showParam = params.get("show");

  // 1. If there's a ?show parameter, save it to memory and wipe the URL
  if (showParam) {
    sessionStorage.setItem("customLinkView", showParam);
    window.history.replaceState({}, document.title, window.location.pathname);
  } else {
    // 2. If the URL is clean, check if we already saved a custom view for this visit
    showParam = sessionStorage.getItem("customLinkView");
  }

  // 3. Convert whatever we found into an array
  const allowedLinks = showParam ? showParam.split(",") : null;

  // 4. Filter the links
  const allLinks = document.querySelectorAll(".social-container [data-social]");

  allLinks.forEach((link) => {
    const socialName = link.getAttribute("data-social");

    // If an allowed list exists, and this link isn't on it, hide it
    if (allowedLinks !== null && !allowedLinks.includes(socialName)) {
      link.style.display = "none";
    }
  });
});
