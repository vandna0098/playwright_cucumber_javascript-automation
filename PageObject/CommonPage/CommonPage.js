const CommonPage = {
    patient: {
        dropdownSelector: `(//*[@data-madel= 'Patient']//a)[2]`,
        addNewPatient: `//*[text()='Add New Patient']`,
        addNewFamilyMember: "//*[text()='Add New Family Member']",
        patientSalutationID: `#AddNew_Patient_SalutationID`,
        patientFirstName: `#AddNew_Patient_FirstName`,
        patientLastName: `#AddNew_Patient_LastName`,
        patientMegaMenu: '//*[@id="top_menu_container"]/ul[1]/li[5]/a[1]',
        homebutton: '//div[@id="navMenuOfficeAdmin"]/ul/li[2]/a[@id="navItemHome"]',
        verifyCheckinNumber: "(//ul[@class='filterList homeApptSubNavList']/li/a)[1]",
    },
    findPatient: {
        findPatientSearchIcon: '#top_menu_container a#imgFindPatient',
        
        lastNameField: 'input#LastName',
        firstNameField: 'input#FirstName',
        DOBField: 'input[name="DateOfBirth"]',
        phoneNumberField: 'input#Phone',
        patientId: 'input#PatientNumber',
        chartNumber: 'input#ChartNumber',
        findButton: 'input#btnSearchPatient',
        checkboxld: '//*[@id="IsPatientActive"]',
        selectDefaultLocation: 'select#PracticeLocationID',
        selectDefaultProvider: '#ProviderID',
        patientList: 'table#tblPatientRecords',
        defaultLocation: '//select[@id="PracticeLocationID"]'
        // patientList: '#tblPatientRecords> tbody > tr:nth-child(1) > td:nth-child(2)'
    },
    ExistingPatientDetails: {
        Name: '//*[@id="divDashboardName"]/p/span[1]',
        Dob: '//*[@id="DOBInfo"]/span[1]',
        Phone: '//*[@id="lblDashboardPhone"]',
        Address: '//*[@id="divPatientDashboardDetails"]/div/div[5]/p/span[2]',
        patientID: "(//p[@class='no-margin']/*//span[@class='data-hj-whitelist']//input)[1]"
    },
    AccountDetails: {
        lastName: `//input[contains(@id,"PR_FLP_LastName")]`,
        firstName: `//input[contains(@id,"PR_FLP_FirstName")]`,
        findButton: `//input[contains(@id,"btnFindLP")]`,
        selectPatient: (name) => `//table[contains(@id,"tbl_PR_FLP_SearchResult_")]/tbody/tr/td[2]/div/span[text()="${name}"]`,
        linkselectedPatientButton: (name) => `input[value="${name}"]`,
        saveLinkedPatientButton: `input#SaveLinkedPatientData`,
        allButton: `input#btnAccInfoOK`,
    },
    ExistingPatientRibbon: {
        patientName: "div[id='HeadPatiFullName']>span",
        patientDOB: "label#Headdob",
        patientLocation: "//select[@id='ddlPatientLocation']"
    },
    SchedulePatient: {
        scheduleMegaMenu: 'li[data-madel="Schedule"] a#ancSchedule',
        dropdownSelector: '(//*[@data-madel= "Schedule"]//a)[2]',
        open: '//*[@id="top_menu_container"]/ul[1]/li[6]/ul/div/li[2]/ul/li[2]/a',
        scheduleLink: "(//a[text()='Schedule'])[2]",
        // monthFromCalenderOne: '(//div[@class="calendar left"])[3]/*//thead//tr//th[@class="month"]//select[@class="monthselect"]',
        monthFromCalenderOne: 'body > div.daterangepicker.dropdown-menu.ltr.show-calendar.opensright > div.calendar.left > div.calendar-table > table > thead > tr:nth-child(1) > th.month > select.monthselect',
        // yearFromCalenderOne: '(//div[@class="calendar left"])[3]/*//thead//tr//th[@class="month"]//select[@class="yearselect"]',
        yearFromCalenderOne: 'body > div.daterangepicker.dropdown-menu.ltr.show-calendar.opensright > div.calendar.left > div.calendar-table > table > thead > tr:nth-child(1) > th.month > select.yearselect',
        clickDate1FromCalenderOne: '(//div[@class="calendar left"])/*//tbody//tr//td[@data-title="r2c0"]',
        
        // schedulemonthFromCalenderOne: '(//div[2]/div[2]/table/thead/tr[1]/th[2]/select[1])[2]',
        // scheduleyearFromCalenderOne: '(//div[2]/div[2]/table/thead/tr[1]/th[2]/select[2])[2]',
        // clickDate19FromCalenderOne: '(//div[2]/div[2]/table/tbody/tr[4]/td[5])[2]',
        // scheduleMonthFromCalenderTwo: '//div[54]/div[3]/div[2]/table/thead/tr[1]/th[2]/select[1]',
        // scheduleYearFromCalenderTwo: '//div[54]/div[3]/div[2]/table/thead/tr[1]/th[2]/select[2]',
        // clickDate19FromCalenderTwo: '(//div[3]/div[2]/table/tbody/tr[4]/td[5])[3]',

        monthFromCalenderTwo: '//div[3]/div[2]/table/thead/tr[1]/th[2]/select[1]',
        yearFromCalenderTwo: '//div[3]/div[2]/table/thead/tr[1]/th[2]/select[2]',
        clickDate2FromCalenderTwo: '//div[42]/div[3]/div[2]/table/tbody/tr[1]/td[6]',
       
        scheduled: "(//*[text()='Scheduled'])",
        scheduleResources: '//*[@id="schedularSubMenu"]/ul/li[6]/a',
        scheduleResourcesPlusIcon: '//*[@title="Add Schedule Resource"]',
        clearOrblockSchedule: `(//*[text()='Clear/Block Schedule'])`,
    },
    officeAdmin: {
        officeAdminIcon: 'div#top_menu_container ul.place-right li:nth-child(7) a',
        businessAdministration: 'div#navMenuOfficeAdmin ul li:nth-child(7) a[class="Office Admin > Business Details"]',
        modules: 'div#navMenuOfficeAdmin ul li:nth-child(8) a[class="Office Admin > Modules"]',
        scheduleLink: 'div#Modules_menu ul li[aria-controls="Scheduler"] a',
        encountersLink: 'div#Modules_menu ul li[aria-controls="Encounter"] a',
       
    },
    Encounters: {
        encounterDropDown: "(//*[@data-madel= 'Encounters']//a)[2]"
     },
     Home : {
        homeTable: 'table#home_appointments_grid tbody tr'
     },
     SWWToastMessage: {
        ToastMsg: `//div[@class='jquery-notific8-message']`,
        SWWMsg: `//div[@class='jquery-notific8-message'][text()='Something went wrong report this to MaximEyes Support.']`,
        InfoIcon:`//div[@class="jquery-notific8-message"]/span[starts-with(@class,'mif-info')]`,
        Close:`//div[@class='jquery-notific8-close-sticky']`,
        Message:`//div[@id='test']`,
    },
    dayLocator :(day) =>  `//div[starts-with(@class,'calendar left single')]//tr//td[not(contains(@class, 'off available'))][text()='${day}']`,
}

module.exports = CommonPage;