
window.poke = {
  filter: (textSearch) => {
const data = POKEMON.pokemon; 


let nombres = []; // arreglo vacío donde pushearé los nombres nuevos.
for (let i = 0; i < data.length; i++) {

  if (data[i].name === textSearch){
    nombres.push(data[i].name, data[i].img, data[i].weaknesses)
  }
}
  return nombres;
  },



};


