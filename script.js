const generateQRCodeButton = document.getElementById("generate-qrcode");
const qrCodeDiv = document.getElementById("qrcode");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const formDataJson = JSON.stringify(Object.fromEntries(formData));
  localStorage.setItem("contact-info", formDataJson);
});

generateQRCodeButton.addEventListener("click", function() {
  qrCodeDiv.innerHTML = ""; // limpia el contenido anterior del contenedor de código QR
  const contactInfo = localStorage.getItem("contact-info");
  new QRCode(qrCodeDiv, contactInfo);
});
