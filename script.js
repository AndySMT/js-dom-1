let on_off = document.getElementById("btn");
let image = document.getElementById("image");
let background = document.querySelector(".container");
on_off.addEventListener("click", onOff);
function onOff() {
  background.classList.toggle("light");
  if (image.src.includes("white_lamp")) {
    image.src = "img/yellow_lamp.png";
    image.alt = "Off";
    on_off.innerHTML = "Spegni";
  } else {
    image.src = "img/white_lamp.png";
    image.alt = "On";
    on_off.innerHTML = "Accendi";
  }
}
