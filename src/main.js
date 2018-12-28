 // Buscar con click del botón y Mostrar

document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();    // Funcion al clickear boton

document.getElementById('root').innerHTML = '';   // cada vez limpia el div donde se muestra el resultado.

let textSearch = document.getElementById('search').value;  // variable de input buscar
let resultado = poke.processData(textSearch);  // llamando el resultado desde Data.js

document.getElementById('root').innerHTML += 
'<p>' + resultado[0] + '</p>' + '<img src="'+resultado[1]+'">' + '<p>' + resultado[2] + '</p>';   // mostrando el rsultado en array para diferentes keys del objeto.

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