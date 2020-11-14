//Burger menu
document.querySelector("#burgerlogo").addEventListener("onclick", burgerMenu);

function burgerMenu() {
  var x = document.querySelector(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
