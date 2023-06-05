const SignupPage = {
    createAnAccountLink: '//*[@id="ctl00_headerTop_signin1"]/div/a[2]',
    userNameField: '#ctl00_CPHContainer_txtFname',
    emailField: '#ctl00_CPHContainer_txtEmail',
    loginIdField: '#ctl00_CPHContainer_txtUserLogin1',
    passwordField: '#ctl00_CPHContainer_txtpassword',
    reEnterPassword: '#ctl00_CPHContainer_txtReType',
    captchText: '#ctl00_CPHContainer_dxCaptcha_IMG',
    wordVerification: '#ctl00_CPHContainer_txtVarificationCode',
    createMyAccountBtn: '#ctl00_CPHContainer_btnRegistration',

   
    termsAndServiceLink: '//*[text()="By Creating an Account, You Agree To Accept "]//a',
    termsAndServiceHeading: 'div.content div.mainnote p ',

    signupErrorText: '#ctl00_CPHContainer_lblResult',
    createAFreeAccText: 'ctl00_CPHContainer_pnlSignup',
   
  };
  
  module.exports = SignupPage;