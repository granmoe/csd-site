Feature:
    In order to laugh uproariously
    As an agile developer 
    I want to use the latest and greatest technologies
# Background:
#     Given I open the url "http://www.thetestroom.com/webapp/"
# Scenario: Check that Home link works
#     When  I click on the link "HOME"
#     Then  I expect the url to contain "index.html"
# Scenario: Check that Adoption link works
#     When  I click on the link "ADOPTION"
#     Then  I expect the url to contain "adoption.html"
# Scenario: Check that About link works
#     When  I click on the link "ABOUT"
#     Then  I expect the url to contain "about.html"
# Scenario: Check that Contact link works
#     When  I click on the link "CONTACT"
#     Then  I expect the url to contain "contact.html"

#   Scenario Outline: Check Links
#     When  I click on the link <link>
#     Then  I expect the url to contain <lowercase>
#     Examples: 
#       | link       | lowercase  |
#       | "HOME"     | "index"    | 
#       | "ADOPTION" | "adoption" | 
#       | "CONTACT"  | "contact"  |   
#       | "ABOUT"    | "about"    | 

# Scenario: Submit the form
Background:
    Given I open the url "http://localhost:3000/contact"
Scenario Outline:
    When I set <name> to the inputfield "[name='name_field']"
    # And  I click on the element "#rinfo"
    # And  I click on the element "#cdona"
    And  I set <address> to the inputfield "input[name='address_field']"
    And  I set <postcode> to the inputfield "input[name='postcode_field']"
    And  I set <email> to the inputfield "input[name='email_field']"
    And  I click on the button "button[type='submit']"
    Then I expect the url to contain "contact_confirm"

    Examples:
    |name|address|postcode|email|
    |"matt"|"the moon"|"5406"|"thegranmoe@granmoe.com"|


