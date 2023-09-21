function mostrarSaludoDentroDeDosSegundos() {
  setTimeout(slowAlert, 2000);
}
function slowAlert() {
  alert("¡¡Bienvenid@s a nuestra página!!");
}

mostrarSaludoDentroDeDosSegundos();



const homeTitle = document.getElementById("homeTitle");
const pokemonList = document.getElementById("pokemonList");
const pokemonDetails = document.getElementById("pokemonDetails");
const back__Button = document.getElementById("back__");


pokemonDetails.style.display = "none";
back__Button.style.display = "none";

    homeTitle.style.display = "block";
    pokemonList.style.display = "none";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const listLink = document.getElementById("list-link");
  let hasVisitedHome = false;
  let hasVisitedList = false;

  homeLink.addEventListener("click", function () {
    homeTitle.style.display = "block";
    pokemonList.style.display = "none";
    pokemonDetails.style.display = "none";
    back__Button.style.display = "none";
    
    if (hasVisitedHome) {
      alert('Ya estás en la página de Home');
    } else {
      hasVisitedHome = true;
    }
  });

  listLink.addEventListener("click", function () {
    if (hasVisitedList) {
      alert('Ya estás en la página de List');
    } else {
      hasVisitedList = true;
    }
  });
});


