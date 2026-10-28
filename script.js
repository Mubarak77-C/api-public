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
  //   console.log("Full abilities array:", pokemon.abilities); // Check this in console!
  //   const name = pokemon.name;
  //   const spriteUrl = pokemon.sprites.front_default;

  //industrial std keep it once place rather decalation
  const { name, sprites } = pokemon;
  console.log(name);
  console.log(sprites.front_default);

  // Safe navigation: if any part of this path is missing, it returns undefined instead of crashing
  const firstAbility =
    pokemon?.abilities?.[0]?.ability?.name || "No ability found";

  //movie object fetching title
  const fetcharr = pokemon.types[0].slot;
  console.log(fetcharr);

  //   const typeUrl = pokemon.types[0].type.url;
  //   console.log(typeUrl);

  //   const typeName = pokemon.types[0].type.name;
  //   console.log(typeName);

  //doing in std industrial
  const fetchType = pokemon?.types[0]?.type?.url || "No ability found";
  console.log(fetchType);

  //inserting data to html
  apidata.innerHTML = `
  <h2>Name : ${name.toUpperCase()} </h2>
  <img src="${sprites.front_default}" alt="${name}" /> 
  <h3>array fetch: ${firstAbility}</h3>
  <h3>slot id: ${fetcharr} and type url: <a href="${fetchType}" target="_blank">link</a></h3> 
  `;
}
//unless until you not get or fetch data on console never ever pass in .innerHtml it will provide error and sometime silence error
// <!--  <h3>slot id: ${fetcharr} and type url:<a href="${typeUrl}">link</a></h3> -->
