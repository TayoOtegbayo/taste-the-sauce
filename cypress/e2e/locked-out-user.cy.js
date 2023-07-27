// @ts-check

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import login, { LoginPage } from './loginPage'

it('shows a login error', () => {
  cy.visit('/')
  LoginPage.getUsername().type('locked_out_user')
  LoginPage.getPassword().type('secret_sauce')
  // initially there should be no errors
  // Tip: code this section after finishing checking the errors
LoginPage.noError()

  //
  // click on the login button
  cy.get('[data-test="login-button"]').click()
  // https://on.cypress.io/click
  //
  // confirm the page shows errors and stays on login URL
  cy.log('**shows errors**')
  LoginPage.getUsername().should('have.class', 'error')
  LoginPage.getPassword().should('have.class', 'error')
  cy.location('pathname').should('eq', '/')

  //
  // confirm there is an error message
  // and click its "close" button after 1 second delay
  LoginPage.getError().should('include.text', 'locked out').and('be.visible').find('.error-button').click()
  // https://on.cypress.io/contains
  // https://on.cypress.io/find
  // https://on.cypress.io/wait
  //
  // confirm the errors go away, but the input fields are not cleared
  LoginPage.noError()
  LoginPage.getUsername().should('have.value', 'locked_out_user')
  LoginPage.getPassword().should('have.value', 'secret_sauce')
})
