const qrButton = document.getElementById("btnQr"),
  popup = document.getElementById("poup-container"),
  popupClose = document.getElementById("popup-close");

qrButton.addEventListener("click", appearPopup);
popupClose.addEventListener("click", disappearPopup);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popup.classList.add("hidden");
    popup.style.backgroundColor = "none";
  }
});

function appearPopup() {
  popup.classList.remove("hidden");
  popup.style.backgroundColor = "rgba(0,0,0,0.7)";
}
function disappearPopup() {
  popup.classList.add("hidden");
  popup.style.backgroundColor = "none";
}
