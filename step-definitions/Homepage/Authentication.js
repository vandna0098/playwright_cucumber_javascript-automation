const {
  login,
  navigateTo,
  getInnertextAndVerify,
  returnInnertext,
  signUp,
  termsAndCondition,
  signupForTestYou,
} = require('../../stories/stories');
const { Given, When } = require('cucumber');
const { cast } = require('playwright-fluent');
const LoginPage = require('../../PageObject/CommonPage/LoginPage');
const SignupPage = require('../../PageObject/CommonPage/SignupPage');

Given('User navigate to site', async function () {
  await cast(this.p).runStory(navigateTo, { url: 'https://www.testyou.in/index.aspx' });
});

Given('User Login', async function () {
  await cast(this.p).runStory(login, {
    username: 'abc@mailinator.com',
    password: '!Q@W#E4r5t6y',
  });
});

Given('Signup for TestYou', async function () {
  await cast(this.p).runStory(signupForTestYou, {});
});

Given('User Signup', async function () {
  await cast(this.p).runStory(signUp, {
    username: 'test',
    email: 'abc@mailinator.com',
    password: '!Q@W#E4r5t6y',
    loginId: 'testuser',
    reEnterPassword: '!Q@W#E4r5t6y',
    wordVerification: '#',
  });
});

Given('Verify Terms And Condition page', async function () {
  await cast(this.p).runStory(termsAndCondition).runStory(getInnertextAndVerify, {
    selector: SignupPage.termsAndServiceHeading,
    expectedtText: `Please read the terms carefully before using this website. All rights reserved by
        the Company, including changing these Terms and Conditions with no prior notice,
        and you are solely responsible to review these Terms and Conditions regularly.`,
  });
});
