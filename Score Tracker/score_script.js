// let pin1 = document.querySelector('#pin1');
// let pin2 = document.querySelector('#pin2');
// let pin3 = document.querySelector('#pin3');
// let pin4 = document.querySelector('#pin4');
// let pin5 = document.querySelector('#pin5');
// let pin6 = document.querySelector('#pin6');
// let pin7 = document.querySelector('#pin7');
// let pin8 = document.querySelector('#pin8');
// let pin9 = document.querySelector('#pin9');
// let pin10 = document.querySelector('#pin10');
let pins = document.querySelectorAll('.pin')
let count = 0;
let bowling = false;

function hidePin() {
  // console.log(e);
  // console.log(count);
  if (this.style.opacity == "0") {
    this.style.opacity = "1";
    // this.setAttribute('style','opacity:1');
    count--;
    console.log(count);
  }
  else {
    this.style.opacity = "0";
    count++;
    console.log(count)
  }
}

// pin1.addEventListener('click', hidePin)
// pin2.addEventListener('click', hidePin)
// pin3.addEventListener('click', hidePin)
// pin4.addEventListener('click', hidePin)
// pin5.addEventListener('click', hidePin)
// pin6.addEventListener('click', hidePin)
// pin7.addEventListener('click', hidePin)
// pin8.addEventListener('click', hidePin)
// pin9.addEventListener('click', hidePin)
// pin10.addEventListener('click', hidePin)

pins.forEach(function(element) {
  element.addEventListener('click', hidePin);
});
