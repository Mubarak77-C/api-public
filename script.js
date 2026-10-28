//console.log("h");

//dom fetch frontend ui print with  displayPokemon(data);
const apidata = document.querySelector("#getapi");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

// 1. Click Event for Button
searchBtn.addEventListener("click", () => {
  handleSearch();
});
// 2. Keydown Event for "Enter" Key
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

// Helper function to keep our search logic DRY (Don't Repeat Yourself)
function handleSearch() {
  const pokemonName = searchInput.value.trim().toLowerCase();
  if (pokemonName) {
    getApi(pokemonName);
  }
}

//based on name ditto if we search then it will render other wise error or pokemon not found will display
// Listen for Enter key on the input field
// searchInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const pokemonName = searchInput.value.trim().toLowerCase();
//     if (pokemonName) {
//       getApi(pokemonName); // Pass the typed name into our function!
//     }
//   }
// });

// 3. Get API with Loading State
// Make getApi accept a parameter dynamically
async function getApi(query) {
  try {
    // 1. Show loading state immediately before fetching
    apidata.innerHTML = `<p style="color: gray;">Searching for ${query}...</p>`;
    // Dynamically inject the user's search query into the URL
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

    if (!response.ok) {
      throw new Error("Pokemon not found!");
    }

    //console.log(response); //here coming data with promise initial state.pending and state fulfilled
    let data = await response.json();
    console.log(data);
    // 2. Call a function to display the data on the frontend
    displayPokemon(data);
  } catch (error) {
    console.error("error fetched", error);
    apidata.innerHTML = `<p style="color: red;">Pokémon not found! Try another name.</p>`;
  }
}
// Load Ditto by default when the page first opens, Default load on startup
getApi("pikachu");

//Start completely blank until the user searches
// Delete this line so it doesn't run on page load!
// getApi();

function displayPokemon(pokemon) {
  //   console.log("Full abilities array:", pokemon.abilities); // Check this in console!
  //   const name = pokemon.name;
  //   const spriteUrl = pokemon.sprites.front_default;

  //industrial std keep it once place rather decalation
  // Destructuring name and drilling straight into sprites.front_default
  const {
    name,
    sprites: { front_default },
  } = pokemon;
  //   console.log(name);
  //   console.log(front_default);

  //   // Safe navigation: if any part of this path is missing, it returns undefined instead of crashing
  //   const firstAbility =
  //     pokemon?.abilities?.[0]?.ability?.name || "No ability found";

  //by map
  // 1. Map through the abilities array and build an array of <li> strings, then .join('') them
  const abilitiesListHTML = pokemon.abilities
    .map((item) => {
      return `<li>${item.ability.name}</li>`;
    })
    .join(""); // Crucial: removes the commas between array items!

  // Other properties
  ///slot id and url
  const slotId = pokemon.types[0].slot;
  console.log(slotId);

  //   const typeUrl = pokemon.types[0].type.url;
  //   console.log(typeUrl);

  //   const typeName = pokemon.types[0].type.name;
  //   console.log(typeName);

  //doing in std industrial
  const typeUrl = pokemon?.types[0]?.type?.url || "No url found";
  console.log(typeUrl);

  //inserting data to html
  apidata.innerHTML = `
  <h2>Name : ${name.toUpperCase()} </h2>
  <img src="${front_default}" alt="${name}" /> 
  <h3>Abilities:</h3>
    <ul>
      ${abilitiesListHTML}
    </ul>

    <h3>Slot ID: ${slotId} and Type URL: <a href="${typeUrl}" target="_blank">link</a></h3>
  `;
}
//unless until you not get or fetch data on console never ever pass in .innerHtml it will provide error and sometime silence error
// <!--  <h3>slot id: ${slotId} and type url:<a href="${typeUrl}">link</a></h3> -->
