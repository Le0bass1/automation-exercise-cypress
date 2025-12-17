import { HomePage } from '../../support/pages/homePage'
import { LoginPage } from '../../support/pages/loginPage'
import { TestCasesPage } from '../../support/pages/testCasesPage'

describe('Test Cases', () => {
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const testCasesPage = new TestCasesPage()

    beforeEach(() => {
        cy.visit('/')
        homePage.goToLoginPage()
        cy.fixture('user.json').then((user) => {
            cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
            loginPage.fillLoginInputs()
            loginPage.clickLoginButton()
            homePage.verifyUserIsLoggedIn()
        })
        homePage.goToTestCasesPage()
    })

    describe('Display successfully all test cases', () => {
    it('Should display all test cases, and expand a random test case', () => {
        testCasesPage.verifyTestCasesPage()
        homePage.verifyUserIsLoggedIn()
        testCasesPage.verifyUserCanSeeAllTestCases(26)
            testCasesPage.clickTestCaseByNumber(7)
        })
    })
})