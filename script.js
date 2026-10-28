console.log("h");
//get api

async function getApi() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response); //here coming data with promise initial state.pending and state fulfilled
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error fetched", error);
  }
}
getApi();

//dom fetch frontend
const apidata = document.querySelector("#getapi");
