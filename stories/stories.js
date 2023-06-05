const LoginPage = require('../PageObject/CommonPage/LoginPage');
const SignupPage = require('../PageObject/CommonPage/SignupPage');
const OnlineTest = require('../PageObject/CommonPage/OnlineTestPage');
const footer = require('../PageObject/CommonPage/Footer');
const { cast, Story, StoryWithProps } = require('playwright-fluent');
const { playWright } = require('playwright');

const navigateTo = async (p, props) => {
  await p.navigateTo(props.url, { timeout: 120000 });
  const page = cast(p).currentPage();
};

const elementIsVisible = async (p, props) => {
  await p.expectThatSelector(props.selector).isVisible();
};

const elementIsChecked = async (p, props) => {
  await p.expectThatSelector(props.selector).isChecked();
};

const login = async (p, props) => {
  console.log(`UserName: ${props.username}`);
  console.log(`Password: ${props.password}`);

  await p
    .click(LoginPage.signInLink)
    .click(LoginPage.userNameField)
    .typeText(props.username)
    .click(LoginPage.passwordField)
    .typeText(props.password)
    .click(LoginPage.logInBtn);
};

const signupForTestYou = async (p, props) => {
  await p.click(LoginPage.signInLink).click(LoginPage.signupForTestYouBtn);
};

const signUp = async (p, props) => {
  console.log(`UserName: ${props.username}`);
  console.log(`email: ${props.email}`);
  console.log(`loginId: ${props.loginId}`);
  console.log(`password: ${props.password}`);
  console.log(`reEnterPassword: ${props.reEnterPassword}`);
  console.log(`wordVerification: ${props.wordVerification}`);

  await p
    .click(SignupPage.createAnAccountLink)
    .click(SignupPage.userNameField)
    .typeText(props.username)
    .click(SignupPage.emailField)
    .typeText(props.email)
    .click(SignupPage.loginIdField)
    .typeText(props.loginId)
    .click(SignupPage.passwordField)
    .typeText(props.password)
    .click(SignupPage.reEnterPassword)
    .typeText(props.reEnterPassword)
    .click(SignupPage.wordVerification)
    .typeText(props.wordVerification)
    .click(SignupPage.createMyAccountBtn);
};

const termsAndCondition = async (p) => {
  await p.click(SignupPage.createAnAccountLink).click(SignupPage.termsAndServiceLink);
};

const onlineTestTab = async (p, props) => {
  await p.click(OnlineTest.OnlineTestsTab);
};
const searchField = async (p, props) => {
  console.log(`searchTerm: ${props.searchTerm}`);

  await p.click(OnlineTest.searchField).typeText(props.searchTerm);
};
const searchFilter = async (p, props) => {
  await p.click(OnlineTest.testFilter);
};
const searchTestBtn = async (p, props) => {
  await p.click(OnlineTest.searchYourTestBtn);
};

const viewDetailBtn = async (p, props) => {
  await p.click(OnlineTest.viewDetailBtn);
};

const startTestNowBtn = async (p, props) => {
  await p.click(OnlineTest.startTestNowBtn);
};

const sortTestList = async (p, props) => {
  await p
    .click(OnlineTest.OnlineTestsTab)
    .click(OnlineTest.searchField)
    .typeText(props.searchTerm)
    .click(OnlineTest.testFilter)
    .click(OnlineTest.searchYourTestBtn);
};

const contactExaminerBtn = async (p, props) => {
  await p.click(OnlineTest.contactExaminerBtn);
};
const getInnertextAndVerify = async (p, props) => {
  const actualSelectorText = await cast(p).selector(props.selector).innerText();
  console.log(actualSelectorText);
  if (actualSelectorText == props.expectedtText) {
    console.log(`Expected -> ${props.expectedtText} == Actual -> ${actualSelectorText}`);
  } else {
    console.log(`Expected ${props.expectedtText} != Actual ${actualSelectorText}`);
  }
};

async function returnInnertext(p, props) {
  const actualSelectorText = await cast(p).selector(props.selector).innerText();
  return actualSelectorText;
}

module.exports = {
  navigateTo,
  elementIsChecked,
  elementIsVisible,
  login,
  signUp,
  searchTestBtn,
  searchFilter,
  getInnertextAndVerify,
  returnInnertext,
  startTestNowBtn,
  sortTestList,
  contactExaminerBtn,
  termsAndCondition,
  signupForTestYou,
  viewDetailBtn,
  searchField,
  onlineTestTab,
};
