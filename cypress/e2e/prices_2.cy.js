/// <reference types="cypress" />
import 'cypress-map'


it('confirms the item with the lowest price using cypress map', () => {
  cy.visit('/')
  // Tip: grab the username and the password from the login page
  // It is ok for now to hardcode it in the spec source here
  //
  // get the username field and type the standard user
  // https://on.cypress.io/get
  // https://on.cypress.io/type
  cy.get('[data-test="username"]').type('standard_user')
  // get the password field and type the password
  cy.get('[data-test="password"]').type('secret_sauce')
  // get the login button and click on it
  // https://on.cypress.io/click
  cy.get('[data-test="login-button"]').click()
  // you should transition to the inventory page
  // https://on.cypress.io/location
  // see assertion examples at
  // https://glebbahmutov.com/cypress-examples/commands/location.html
  cy.location('pathname').should('equal', '/inventory.html')
  // confirm the inventory page really loads
  // and the lowest price is 7.99
  // Use utility queries from cypress-map plugin
  // https://github.com/bahmutov/cypress-map
  cy.get('.inventory_list')
    .should('be.visible')
    .find('.inventory_item_price')
    .should('have.length.greaterThan', 3)
    .map('innerText')
    .print()
    .mapInvoke('slice', 1)
    .print()
    .map(Number)
    .print()
    .apply(Cypress._.min)
    .should('equal', 7.99)
})
