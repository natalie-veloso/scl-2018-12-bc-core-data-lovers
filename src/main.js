const resultadoNombres = nombrePokemones(data); // guardo en la constante el resultado de mi función nombrePokemones (lo que está retornando)
//console.log(resultadoNombres);

// evento click del botón
  document.getElementById('btnSearch').addEventListener('click',
    (evento) => {evento.preventDefault();
  //document.getElementById('root').innerHTML = ''; // limpio el div cada vez que se hace click
let textSearch = document.getElementById('search').value;



  for (let i = 0; i < resultadoNombres.length; i++) {
  if( resultadoNombres[i] === textSearch){
    document.getElementById('root').innerHTML += '<p>' + resultadoNombres[i] + '</p>'; // imprimo en el HTML cada nombre que está dentro de cada posición del arreglo.
  }
}
});