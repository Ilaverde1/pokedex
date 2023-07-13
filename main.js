let idpokemonapintar = 4;
async function pintarpokemon(){
let responsoinfopoquemon = await obtenerinfopoquemon(idpokemonapintar);
let contenedorpoquemon = document.querySelector('#contenedorpokemon');

/* Extraer Informacion de la respuesta del API del JSON */
let urlimagenpoquemon = responsoinfopoquemon["sprites"]["other"]["official-artwork"]["front_default"];
let nombrepoquemon = responsoinfopoquemon["name"];
let alturapoquemon = responsoinfopoquemon["height"];
let pesopoquemon = responsoinfopoquemon["weight"];
let tipospoquemon = responsoinfopoquemon["types"];

contenedorpoquemon.innerHTML = "<div class=\"imagen-pokemon\"><img class=\"img-rounded\" width=200 src=\""+urlimagenpoquemon+"\"></div><br>";
contenedorpoquemon.innerHTML = contenedorpoquemon.innerHTML+"<span class=\"list-group-item\"><b>ID: <\/b>"+idpokemonapintar+"</span><br>";
contenedorpoquemon.innerHTML = contenedorpoquemon.innerHTML+"<span class=\"list-group-item\"><b>Nombre: <\/b>"+nombrepoquemon+"</span><br>";
contenedorpoquemon.innerHTML = contenedorpoquemon.innerHTML+"<span class=\"list-group-item\"><b>Altura: <\/b>"+alturapoquemon+"</span><br>";
contenedorpoquemon.innerHTML = contenedorpoquemon.innerHTML+"<span class=\"list-group-item\"><b>Peso: <\/b>"+pesopoquemon+"</span><br>";

let tipopoquemon = "";
let htmltipospokemon = "<div class=\"list-group-item\"><b>Tipo:<\/b><br><br>";
let classtipopokemon= "";

for(i=0;i<tipospoquemon.length;i++){

  tipopoquemon = tipospoquemon[i]["type"]["name"];
  if(tipopoquemon==="fire"){
    classtipopokemon = "tipopokemonfuego";
  }else if(tipopoquemon==="water"){
    classtipopokemon = "tipopokemonagua";
  }else if(tipopoquemon==="bug"){
    classtipopokemon = "tipopokemonbicho";
  }else if(tipopoquemon==="flying"){
    classtipopokemon = "tipopokemonvolar";
  }else if(tipopoquemon==="poison"){
    classtipopokemon = "tipopokemonposion";
  }else if(tipopoquemon==="ground"){
    classtipopokemon = "tipopokemontierra";
  }else if(tipopoquemon==="electric"){
    classtipopokemon = "tipopokemonelectrico";
  }else if(tipopoquemon==="normal"){
    classtipopokemon = "tipopokemonnormal";
  }
  htmltipospokemon += "<span class=\"list-group-item "+classtipopokemon+"\">"+tipopoquemon+"</span><br>";
  classtipopokemon="";
}

htmltipospokemon += "</div>";


contenedorpoquemon.innerHTML += htmltipospokemon;
}

async function obtenerinfopoquemon(idpoquemon){
  let url = "https://pokeapi.co/api/v2/pokemon/"+idpoquemon;
  let fetchPromise = await fetch(url);
  return await fetchPromise.json();
}

function pintarpokemonsiguiente(){
  idpokemonapintar++;
  document.querySelector('#idbuscadorpokemon').value = "";
  pintarpokemon();
}

function pintarpokemonanterior(){
  if(idpokemonapintar>=2)
    idpokemonapintar--;
  document.querySelector('#idbuscadorpokemon').value = "";
  pintarpokemon();
}

function buscarpokemon(){
  let idbuscadorpoquemon = document.querySelector('#idbuscadorpokemon').value;
  idpokemonapintar = idbuscadorpoquemon;
  pintarpokemon();
}

pintarpokemon();
