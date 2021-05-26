let pokemonRepository = (function() {
    //let modalContainer = document.querySelector('#modal-container');


    /* function showModal(pokemon) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        // creating title element for pokemon
        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        // creating content element for pokemon
        let contentElement = document.createElement('p');
        contentElement.innerText = pokemon.height;

        // creating image element for pokemon
        let myImage = document.createElement('img');
        myImageFront.src = pokemon.imageUrlFront,
        myImageBack.src = pokemon.imageUrlBack

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(myImageFront);
        modal.appendChild(myImageBack);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    //let dialogPromiseReject; // This can be set later, by showModal

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
        }
    }

    document.querySelector('#show-modal').addEventListener('click', () => {
        showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
            alert('confirmed!');
        }, () => {
            alert('not confirmed');
        });
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    document.querySelector('#show-modal').addEventListener('click', () => {
        showModal('Modal title', 'This is the modal content!');
    }); */



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
            //item.types = details.types;
            //item.abilities = details.ability;
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
    /*  let typesElement = $("<p>" + "Types : " +
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
