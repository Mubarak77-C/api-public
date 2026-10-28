//console.log("h");

//dom fetch frontend ui print with  displayPokemon(data);
const apidata = document.querySelector("#getapi");

//get api

async function getApi() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    //  console.log(response); //here coming data with promise initial state.pending and state fulfilled
    let data = await response.json();
    console.log(data);
    // 2. Call a function to display the data on the frontend
    displayPokemon(data);
  } catch (error) {
    console.error("error fetched", error);
  }
}
getApi();

function displayPokemon(pokemon) {
  console.log("Full abilities array:", pokemon.abilities); // Check this in console!
  const name = pokemon.name;
  const spriteUrl = pokemon.sprites.front_default;
  const firstAbility = pokemon.abilities[0].ability.name;

  apidata.innerHTML = `
  <h2>Name : ${name.toUpperCase()} </h2>
  <img src ="${spriteUrl}" alt="${name}"  />
  <h3>array fetch: ${firstAbility} alt=${name}</h3>
  `;
}
