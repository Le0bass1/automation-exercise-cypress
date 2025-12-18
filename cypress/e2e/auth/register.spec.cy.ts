import { HeaderComponent } from '../../support/components/headerComponent'
import { LoginPage } from '../../support/pages/loginPage'
import { SignupPage } from '../../support/pages/signupPage'
import { AccountCreatedPage } from '../../support/pages/accountCreatedPage'
import { User } from '../../support/types/user'
import { generateFullUser } from '../../support/utils/userGenerator'
import { HomePage } from '../../support/pages/homePage'

describe('Create an account', () => {
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

  describe('With existing email', () => {
    it('Should not create an account', () => {
      loginPage.fillExistingEmailRegisterInputs(user)
      loginPage.clickSignupButton()
      cy.contains('Email Address already exist!').should('be.visible')
    })
  })

  describe('With valid user data', () => {
    it('Should create an account successfully', () => {
      loginPage.fillRegisterInputs(user)
      loginPage.clickSignupButton()
      signupPage.fillSignupInputs(user)
      signupPage.clickSignupButton()
      accountCreatedPage.confirmAccountCreated(user)
    })
  })
})