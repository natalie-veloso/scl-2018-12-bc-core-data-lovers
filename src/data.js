const data = POKEMON.pokemon;

window.poke = {

  
processData: (textSearch) => {


let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
for (let i = 0; i < data.length; i++) {

  if (data[i].name === textSearch){
    nombres.push(data[i].name, data[i].img, data[i].weaknesses, data[i].type)
  }
}
  return nombres;

  // Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.

  },

  filterData:() => {

    let typePoke = data.filter((elemento) => {
      return elemento.type.indexOf("Fuego") >= 0 })
      
             .map(function(elemento){
             return elemento.img;
            });
           return typePoke;
            

// esta función filter o filtrar recibiría la data,  y nos retornaría aquellos datos que sí cumplan con la condición.

},


  sortData:() => {
  data.sort(function(a, b) {
     let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB ) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
     return data;
    

    
    // esta función sort u ordenar recibe tres parámetros.
    //  El primer parámetro, data, nos entrega los datos. 
    //  El segundo parámetro, sortBy, nos dice con respecto
    //   a cuál de los campos de la data se quiere ordenar. 
    //   El tercer parámetro, sortOrder, indica si se quiere 
    //   ordenar de manera ascendente o descendente.
    
  },


  computeStats:() => {

    // la función compute o calcular, nos permitirá hacer 
    // cálculos estadísticos básicos para ser mostrados de 
    // acuerdo a la data proporcionada.

  },


  completeData:() => {
 
    let nameComplete = []; // arreglo vacío donde pushearé los nombres nuevos.
    for (let i = 0; i < data.length; i++) {
        nameComplete.push(data[i].name)
      
    }
      return nameComplete;
    
  },

  showDatafilter:() => {

    let imgData = []; // arreglo vacío donde pushearé los nombres nuevos.
    for (let i = 0; i < data.length; i++) {
     imgData.push(data[i].img)
      
    }
    return imgData;
  },

};




//     function filterData(data, condition)  {

//       const tiposDePokemon = data.filter(tipos =>{
//       return tipos.type.indexOf(condition) !== -1;
//        })
//        return tiposDePokemon;
//       }
