// @ts-check
/// <reference types="cypress" />

export const LoginPage = {
  getUsername() {
    return cy.get('[data-test="username"]')
  },
  getPassword() {
    return cy.get('[data-test="password"]')
  },
  getError() {
    return cy.get('[data-test=error]')
  },
  getLogin() {
    return cy.get('[data-test="login-button"]')
  },
  closeError() {
   return cy.get('.error-button')
  },
  showError(text) {
    cy.contains('[data-test="error"]', text).should('be.visible')
    this.getUsername().should('have.class', 'error')
    this.getPassword().should('have.class', 'error')
  },
  noErrors() {
    cy.log('**there are no errors**')
    this.getError().should('not.exist')
    this.getUsername().should('not.have.class', 'error')
    this.getPassword().should('not.have.class', 'error')
  },
}
