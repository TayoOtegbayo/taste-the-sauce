// @ts-check

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import { LoginPage } from './login.page'

beforeEach(() => {
  cy.visit('/')
})

describe('Login form', () => {
  // visit the login page before each test
  it('shows an error for empty username field', () => {
    LoginPage.getLogin().click()
    LoginPage.showError('Epic sadface: Username is required')

    // click on the login button without
    // entering any of the information
    //
    // the login page should show the error
    // with text "Epic sadface: Username is required"
  })

  it('shows an error for empty password field', () => {

    LoginPage.getUsername().type('standard_user')
    LoginPage.getLogin().click()
    LoginPage.showError('Epic sadface: Password is required')

    // enter username "name" into the input field
    // and click the login button
    // without entering the password
    //
    // the login page should show the error
    // with text "Epic sadface: Password is required"
  })
})
