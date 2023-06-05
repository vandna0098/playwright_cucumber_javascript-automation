const OnlineTest = {
  OnlineTestsTab: '//*[@id="ctl00_CPHHeader_HyperLink1"]',
  searchField: '#ctl00_CPHContainer_Searchbox_txtFilter',
  testFilter: '#ctl00_CPHContainer_Searchbox_rdolstSearch_1',
  searchYourTestBtn: '#ctl00_CPHContainer_Searchbox_filterSubmit',
  viewDetailBtn: '#ctl00_CPHContainer_gridTest_ctl03_HyperLink1',
  descriptionKeyword: 'div.tstdscrptitle.alpha.omega.grid_3',
  startTestNowBtn: '#ctl00_CPHContainer_lnkStartbtn div',

  mostVisitedFilter: '//*[@id="ctl00_CPHContainer_gridTest_ctl01_lnkmostattempted"]',
  mostRatedFilter: '//*[text()="Most Rated "]',
  latestCreatedFilter: '#ctl00_CPHContainer_gridTest_ctl01_lnkLatest',
  contactExaminerBtn: '#ctl00_CPHContainer_gridTest_ctl02_HyperLink3 div',
  testDetails: '//*[@id="ctl00_CPHContainer_gridTest"]/tbody/tr[2]/td/div/div/div[2]/div[1]/div',
  termsAndServiceLink:
    '//*[@id="ctl00_CPHContainer_pnlSignup"]/div/div[2]/div[2]/div[10]/div/span/a',

  loginPageTitle: '#ctl00_CPHContainer_pnl_login div span',
  
};

module.exports = OnlineTest;
