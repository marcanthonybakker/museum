document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-button");
  const footerHintBtn = document.getElementById("footer-hint");
  const closeBtn = document.querySelector("#scanTest main button");
  const mainPopup = document.querySelector("#scanTest main");

  // Terugknop-functionaliteit
  if (backBtn) {
    backBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = "./index.html";
      }
    });
  }

  // Verberg popup bij laden
  if (mainPopup) {
    mainPopup.style.display = "none";
  }

  // Toggle via footer hint knop
  if (footerHintBtn) {
    footerHintBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (mainPopup.style.display === "none") {
        mainPopup.style.display = "block";
      } else {
        mainPopup.style.display = "none";
      }
    });
  }

  // Sluitknop in de popup
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mainPopup.style.display = "none";
    });
  }
});
