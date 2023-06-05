const {
    navigateTo,
    searchTestBtn,
    getInnertextAndVerify,
    returnInnertext,
    searchFilter,
    startTestNowBtn,
    sortTestList,
    contactExaminerBtn,
    viewDetailBtn,
    onlineTestTab,
    searchField,
  } = require('../../stories/stories');
  const { Given, When } = require('cucumber');
  const { cast } = require('playwright-fluent');
  const OnlineTest = require('../../PageObject/CommonPage/OnlineTestPage');
  
  Given('User navigate to site', async function () {
    await cast(this.p).runStory(navigateTo, { url: 'https://www.testyou.in/index.aspx' });
  });
  
 
  
  When('User click on button online test', async function () {
    await cast(this.p).runStory(onlineTestTab, {});
  });
  When('User click on search field and enter search term', async function () {
    await cast(this.p).runStory(searchField, {
      searchTerm: 'Class X',
    });
  });
  
  When('User Apply search filter', async function () {
    await cast(this.p).runStory(searchFilter, {});
  });
  When('User click on search button', async function () {
    await cast(this.p).runStory(startTestNowBtn, {});
  });
  
  When('Assert the search result', async function () {
    await cast(this.p).runStory(getInnertextAndVerify, {
      selector: OnlineTest.viewDetailBtn,
      expectedtText: `View Detail`,
    });
  });
  
  When('Assert the view details result', async function () {
    await cast(this.p).runStory(getInnertextAndVerify, {
      selector: OnlineTest.startTestNowBtn,
      expectedtText: `Start Test Now`,
    });
  });
  
  When('User click on view details button', async function () {
    await cast(this.p).runStory(viewDetailBtn, {});
  });
  
  When('User click on start test button', async function () {
    await cast(this.p).runStory(startTestNowBtn, {});
  });
  
  When('Assert the result when guest click on Start test button ', async function () {
    await cast(this.p).runStory(getInnertextAndVerify, {
      selector: OnlineTest.loginPageTitle,
      expectedtText: `TestYou Login`,
    });
  });
  
  When('Assert the result when guest user Click on contact examiner button', async function () {
    await cast(this.p).runStory(contactExaminerBtn, {});
    await cast(this.p).runStory(getInnertextAndVerify, {
      selector: OnlineTest.loginPageTitle,
      expectedtText: `TestYou Login`,
    });
  });
  
  Given('Verify Test Details', async function () {
    await cast(this.p)
      .runStory(viewTestDetails, {
        seacrhTerm: 'Class X',
      })
      .wait(5000)
      .runStory(getInnertextAndVerify, {
        selector: OnlineTest.startTestNowBtn,
        expectedtText: `Start Test Now`,
      });
  });
  
  Given('Start Test', async function () {
    await cast(this.p)
      .runStory(startTest, {
        seacrhTerm: 'Class X',
      })
      .wait(5000)
      .runStory(getInnertextAndVerify, {
        selector: OnlineTest.loginPageTitle,
        expectedtText: `TestYou Login`,
      });
  });
  
  Given('Sort the Test list', async function () {
    await cast(this.p).runStory(sortTestList, {
      seacrhTerm: 'Class X',
    });
  });
  
  
  