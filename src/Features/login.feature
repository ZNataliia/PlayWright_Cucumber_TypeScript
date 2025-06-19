@regression @login
Feature: WebdriverUniversity.com - Login Page
    Background: Navigation to login page
        Given I navigate to the webdriveruniversity homepage
        When I click on the login portal button
        And I switch to the new browser tab

    Scenario Outline: Validation login Form Submission
        And I fill login field with "<login>"
        And I fill password field with "<password>"
        And I click on the login button
        Then I should be presented with a "<message>" message
        @smoke
        Examples:
            | login     | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Carter       | validation failed    |
            | Grace     | webdriver123 | validation failed    |
