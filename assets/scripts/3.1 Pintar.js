// function pintar(){
//  ele = document.getElementById("ele1")
//  ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1"); 
// ele.addEventListener("click", pintar);



elem1 = document.querySelector ('#ele1');
function pintar () {
  elem1.style.backgroundColor = "yellow"
}

elem1.addEventListener("click", pintar);