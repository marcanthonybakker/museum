document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.getElementById("back-button");
  
    if (backBtn) {
      backBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (document.referrer !== "") {
          window.history.back();
        } else {
          // Fallback naar homepage als er geen vorige pagina is
          window.location.href = "./index.html";
        }
      });
    }
  });