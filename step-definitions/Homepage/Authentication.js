const {
  navigateTo,
  getInnertextAndVerify,
  returnInnertext,
  termsAndCondition,
  signupForTestYou,
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


} = require('../../stories/stories');
const { Given, When } = require('cucumber');
const { cast } = require('playwright-fluent');
const LoginPage = require('../../PageObject/CommonPage/LoginPage');
const SignupPage = require('../../PageObject/CommonPage/SignupPage');



Given('Click On Login Link', async function () {
  await cast(this.p).runStory(signInLink, { });
});
Given('Enter Email Address', async function () {
  await cast(this.p).runStory(loginUserName, {
    username: 'abc@mailinator.com'
  });
});
Given('Enter User Password', async function () {
  await cast(this.p).runStory(loginUserPassword, {
    password: '!Q@W#E4r5t6y',
  });
});
Given('Click On Login Button', async function () {
  await cast(this.p).runStory(loginBtn, {});
});

Given('Click On Create An Account Link', async function () {
  await cast(this.p).runStory(createAnAccountLink, {});
});
Given('Enter User Name', async function () {
  await cast(this.p).runStory(enterUserName, {
    username: 'test',
  });
});
Given('Enter EmailId', async function () {
  await cast(this.p).runStory(enterEmail, {
    email: 'abc@mailinator.com',
  });
});

Given('Enter LoginId', async function () {
  await cast(this.p).runStory(enterloginId, {
    loginId: 'testuser',
  });
});
Given('Enter Password', async function () {
  await cast(this.p).runStory(enterPassword, {
    password: '!Q@W#E4r5t6y',
  });
});
Given('Enter Re-Enter Password', async function () {
  await cast(this.p).runStory(renterPassword, {
    reEnterPassword: '!Q@W#E4r5t6y',
  });
});
Given('Enter Captcha', async function () {
  await cast(this.p).runStory(wordVerification, {
    wordVerification: '#',
  });
});

Given('Click On Create An Account Button', async function () {
  await cast(this.p).runStory(createAccountBtn, {
  });
});

Given('Verify Error Message Due To Enter Wrong Captch', async function () {
  await cast(this.p)
  
  .runStory(getInnertextAndVerify, {
    selector: SignupPage.signupErrorText ,
    expectedtText: `Invalid Code!`,
  });
});

Given('Verify Error Message Due To Enter Invalid Credentials', async function () {
  await cast(this.p)
  
  .runStory(getInnertextAndVerify, {
    selector: LoginPage.loginErrorText,
    expectedtText: `Userid or Password Not Match`,
  });
});



Given('Click on  Signup for TestYou', async function () {
  await cast(this.p).runStory(signupForTestYou, {});
});

Given('Verify Signup Page', async function () {
  await cast(this.p)
  
  .runStory(getInnertextAndVerify, {
    selector: SignupPage.createAFreeAccText,
    expectedtText: `Create a Free account`,
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
