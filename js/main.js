/* =========================================================
   MAIN.JS
   Conecto el formulario de contacto con Google Sheets
   usando FormData (compatible y sencillo)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // URL de tu Web App de Google Apps Script
      const scriptURL = "https://script.google.com/macros/s/AKfycby0ubxY54FPIz-4N9xx73NM-lfIksIxiAhYRVvJC0AAeBd_rk_q9zQjjnDE8ApFHAUyoQ/exec";

      // Envío los datos como FormData
      const formData = new FormData(form);

      fetch(scriptURL, {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        alert("¡Gracias por tu mensaje! Tus datos fueron guardados en Google Sheets.");
        form.reset(); // Limpio el formulario
      })
      .catch(error => {
        console.error("Error al enviar:", error);
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
      });
    });
  }
});