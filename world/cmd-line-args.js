const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const cliArgs = {
  ...args,
  rawCommandLine: process.argv.join(' '),
};

module.export = cliArgs;
