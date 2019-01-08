// global.window = global
// global.chai=require("chai");
// const require('../src/data.js');
// require('../src/data/pokemon/pokemon.js');

//import processData from '../src/data.js';
require('../src/data/pokemon/pokemon.js');
const dataTest = window.POKEMON.pokemon;

const assert = require("assert"); 
describe('poke', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof window.poke, 'object');
  });
});



describe('poke.processData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.processData, 'function');
  });


  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(window.poke.processData ('Bulbasaur'), 'Bulbasaur');
  });
});



describe('poke.completeData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof window.poke.processData, 'function');
  });

  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(window.poke.processData ('Bulbasaur'), 'Bulbasaur');
  });
});

dataTest();
