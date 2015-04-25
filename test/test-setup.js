//mock localStorage
global.localStorage = new require('node-localstorage').LocalStorage(__dirname + '/local-storage-mock');

//setup testing tools
global.chai = require('chai');
global.expect = chai.expect;
