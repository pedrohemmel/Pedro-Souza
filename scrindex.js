var button = document.getElementById("botaoMenu");

button.addEventListener("click", function() {
  var menuTopoAuto = document.getElementById("menuTopoAuto");

  if(menuTopoAuto.style.display === "block") {
    menuTopoAuto.style.display = "none";
  } else {
    menuTopoAuto.style.display = "block";
  }
});