Feature: Online Test

Scenario: Verify user is able to search the list of online tests using the search field located on the online tests page
        Given User navigate to site
        When User click on button online test
        Then User click on search field and enter search term
        And User Apply search filter
        And User click on search button
        Then Assert the search result

    Scenario: Verify user is able to see the test details using "View detail" button
        Given User navigate to site
        When User click on button online test
        Then User click on search field and enter search term
        And User Apply search filter
        And User click on search button
        And User click on view details button
        Then Assert the view details result
       

    Scenario: Verify user is able to start the test
        Given User navigate to site
        When User click on button online test
        Then User click on search field and enter search term
        And User Apply search filter
        And User click on search button
        And User click on view details button
        And User click on start test button
        Then Assert the result when guest click on Start test button
        

    Scenario: Verify user is able to contact examiner
        Given User navigate to site
        When User click on button online test
        Then User click on search field and enter search term
        And User Apply search filter
        And User click on search button
        And Click on contact examiner button
        Then Assert the result when guest user Click on contact examiner button

