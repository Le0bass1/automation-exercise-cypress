import { HeaderComponent } from '../../support/components/headerComponent'
import { LoginPage } from '../../support/pages/loginPage'
import { TestCasesPage } from '../../support/pages/testCasesPage'

describe('Test Cases', () => {
    const headerComponent = new HeaderComponent()
    const loginPage = new LoginPage()
    const testCasesPage = new TestCasesPage()

    beforeEach(() => {
        cy.visit('/')
        headerComponent.goToLoginPage()
        cy.fixture('user.json').then((user) => {
            cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
            loginPage.fillLoginInputs()
            loginPage.clickLoginButton()
            headerComponent.verifyUserIsLoggedIn()
        })
        headerComponent.goToTestCasesPage()
    })

    describe('Display successfully all test cases', () => {
    it('Should display all test cases, and expand a random test case', () => {
        testCasesPage.verifyTestCasesPage()
        headerComponent.verifyUserIsLoggedIn()
        testCasesPage.verifyUserCanSeeAllTestCases(26)
            testCasesPage.clickTestCaseByNumber(7)
        })
    })
})