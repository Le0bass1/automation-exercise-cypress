import { HeaderComponent } from '../../support/components/headerComponent'
import { LoginPage } from '../../support/pages/loginPage'
import { SignupPage } from '../../support/pages/signupPage'
import { AccountCreatedPage } from '../../support/pages/accountCreatedPage'
import { User } from '../../support/types/user'
import { generateFullUser } from '../../support/utils/userGenerator'
import { HomePage } from '../../support/pages/homePage'

describe('User Registration', () => {
  const headerComponent = new HeaderComponent()
  const homePage = new HomePage()
  const loginPage = new LoginPage()
  const signupPage = new SignupPage()
  const accountCreatedPage = new AccountCreatedPage()

  let user: User

  beforeEach(() => {
    cy.visit('/')
    homePage.verifyHomePage()
    headerComponent.goToLoginPage()
    user = generateFullUser()
  })

  describe('When register data is invalid', () => {
    it('should display an error message after entering an existing email address and prevent the creation of a new account.', () => {
      loginPage.fillSignupFormWithExistingEmail(user)
      loginPage.clickSignupButton()
      cy.contains('Email Address already exist!').should('be.visible')
    })
  })

  describe('When user data is valid', () => {
    it('should successfully create account and display confirmation page', () => {
      loginPage.fillSignupForm(user)
      loginPage.clickSignupButton()
      signupPage.fillSignupInputs(user)
      signupPage.clickSignupButton()
      accountCreatedPage.confirmAccountCreated(user)
    })
  })
})