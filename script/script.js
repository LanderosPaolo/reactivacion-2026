let pokemon = document.getElementById("nombre");
let btnBuscar = document.getElementById("buscar");
let mostrar = document.getElementById("mostrar");

const encontrarPokemon = async () => {
  const nombrePokemon = pokemon.value;

  const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    mostrar.innerHTML = `<h3>El pokemon no existe, intenta de nuevo</h3>`;
    return;
  }

  const data = await respuesta.json();

  const tipoPokemon = data.types
    .map((tipo) => `<li>${tipo.type.name}</li>`)
    .join("");

  mostrar.innerHTML = `
  <div class="card " style="width: 28rem;">
  <div class="card-body">
    <h5 class="card-title text-center">${data.name}</h5>
    <div class="row text-center">
      <div class="col-6">
        <img src="${data.sprites.front_default}" class="img-fluid rounded" alt="${data.name}">
      </div>
      <div class="col-6">
        <img src="${data.sprites.back_default}" class="img-fluid rounded" alt="${data.name}">
      </div>
    </div>
    <p class="card-text text-center">Altura pokemon: ${data.height}</p>
    <p class="card-text text-center">Peso pokemon: ${data.weight}</p>
    <p class="card-text text-center">Tipo pokemon:</p>
    <ul>${tipoPokemon}</ul>
  </div>
</div>
  `;
};

btnBuscar.addEventListener("click", encontrarPokemon);
