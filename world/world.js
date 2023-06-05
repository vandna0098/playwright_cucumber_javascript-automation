const { cliArgs, CliArgs } = require('./cmd-line-args');
const { setWorldConstructor } =   require('cucumber');

class CustomWorld {
  /**
   *
   */
  constructor({ attach }) {
    this.attach = attach;
    this.cliArgs = cliArgs;
  }
}

setWorldConstructor(CustomWorld);
