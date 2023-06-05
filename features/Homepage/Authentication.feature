Feature: SignUp And Login Test


    Scenario: Verify the functionality of the "Or Signup for TestYou" button on the login page
        Given User navigate to site
        And Click on  Signup for TestYou
        Then Verify Signup Page

    Scenario: User Login with Invalid Password
        Given User navigate to site
        Then Click On Login Link
        And Enter Email Address
        And Enter User Password
        And Click On Login Button
        Then Verify Error Message Due To Enter Invalid Credentials

    Scenario: Verify that the user is unable to proceed by entering the wrong captcha
        Given User navigate to site
        Then Click On Create An Account Link
        And Enter User Name
        And Enter EmailId
        And Enter LoginId
        And Enter Password
        And Enter Re-Enter Password
        And Enter Captcha
        And Click On Create An Account Button
        Then Verify Error Message Due To Enter Wrong Captch

      

    Scenario: Verify the functionality of the " Our Terms Of Service " button located on the sign up page
        Given User navigate to site
        And Verify Terms And Condition page
   
   

   