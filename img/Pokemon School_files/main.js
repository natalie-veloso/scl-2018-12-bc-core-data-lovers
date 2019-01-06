// Buscar con click del botón y Mostrar

document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();    // Funcion al clickear boton

document.getElementById('root').innerHTML = '';   // cada vez limpia el div donde se muestra el resultado.
let textSearch = document.getElementById('search').value;  // variable de input buscar
let resultado = poke.processData(textSearch);  // llamando el resultado desde Data.js

document.getElementById('root').innerHTML += 
'<div class ="pokemonProfile">' + '<h3 class="title is-3">' + resultado[0] + '</h3>' + '<img class="imgProfile" src="'+resultado[1]+'">' + '<p class="subtitle">' + resultado[2] + '</p>' + '<p class="subtitle">' + resultado[3] + '</p>' + '</div>';   // mostrando el rsultado en array para diferentes keys del objeto.
let element = document.getElementById("root");

// scroll para que al apretar boton buscar me posicione en la pantalla de perfil
element.scrollIntoView();
element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });

// limpia el input
document.getElementById("search").value = "";
});




// Autocompletar desde Data con datalist

let resultadoNombres = poke.completeData(); // llamando propiedad nombre desde data.js

let datalist = document.getElementById('names'); // variable para mostrar en datalist

document.getElementById('search').addEventListener('keyup', function () {
  let searchComplete = document.getElementById('search').value;
    if (searchComplete.length === 0) { // si el input search es igual a 0 lo devuelve.
        return;
    }
    datalist.textContent = ''; // limpia la busqueda por letra.
    // recorre la data  la muestra en el search
    for (let i = 0; i < resultadoNombres.length; i++) {
        if (resultadoNombres[i].toLowerCase().indexOf(searchComplete.toLowerCase()) !== 0) {
            continue;
            
        }
        let option = document.createElement('option');
        option.value = resultadoNombres[i];
        datalist.appendChild(option); // muestra la lista de datos en datalist
        
    }
    
    });

    

    // filtrar y ordenar
let resultadoAllPokemons = poke.showDatafilter(); 
document.getElementById('allPokemons').innerHTML = ''; // limpio el div cada vez que se hace click
 for (let i = 0; i < resultadoAllPokemons.length; i++) {
    document.getElementById('allPokemons').innerHTML += '<span><img class="imgfilter" src="' + resultadoAllPokemons[i] + ' "></span>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }

//  ordenar
  const data = POKEMON.pokemon;
  let sortBy = document.getElementById('orderPokemon').value; 
  let sortOrder = document.getElementById('orderPokemon').value; 
  let resultsort = poke.sortData(data, sortBy, sortOrder); 
document.getElementById("orderPokemon").addEventListener("change", () => {
document.getElementById('allPokemons').innerHTML  = '';

 if (document.getElementById("orderPokemon").value === "A-Z") {
    for (let i = 0; i < resultsort.length; i++){
        document.getElementById('allPokemons').innerHTML += '<span><a href=""><img class="imgfilter" src="' + resultsort[i].img + ' "></a></span>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
   }
}
   else if(document.getElementById("orderPokemon").value === "1-151") {
    for (let i = 0; i < resultadoAllPokemons.length; i++) {
        document.getElementById('allPokemons').innerHTML += '<span><img class="imgfilter" src="' + resultadoAllPokemons[i] + ' "></span>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
      }
    
   }  

});



document.getElementById("typePokemon").addEventListener("change", () => {
    document.getElementById('allPokemons').innerHTML  = '';
    
        
   console.log('hola')
   
});