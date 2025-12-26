import { LoginPage } from '../../support/pages/loginPage'
import { User } from '../../support/types/user'
import { generateFullUser } from '../../support/utils/userGenerator'
import { HeaderComponent } from '../../support/components/headerComponent'
import { HomePage } from '../../support/pages/homePage'

describe('User Login', () => {
  const headerComponent = new HeaderComponent()
  const homePage = new HomePage()
  const loginPage = new LoginPage()

  let user: User

  beforeEach(() => {
    cy.visit('/')
    homePage.verifyHomePage()
    headerComponent.goToLoginPage()
    user = generateFullUser()
  })

  describe('When credentials are valid', () => {
    it('should display an error message and prevent the user from logging in if the email address is invalid.', () => {
      loginPage.fillLoginFormWithInvalidEmail(user)
      loginPage.clickLoginButton()
      loginPage.verifyInvalidEmailErrorMessage()
    })

    it('should display an error message and prevent the user from logging in if the password is invalid.', () => {
      loginPage.fillLoginFormWithInvalidPassword(user)
      loginPage.clickLoginButton()
      loginPage.verifyInvalidPasswordErrorMessage()
    })
  })

  describe('When credentials are valid', () => {
    it('should successfully authenticate user and display logged-in state', () => {
      cy.fixture('user.json').then((user) => {
        cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
        loginPage.fillLoginForm()
        loginPage.clickLoginButton()
        headerComponent.verifyUserIsLoggedIn()
      })
    })
  })
})

describe('User Logout', () => {
  const headerComponent = new HeaderComponent()
  const homePage = new HomePage()
  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.verifyHomePage()
    headerComponent.goToLoginPage()
  })

  it('should successfully log out user and redirect to login page', () => {
    loginPage.fillLoginForm()
    loginPage.clickLoginButton()
    headerComponent.verifyUserIsLoggedIn()
    headerComponent.logout()
    cy.contains('Login to your account').should('be.visible')
  })
})