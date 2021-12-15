const qrButton = document.getElementById("btnQr"),
  popup = document.getElementById("poup-container"),
  popupClose = document.getElementById("popup-close");

qrButton.addEventListener("click", appearPopup);
popupClose.addEventListener("click", disappearPopup);

function appearPopup() {
  popup.classList.remove("hidden");
}
function disappearPopup() {
  popup.classList.add("hidden");
}

console.log("Funciono");
