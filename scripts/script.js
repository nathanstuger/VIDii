
//Overlay 1 ///
var layover = document.getElementById("overlay1");

var toggleButton = document.getElementById("toggle1");
toggleButton.addEventListener("click", toggleOn);

var removeLayover = document.getElementById("remove1")
overlay1.addEventListener("click", toggleOn);

function toggleOn() {
overlay1.classList.toggle("overlayOn");
console.log("yes")
};

//Overlay 2 ///
var layover = document.getElementById("overlay2");

var toggleButton = document.getElementById("toggle2");
toggleButton.addEventListener("click", toggleOn);

function toggleOn2() {
overlay2.classList.toggle("overlayOn");
console.log("yes")
};

//Overlay 3 ///
var layover = document.getElementById("overlay3");

var toggleButton = document.getElementById("toggle3");
toggleButton.addEventListener("click", toggleOn);

function toggleOn3() {
overlay3.classList.toggle("overlayOn");
console.log("yes")
};


const update = (e) => {
  let x = e.clientX || e.touches[0].clientX
  let y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

// WAAROP luisteren voor een event? WELK event, WAT doen
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
for(const spook of spoken){
  spook.addEventListener('click',()=>{
    huidigVerhaal = spook.id;
    toggleVenster();
  })
}
sluitVenster.addEventListener('click',toggleVenster);