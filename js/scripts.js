// This array contains Pokémon data to display in the application.
let pokemonList = [
    {
         pokemonName: "Bulbasaur",
         pokemonType: ["Grass", "Poison"],
         pokemonHeight: 0.7,
         pokemonWeight: 6.9
     },
     {
      pokemonName: "Charizard",
      pokemonType: ["Fire', 'Flying"],
      pokemonHeight: 1.7,
      pokemonWeight: 90.5
    },
    {
      pokemonName: "Mewtwo",
      pokemonType: ["Psychic"],
      pokemonHeight: 2.0,
      pokemonWeight: 122
    }
  ];
 console.log(pokemonList);

for (let list=0; list < pokemonList.length; list++){
  if (pokemonList[list].pokemonHeight > 0.1 && pokemonList[list].pokemonHeight < 1.7){
    document.write(pokemonList[list].pokemonName + ": Height ", pokemonList[list].pokemonHeight + " <p></p>");
}else if (pokemonList[list].pokemonHeight >= 1.7 && pokemonList[list].pokemonHeight < 2.0){
    document.write(pokemonList[list].pokemonName + ": Height ", pokemonList[list].pokemonHeight + " <p></p>");
  }else {
    document.write(pokemonList[list].pokemonName + ": Height  ", pokemonList[list].pokemonHeight + "  --Wow, that is a big Pokemon!");
  }
}
