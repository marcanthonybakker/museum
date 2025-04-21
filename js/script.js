document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-button");
  const footerHintBtn = document.getElementById("footer-hint");
  const closeBtn = document.querySelector("#scanTest main button");
  const mainPopup = document.querySelector("#scanTest main");
  const transformeerPopup = document.getElementById("popup-transformeer");
  const closeTransformeer = document.getElementById("popup-close");

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

  // Hint-popup verbergen bij laden
  if (mainPopup) {
    mainPopup.style.display = "none";
  }

  // Toggle hint-popup
  if (footerHintBtn) {
    footerHintBtn.addEventListener("click", (event) => {
      event.preventDefault();
      mainPopup.style.display =
        mainPopup.style.display === "none" ? "block" : "none";
    });
  }

  // Sluit hint-popup
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      mainPopup.style.display = "none";
    });
  }

  // Sluit marker-popup handmatig via X
  if (closeTransformeer) {
    closeTransformeer.addEventListener("click", () => {
      transformeerPopup.style.display = "none";
    });
  }

  // Toon popup als transformeer-marker zichtbaar is
  const markerTransformeer = document.querySelector("a-marker[url='markers/pattern-transformeer.patt']");
  if (markerTransformeer) {
    markerTransformeer.addEventListener("markerFound", () => {
      transformeerPopup.style.display = "block";
    });

    markerTransformeer.addEventListener("markerLost", () => {
      transformeerPopup.style.display = "none";
    });
  }
});