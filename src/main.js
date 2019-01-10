// Buscar con click del botón y Mostrar
document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();    // Funcion al clickear boton

document.getElementById('root').innerHTML = '';   // cada vez limpia el div donde se muestra el resultado.
let textSearch = document.getElementById('search').value;  // variable de input buscar
let resultado = window.poke.processData(textSearch);  // llamando el resultado desde Data.js

document.getElementById('root').innerHTML += 
`<div class="container">
<div class="columns">
  <div class="column"></div>
  <div class="column">
<div class="card gradiantContainer">
<div class="backgroundColor">
<div class="card-content">
  <div class="media-content">
      <p class="title is-4 has-text-white">${resultado[0]}</p>
  </div>
</div>
</div>
<div class="card-content is-flex is-horizontal-center">
  <figure class="image is-128x128">
      <img class="backgroundImage is-rounded" src="${resultado[1]}">
  </figure>
  </div>
  
  <div class="card-content">
  <div class="content has-text-white">
    <div class="columns">
        <div class="column tipographyWeight is-6">
      <p>Caramelos</p>
      <p>Huevo</p>
      <p>Debilidades</p>
        </div>
        <div class="column is-6">
      <p> ${resultado[2]}</p>
      <p> ${resultado[2]}</p>
      <p> ${resultado[2]}</p>
        </div>
    </div>
 </div>
  </div>
  
</div>
</div>
<div class="column"></div>

</div>
<a class="button is-info">EVOLUCIONAR</a>
</div>`   // mostrando el rsultado en array para diferentes keys del objeto.

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
let resultsort = window.poke.sortData(sortOrder); 


resultsort.forEach(elementos => {
    document.getElementById('allPokemons').innerHTML += 
    `<span><h4>${elementos.name}</h4><a href=""><img class="imgfilter" src="${elementos.img}"></a></span>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
})

});

//  Filtrar por tipo
document.getElementById("typePokemon").addEventListener("change", choose => {
    let selectedchoose = choose.target.value;

    let resultfilter = window.poke.filterData(selectedchoose); 
   
    document.getElementById('allPokemons').innerHTML  = '';

    resultfilter.forEach(elemento => {
            document.getElementById('allPokemons').innerHTML += 
            `<span><h4>${elemento.name}</h4><a href=""><img class="imgfilter" src="${elemento.img}"></a></span>` // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
       })
});







//  Promediar datos

let resultCompute = window.poke.computeStats(); 
resultCompute.forEach(elemento => {
    const resultFire = elemento.type.filter(x => x === "Planta").length; 
console.log(resultFire );
})
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        let datas = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        let options = {
          title: 'Pokemones de Región Kanto',
          pieHole: 0.4,
        };

        let chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(datas, options);
      }
