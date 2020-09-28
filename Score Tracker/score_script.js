let pins = document.querySelectorAll('.pin');

function hidePin(e) {
  // console.log(e);
  if (pin.style.opacity === "1")
  {
    pin.style.opacity = "0";
  }
  else {
    pin.style.opacity = "1";
  }
}

pins.forEach(function(element) {
  element.addEventListener('click', hidePin);
});
