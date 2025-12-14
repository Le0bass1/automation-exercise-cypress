import { HomePage } from '../support/pages/homePage'
import { LoginPage } from '../support/pages/loginPage'
import { SignupPage } from '../support/pages/signupPage'
import { AccountCreatedPage } from '../support/pages/accountCreatedPage'
import { User } from '../support/types/user'
import { generateFullUser } from '../support/utils/userGenerator'

describe('Create an account', () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()
  const signupPage = new SignupPage()
  const accountCreatedPage = new AccountCreatedPage()

  let user: User

  before(() => {
    user = generateFullUser()
  })

  it('should create an account', () => {
    cy.visit(`${Cypress.env('baseUrl')}`)
    homePage.goToLoginPage()
    loginPage.fillRegisterInputs(user)
    loginPage.clickSignupButton()
    signupPage.fillSignupInputs(user)
    cy.intercept('POST', '**/signup').as('signupRequest');
    signupPage.clickSignupButton()
    cy.wait('@signupRequest').then((interception) => {
      cy.log(interception.request.body);
      cy.log(interception.response?.statusCode?.toString() ?? 'No response');
    });
    accountCreatedPage.confirmAccountCreated(user)
  })
})