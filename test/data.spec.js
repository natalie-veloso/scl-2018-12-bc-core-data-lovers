global.window=global
global.chai=require("chai");
require('../src/data.js');
require('../src/data/pokemon/pokemon.js')

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




// describe('pokego.filterData', () => {
//   it('debería ser una función', () => {
//     assert.equal(typeof window.pokego2.filterData, 'function');
//   })

//   it('debería retornar "Dewgong", "Cloyster", "Jynx", "Lapras", "Articuno" para "type" de "Ice"', () => {
//     assert.equal(window.pokego2.filterData("type", "Ice"), ["Dewgong", "Cloyster", "Jynx", "Lapras", "Articuno"])
//   })




