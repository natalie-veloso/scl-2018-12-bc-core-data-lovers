
window.poke = {
  processData: (textSearch) => {
const data = POKEMON.pokemon; 


let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
for (let i = 0; i < data.length; i++) {

  if (data[i].name === textSearch){
    nombres.push(data[i].name, data[i].img, data[i].weaknesses)
  }
}
  return nombres;

  // Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
  
  },

  filterData:(data, condition) => {

  // esta función filter o filtrar recibiría la data,
  //  y nos retornaría aquellos datos que sí cumplan con la condición.

},


  sortData:(data, sortBy, sortOrder) => {

    // esta función sort u ordenar recibe tres parámetros.
    //  El primer parámetro, data, nos entrega los datos. 
    //  El segundo parámetro, sortBy, nos dice con respecto
    //   a cuál de los campos de la data se quiere ordenar. 
    //   El tercer parámetro, sortOrder, indica si se quiere 
    //   ordenar de manera ascendente o descendente.
  },


  computeStats:(data) => {

    // la función compute o calcular, nos permitirá hacer 
    // cálculos estadísticos básicos para ser mostrados de 
    // acuerdo a la data proporcionada.

  },

};


