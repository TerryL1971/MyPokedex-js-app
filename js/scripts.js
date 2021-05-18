// This array contains Pokémon data to display in the application.
let pokemonRepository = (function () {
let pokemonList = [
    {
         name: "Bulbasaur",
         type: ["Grass", "Poison"],
         height: 0.7,
         weight: 6.9
     },
     {
          name: "Charizard",
          type: ["Fire', 'Flying"],
          height: 1.7,
          weight: 90.5
    },
    {
          name: "Mewtwo",
          type: ["Psychic"],
          height: 2.0,
          weight: 122
    }
  ];

function add(pkemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "type" in pookemon
    ) {pokemonList.push(pokemon);
    } else {
        console.log("pokemon is not correct");
    }
}
function getAll() {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}
function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function () {
        console.log(pokemon.name);
    });

}
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
}
})();



pokemonRepository.add({
    name: "Pikachu",
    type: ["Electric"],
    height: 0.3,
    weight: 6.0
});

console.log(pokemonRepository.getAll());

// let button = document.querySelector('button');


 pokemonRepository.getAll().forEach(function (pokemon) {
     pokemonRepository.addListItem(pokemon);

 });
