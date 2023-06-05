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



const signInLink =async (p) => {
  await p.click(LoginPage.signInLink);
};
const loginUserName =async (p , props) => {
  console.log(`UserName: ${props.username}`);
  await p
      .click(LoginPage.userNameField)
      .typeText(props.username);
};
const loginUserPassword =async (p , props) => {
  console.log(`Password: ${props.password}`);
  await p
      .click(LoginPage.passwordField)
      .typeText(props.password);
};

const loginBtn =async (p) => {
  await p.click(LoginPage.logInBtn);
};

const signupForTestYou = async (p) => {
  await p.click(LoginPage.signInLink).click(LoginPage.signupForTestYouBtn);
};



const createAnAccountLink =async (p , props) => {
  
  await p.click(SignupPage.createAnAccountLink);
};
const enterUserName =async (p , props) => {
  console.log(`UserName: ${props.username}`);
  await p.click(SignupPage.userNameField).typeText(props.username);
};

const enterEmail =async (p , props) => {
  console.log(`email: ${props.email}`);
  await p.click(SignupPage.emailField).typeText(props.email);
};
const enterloginId =async (p , props) => {
  console.log(`loginId: ${props.loginId}`);
  await p.click(SignupPage.loginIdField).typeText(props.loginId);
};
const enterPassword =async (p , props) => {
  console.log(`password: ${props.password}`);
  await p .click(SignupPage.passwordField).typeText(props.password);
};
const renterPassword =async (p , props) => {
  console.log(`reEnterPassword: ${props.reEnterPassword}`);
  await p.click(SignupPage.reEnterPassword).typeText(props.reEnterPassword);
};

const wordVerification =async (p , props) => {
  console.log(`wordVerification: ${props.wordVerification}`);
  await p .click(SignupPage.wordVerification).typeText(props.wordVerification);
};

const createAccountBtn =async (p) => {
  await p.click(SignupPage.createMyAccountBtn);
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
  await p.selector(props.selector).isVisible();
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
  signInLink,
  loginUserName,
  loginUserPassword,
  createAnAccountLink,
  enterUserName,
  enterEmail,
  enterloginId,
  enterPassword,
  renterPassword,
  createAccountBtn,
  wordVerification,
  loginBtn,
  
};
