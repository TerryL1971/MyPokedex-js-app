// This array contains Pokémon data to display in the application.
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
 console.log(pokemonList);

 pokemonList.forEach(function(pokemon) {
     if (pokemon.height > 0.1 && pokemon.height < 1.7){
         document.write(`${pokemon.name}: Height ${pokemon.height}` + " <p></p>");
         }else if (pokemon.height >= 1.7 && pokemon.height < 2.0){
         document.write(`${pokemon.name}: Height ${pokemon.height}` + " <p></p>");
         }else {
         document.write(`${pokemon.name}: Height ${pokemon.height}` + "  --Wow, that is a big Pokemon!");
     }
     });
