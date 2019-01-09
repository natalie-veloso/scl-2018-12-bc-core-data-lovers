global.window = global;
//global.expect = require ('chai').expect;
global.assert  = require('chai').assert;
//global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
require('./data.spec.js');