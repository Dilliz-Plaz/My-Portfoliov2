document.addEventListener("DOMContentLoaded", () => {
  // Get the query string from the URL (e.g., ?show=github,discord)
  const params = new URLSearchParams(window.location.search);
  const showParam = params.get("show");

  // Only run if the 'show' parameter is actually in the URL
  if (showParam) {
    // Convert the string into an array: ['github', 'discord']
    const allowedLinks = showParam.split(",");
    const allLinks = document.querySelectorAll(
      "#social-container [data-social]",
    );

    allLinks.forEach((link) => {
      const socialName = link.getAttribute("data-social");

      // If the link's data attribute isn't in the allowed list, hide it
      if (!allowedLinks.includes(socialName)) {
        link.classList.add("hidden");
      }
    });
  }
});
