// @ts-check

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

export const LoginPage = {
  getUsername() {
    return cy.get('[data-test="username"]')
  },
  getPassword() {
    return cy.get('[data-test="password"]')
  },
  getError() {
    return cy.get('[data-test="error"]')
  },
  noError() {
      cy.log('**there are no errors**')
    cy.contains('[data-test="error"]', 'locked out').should('not.exist')
    cy.get('[data-test="username"]').should('not.have.class', 'error')
    cy.get('[data-test="password"]').should('not.have.class', 'error')
  },
}
