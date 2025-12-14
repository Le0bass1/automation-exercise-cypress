import { LoginPage } from '../support/pages/loginPage'
import { HomePage } from '../support/pages/homePage'

describe('Login', () => {

  const homePage = new HomePage()
  const loginPage = new LoginPage()

  it('should login with valid credentials', () => {
    cy.visit(`${Cypress.env('baseUrl')}`)
    homePage.goToLoginPage()
    loginPage.fillLoginInputs()
    loginPage.clickLoginButton()
  })
})