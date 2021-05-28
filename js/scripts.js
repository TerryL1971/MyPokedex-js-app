let pokemonRepository = (function() {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#exampleModal');
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener("click", function(event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            // Now we add the details to the item
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
            item.abilities = details.ability;
        }).catch(function(e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            showModal(item);
        });
    }

    function showModal(pokemon) {
      //let modalContainer = $('#modal-container');
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');
      let modalHeader = $('.modal-header');
      let modalContainer = $("#modal-container");
      // clear existing content of the modal
      // modalHeader.empty();
      modalTitle.empty();
      modalBody.empty();

      // creating element for name in the modal content
      let nameElement = $("<h1>" + pokemon.name + "</h1>");
      // creating img in modal content
      let myImageFront = $(' <img class="modal-img" style="width:50%"> ');
      myImageFront.attr("src", pokemon.imageUrlFront);
      let myImageBack = $('<img class="modal-img" style="width:50%"> ');
      myImageBack.attr("src", pokemon.imageUrlBack);
      // creating element for height in modal content
      let heightElement = $("<p>" + "Height : " +
      pokemon.height + "</p>");
      // creating element for weight in modal content
      let weightElement = $("<p>" + "Weight : " +
      pokemon.weight + "</p>");
      // creating element for type in modal content
      /* let typesElement = $("<p>" + "Types : " +
      pokemon.types + "</p>");
      // creating element for abilities in modal content
      let abilitiesElement = $("<p>" + "Abilities : " +
      pokemon.abilities + "</p>"); */

      //modalContainer.append(pokemonModal);
      modalTitle.append(nameElement);
      modalBody.append(myImageFront);
      modalBody.append(myImageBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      //modalBody.append(typesElement);
      //modalBody.append(abilitiesElement);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
