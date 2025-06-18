Feature: WebdriverUniversity.com - Contact Us Page
    Scenario: Valid Contact Us Form Submission
        Given I navigated to homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission: no email
        Given I navigated to homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an error contact us message

    Scenario: Valid Contact Us Form Submission - using specific data
        Given I navigated to homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a specific first name "John"
        And I type a specific last name "Doe"
        And I enter a specific email address "1@gmail.com"
        And I type a specific comment "Test comment" and a number 2 withing the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Valid Contact Us Form Submission - random data
        Given I navigated to homepage
        When I click on the contact us button
        And I switch to the new browser tab
        And I type a random first name
        And I type a random last name
        And I enter a random email address
        And I type a random comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
