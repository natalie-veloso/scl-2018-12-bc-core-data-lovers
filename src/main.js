// const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
// //console.log(resultadoNombres);

// // evento click del botón
//   document.getElementById('btnSearch').addEventListener('click',
//     (evento) => {evento.preventDefault();
//   //document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click
// let textSearch = document.getElementById('search').value;



//   for (let i = 0; i < resultadoNombres[i].length; i++) {
//   if( resultadoNombres[i] === textSearch)
//   {
//     document.getElementById('root').innerHTML += '<p>' + resultadoNombres + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
//   }
// }
// });


// tratando nuevo

// // evento click del botón
  document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();
document.getElementById('root').innerHTML = ''; 
let textSearch = document.getElementById('search').value;
let resultado = poke.processData(textSearch); 
document.getElementById('root').innerHTML += '<p>' + resultado[0] + '</p>' + '<img src="'+resultado[1]+'">' + '<p>' + resultado[2] + '</p>'; 







});


// Autocompletar desde Data con datalist

let resultadoNombres = poke.completeData();

let datalist = document.getElementById('names');

document.getElementById('search').addEventListener('keyup', function () {
  let searchComplete = document.getElementById('search').value;
    if (searchComplete.length === 0) {
        return;
    }
    datalist.textContent = '';
    for (let i = 0; i < resultadoNombres.length; i++) {
        if (resultadoNombres[i].toLowerCase().indexOf(searchComplete.toLowerCase()) !== 0) {
            continue;
        }
        let option = document.createElement('option');
        option.value = resultadoNombres[i];
        datalist.appendChild(option);
    }
});