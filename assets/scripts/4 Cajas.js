let section1 = document.querySelector("#caja1");
let section2 = document.querySelector("#caja2");
let section3 = document.querySelector("#caja3");
let section4 = document.querySelector("#caja4");
let cajaColor = "";


let caja = document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cajaColor = "green";
  } else if (event.key === "s") {
    cajaColor = "lightgreen";
  } else if (event.key === "d") {
    cajaColor = "greenyellow";
  }
  pintar (section1, cajaColor);
  pintar (section2, cajaColor);
  pintar (section3, cajaColor);
  pintar (section4, cajaColor);
});

let pintar = (element, color) => {
  element.addEventListener("click", (event) => {
    element.style.backgroundColor = color;
  });
};