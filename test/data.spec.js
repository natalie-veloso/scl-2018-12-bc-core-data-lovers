assert = require('assert');
describe('poke', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof poke, 'object');
  });
});

describe('poke.processData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof poke.processData, 'function');
  });


  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(poke.processData ('Bulbasaur'), 'Bulbasaur');
  });
});



describe('poke.completeData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof poke.processData, 'function');
  });

  it('debería retornar "Bulbasaur" para "Bulbasaur"', () => {
    assert.equal(poke.processData ('Bulbasaur'), 'Bulbasaur');
  });
});