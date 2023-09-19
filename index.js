//*Saludo de 2 segundos
var timeoutID;

function mostrarSaludoDentroDeDosSegundos() {
  timeoutID = setTimeout(slowAlert, 2000); 
}
function slowAlert() {
   alert("¡¡Bienvenid@s a nuestra página!!");
}

mostrarSaludoDentroDeDosSegundos();

//*pokeAPI

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

fetch(apiURL)
.then(response => response.json())
.then(data => {
    console.log(data.results);
})
.catch(error => {
    console.error('error')
});

/*páginas*/

document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const listLink = document.getElementById("list-link");
 

  homeLink.addEventListener("click", function() {
  content.textContent = "Estoy en home";
});

  listLink.addEventListener("click", function () {
  content.textContent = "Estoy en listado";
  });

});


const element = document.querySelectorAll('.element');

element.forEach(element => {
    element.addEventListener('click', function () {
        this.classList.toggle('expandido');
    });
});



document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector(".header__views ul");

  menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".header");

  menuToggle.addEventListener("click", function () {
      header.classList.toggle("menu-active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const pokemonListContainer = document.getElementById("pokemon-list");

  async function obtenerListaPokemon() {
      try {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
          if (!response.ok) {
              throw new Error("No se pudo obtener la lista de Pokémon.");
          }

          const data = await response.json();
          const pokemonList = data.results;

         
          const mostrarDetallesButton = document.createElement("button");
          mostrarDetallesButton.textContent = "Mostrar Detalles";
          pokemonListContainer.appendChild(mostrarDetallesButton);

          
          mostrarDetallesButton.addEventListener("click", function () {
              mostrarBotonesPokemon(pokemonList);
          });
      } catch (error) {
          console.error("Error:", error);
      }
  }

  function mostrarBotonesPokemon(pokemonList) {
      pokemonListContainer.innerHTML = "";

      pokemonList.forEach((pokemon, index) => {
          const pokemonButton = document.createElement("button");
          pokemonButton.textContent = `${index + 1}. ${pokemon.name}`;
          pokemonListContainer.appendChild(pokemonButton);

        
          pokemonButton.addEventListener("click", function () {
              alert(`Has seleccionado a ${pokemon.name}`);
          });
      });
  }

  obtenerListaPokemon();
});




