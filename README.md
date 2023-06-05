# Playwright-Cucumber using javascript

Technologies used:

 - `playwright`
 - `playwright-fluent`
 - `cucumberjs`
 - `node.js`

Make sure you have nodejs and npm on your system, if not you can install from https://nodejs.org/en/



## To execute the tests
* First install all the dependencies using `npm install` cmd.
* run the command `npm run test`.
  - tests will run by default with the chromium version installed by `playwright`


## To view the html report

* run the command `npm run report`.
* the HTML report will automatically include: 
  - a screenshot whenever an error occured, 
  - all page errors (uncaught exceptions in the console) if any
  - all failed requests if any
  - the last ten requests

## To create a new step

* first write the Given/When/Then sentence:
  ```gherkin
  Given I push "foo" on "bar"
  ```

* the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```