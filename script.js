var menu = document.querySelector("#menu");
var bcg = document.querySelector("#bcg");

menu.addEventListener("click", function () {
  bcg.style.transform = "scale(.8)";
  bcg.style.borderRadius = "15px";
  bcg.style.boxShadow = "0 150px 45px -100px rgba(0,0,0,0.2)";
});
