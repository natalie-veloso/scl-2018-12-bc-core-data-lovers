const data = window.POKEMON.pokemon;

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
  
    filterData:(selectedchoose) => {

  
      let typePoke = data.filter(elemento => {
        if (elemento.type[0]  === selectedchoose){
          return elemento;
        }
        else if  (elemento.type[1]  === selectedchoose){
          return elemento;
        }
         else if (elemento.type[2]  === selectedchoose){
          return elemento;
        }
        
  
  
      })
      return typePoke;
  
            
              
  
  // esta función filter o filtrar recibiría la data,  y nos retornaría aquellos datos que sí cumplan con la condición.
  
  },
  
  
    sortData:(sortOrder) => {
      data.sort(function(a, b) {
      if( sortOrder === "a-z"){
       
        if (a.name < b.name ) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
      else if( sortOrder === "z-a"){
       
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
  
      else if( sortOrder === "1-151"){
       
        if (a.id < b.id ) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }
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

     
        const filteredata = data.filter(element => {
          return element.type
        })
       
        return filteredata;

     
      
  
  
  // var sumatoriaObjeto = arreglo.reduce(function(acumulador, siguienteValor){
  //   return {
  //     edad: acumulador.edad + siguienteValor.edad
  //   };
  // }, {edad: 0}); //Si no hay nada, regresamos un objeto con edad = 0. No hay necesidad de devolver el nombre, pues no es necesario
   
  // var promedioEdad = sumatoriaObjeto.edad / arreglo.length;
  
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


  