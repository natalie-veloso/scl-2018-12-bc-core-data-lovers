// import POKEMON from './data/pokemon/pokemon.js'
const data = POKEMON.pokemon;
// Buscar con click del botón y Mostrar
document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();    // Funcion al clickear boton

document.getElementById('root').innerHTML = '';   // cada vez limpia el div donde se muestra el resultado.
let textSearch = document.getElementById('search').value;  // variable de input buscar
let resultado = window.poke.processData(textSearch);  // llamando el resultado desde Data.js

document.getElementById('root').innerHTML += 
`<div class ="pokemonProfile"><h3 class="title is-3">${resultado[0]}</h3><img class="imgProfile" src="${resultado[1]}"><p class="subtitle">${resultado[2]}</p><p class="subtitle">${resultado[3]}</p></div>`   // mostrando el rsultado en array para diferentes keys del objeto.

// scroll para que al apretar boton buscar me posicione en la pantalla de perfil
let element = document.getElementById("root");
element.scrollIntoView();
element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });

document.getElementById("search").value = "";// limpia el input
 });




// Autocompletar desde Data con datalist

let resultadoNombres = window.poke.completeData(); // llamando propiedad nombre desde data.js
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

    

 // mostrar todos los pokemones en div
let resultadoAllPokemons = window.poke.showDatafilter(); 
document.getElementById('allPokemons').innerHTML = ''; // limpio el div cada vez que se hace click
 for (let i = 0; i < resultadoAllPokemons.length; i++) {
    document.getElementById('allPokemons').innerHTML += '<span><img class="imgfilter" src="' + resultadoAllPokemons[i] + ' "></span>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }


//  ordenar de la A-Z ,Z-A Y 1-151

document.getElementById("orderPokemon").addEventListener("change", sort => {
document.getElementById('allPokemons').innerHTML  = '';
let sortOrder = sort.target.value;
let resultsort = window.poke.sortData(data,sortOrder); 

resultsort.forEach(elementos => {
    document.getElementById('allPokemons').innerHTML += 
    `<span><h4>${elementos.name}</h4><a href=""><img class="imgfilter" src="${elementos.img}"></a></span>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
})

});

//  Filtrar por tipo
document.getElementById("typePokemon").addEventListener("change", choose => {
    let selectedchoose = choose.target.value;
    let resultfilter = window.poke.filterData(data, selectedchoose); 
    document.getElementById('allPokemons').innerHTML  = '';

    resultfilter.forEach(elemento => {
            document.getElementById('allPokemons').innerHTML += 
            `<span><h4>${elemento.name}</h4><a href=""><img class="imgfilter" src="${elemento.img}"></a></span>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
       })
});
