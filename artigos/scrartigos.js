var button = document.getElementById("botaoMenu");

button.addEventListener("click", function() {
  var menuTopoAuto = document.getElementById("menuTopoAuto");

  if(menuTopoAuto.className === "menuVisivel") {
    menuTopoAuto.className = "menuInvisivel";
  } else {
    menuTopoAuto.className = "menuVisivel";
  }
});