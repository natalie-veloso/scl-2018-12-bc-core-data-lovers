// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const data = POKEMON.pokemon; //guardo en una constante el arreglo de objetos con los pokemones.
//console.log(data);

// función donde recorreré el arreglo de objetos para acceder a su propiedad name
const nombrePokemones = (data) => {

  let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
  for (let i = 0; i < data.length; i++) {
    nombres.push(data[i].name)
  }
  return nombres; //retorno el arreglo de nombres para que pueda tomarlo desde el archivo main.js y hacer la visualización de datos con el DOM
}

window.nombrePokemones = nombrePokemones;