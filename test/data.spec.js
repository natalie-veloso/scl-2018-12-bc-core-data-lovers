global.window=global  
global.chai=require("chai");
global.expect=require("chai").expect;
global.expect=require("chai").assert;
require('../src/data/pokemon/pokemon.js')
require('../src/data.js');

const data = window.POKEMON.pokemon;

const assert = require("assert"); 

describe('poke', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.poke, 'object');
  });
});

describe('sortData', () => {
  it('deberia ser una funcion', ()=>{
    assert.ok(typeof window.poke.sortData, 'function');

  })

  it ('deberia retornar "los nombres en orden alfabetico"', () =>{
    let sortorderAZ = window.poke.sortData("a-z")
    assert.deepEqual([sortorderAZ [0].name, sortorderAZ[1].name, sortorderAZ[2].name],["Abra", "Aerodactyl", "Alakazam"]) 

  
  })

  it ('deberia retornar "los nombres en orden ascendente"', () => {
    let sortorderZA = window.poke.sortData("z-a")
    assert.deepEqual([sortorderZA [0].name, sortorderZA[1].name, sortorderZA[2].name], ["Zubat", "Zapdos", "Wigglytuff"]) 


    })

  it ('deberia retortar "los pokemones de 1-151', () => {
    let sortordernumber = window.poke.sortData("1-151")
    assert.deepEqual([sortordernumber [0].id, sortordernumber[1].id, sortordernumber[2].id], [1, 2, 3])
    
  })
  
});

describe('processData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.processData, 'function');
  });


  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.deepEqual(window.poke.processData (data.type), 'Bulbasaur');
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.filterData, 'function');
  });


  it('Debería retornar el primer pokemon de tipo planta', () => {
    let pokeGrass= window.poke.filterData('Planta')
    
    assert.deepEqual(pokeGrass.type, 'Bulbasaur')
     ;});

  });

describe('poke.completeData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.completeData, 'function');
  });

  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(window.poke.completeData (name), 'Bulbasaur');
  });
});

