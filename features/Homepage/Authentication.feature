Feature: Authentication Test

    Scenario: Verify the functionality of the "Or Signup for TestYou" button on the login page
        Given User navigate to site
        And Signup for TestYou

    Scenario: User Login with Invalid Password
        Given User navigate to site
        And User Login 

    Scenario: Verify that the user is unable to proceed by entering the wrong captcha
        Given User navigate to site
        And User Signup

    Scenario: Verify the functionality of the " Our Terms Of Service " button located on the sign up page
        Given User navigate to site
        And Verify Terms And Condition page
   
   