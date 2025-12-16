import { LoginPage } from '../../support/pages/loginPage'
import { HomePage } from '../../support/pages/homePage'
import { User } from '../../support/types/user'
import { generateFullUser } from '../../support/utils/userGenerator'

describe('Log in', () => {
  const homePage = new HomePage()
  const loginPage = new LoginPage()

  let user: User

  beforeEach(() => {
    cy.visit('/')
    homePage.goToLoginPage()

    user = generateFullUser()
  })

  describe('With invalid email', () => {
    it('Should not log in.', () => {
      loginPage.fillInvalidEmailLoginInputs(user)
      loginPage.clickLoginButton()
      loginPage.verifyInvalidEmailMessage()
    })
  })

  describe('With invalid password', () => {
    it('Should not log in.', () => {
      loginPage.fillInvalidPasswordLoginInputs(user)
      loginPage.clickLoginButton()
      loginPage.verifyInvalidPasswordMessage()
    })
  })

  describe('With valid credentials', () => {
    it('Should log in normally.', () => {
      cy.fixture('user.json').then((user) => {
        cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
        loginPage.fillLoginInputs()
        loginPage.clickLoginButton()
        cy.contains('Logged in as').should('be.visible')
      })
    })
  })

  describe('Logout', () => {
    it('Should log out successfully.', () => {
      loginPage.fillLoginInputs()
      loginPage.clickLoginButton()
      homePage.logout()
      cy.contains('Login to your account').should('be.visible')
    })
  })
})