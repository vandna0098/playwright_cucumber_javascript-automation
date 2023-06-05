/* eslint-disable no-console */
// import { cliArgs, CliArgs } from './cmd-line-args';
const { setWorldConstructor } = require('cucumber');


module.exports = class CustomWorld {
  constructor({ attach, parameters }) {
    this.attach = attach;
    this.URL = parameters['URL'];
    this.browser = parameters['browser'];
  }
}

setWorldConstructor(CustomWorld);
