let pins = document.querySelectorAll('.pin_box');
let count = 0;
let bowling = false;

function hidePin(e) {
  // console.log(e);

  if (pins.style.display == "inline-flex")
  {
    pins.style.display = "none";
  }
  else {
    pins.style.display = "inline-flex";
  }
}

pins.forEach(function(element) {
  element.addEventListener('click', hidePin);
});
