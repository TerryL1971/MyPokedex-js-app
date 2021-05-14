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

for (let list=0; list < pokemonList.length; list++){
  if (pokemonList[list].height > 0.1 && pokemonList[list].height < 1.7){
    document.write(`${pokemonList[list].name}: Height ${pokemonList[list].height}` + " <p></p>");
}else if (pokemonList[list].height >= 1.7 && pokemonList[list].height < 2.0){
    document.write(`${pokemonList[list].name}: Height ${pokemonList[list].height}` + " <p></p>");
  }else {
    document.write(`${pokemonList[list].name}: Height ${pokemonList[list].height}` + "  --Wow, that is a big Pokemon!");
  }
}
