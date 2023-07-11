Feature: Exchange one currency with other

    Background:
        Given user is on "Currency exchange" page

    Scenario: User opens pay currency dropdown
        Given user has any assets
        When user clicks on pay currency field
        Then list of user's assets is displayed in dropdown

    Scenario: User closes pay currency modal
        Given list of user's assets is displayed in dropdown
        When user clicks on background of page
        Then pay currency dropdown closes
        And default value is displayed in pay currency field

    Scenario: User chooses pay currency
        Given list of user's assets is displayed in dropdown
        When user clicks on desired pay currency
        Then pay currency dropdown closes
        And selected value is displayed in pay currency field

    Scenario: User opens receive currency dropdown
        Given user has any assets
        When user clicks on receive currency field
        Then list of all available currencies is displayed in dropdown

    Scenario: User closes receive currency modal
        Given list of all available currencies is displayed in dropdown
        When user clicks on background of page
        Then receive currency dropdown closes
        And default value is displayed in receive currency field

    Scenario: User chooses receive currency
        Given list of all available currencies is displayed in dropdown
        When user clicks on desired pay currency
        Then receive currency dropdown closes
        And selected value is displayed in receive currency field

    Scenario: User clicks on any currency amount field
        Given value is displayed in pay currency field
        When user clicks on any curency amount field
        Then same currency amount field becomes active
        And user can enter value to same currency amount field

    Scenario: User enters valid value to any currency amount field
        Given any currency amount field is active
        When user enters number to any currency amount field not greater than the maximum amount of pay currency available
        Then entered value is displayed in same currency amount field
        And appropriate calculated value is displayed in other currency amount field

    Scenario: User enters too big number value to any currency amount field
        Given any currency amount field is active
        When user enters number to any currency amount field greater than the maximum amount of pay currency available
        Then appropriate calculated maximum value is displayed in both currency amount fields

    Scenario: User chooses to exchange all pay currency
        Given value is displayed in pay currency field
        When user clicks on button containing "USE ALL"
        Then appropriate calculated maximum value is displayed in both currency amount fields

    Scenario: User enters negative number value to any currency amount field
        Given any currency amount field is active
        When user enters negative number to any currency amount field
        Then nothing happens

    Scenario: User enters string value to any currency amount field
        Given any currency amount field is active
        When user enters string to any cuurency amount field
        Then nothing happens

    Scenario: User opens history list of previous currency exchanges
        Given history list of previous currency exchanges is not open
        When user clicks on button with text "HISTORY"
        Then list of previous currency exchanges opens

    Scenario: User exchanges currency
        Given value is displayed in pay currency field
        And value is displayed in receive currency field
        And both currency amount fields have value
        When user clicks on button with text "EXCHANGE"
        Then currency is exchanged

