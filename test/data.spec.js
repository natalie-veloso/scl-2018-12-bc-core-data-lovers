global.window=global  
global.chai=require("chai");
global.expect=require("chai").expect;
global.expect=require("chai").assert;
require('../src/data/pokemon/pokemon.js')
require('../src/data.js');

const dataTest = window.POKEMON.pokemon;

const assert = require("assert"); 

describe('poke', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.poke, 'object');
  });
});



describe('processData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.processData, 'function');
  });


  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(window.poke.processData ('Bulbasaur'), 'Bulbasaur');
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.filterData, 'function');
  });


  it('Debería retornar el primer pokemon de tipo planta', () => {
    let pokeGrass= window.poke.filterData(dataTest,'Planta')[0].type
    
    assert.equal(pokeGrass, 'Bulbasaur')
     ;});

  });

describe('poke.completeData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.completeData, 'function');
  });

  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(window.poke.completeData ('Bulbasaur'), 'Bulbasaur');
  });
});

