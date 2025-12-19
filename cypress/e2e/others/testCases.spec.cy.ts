import { HeaderComponent } from '../../support/components/headerComponent'
import { LoginPage } from '../../support/pages/loginPage'
import { TestCasesPage } from '../../support/pages/testCasesPage'
import { HomePage } from '../../support/pages/homePage'

describe('Test Cases', () => {
    const headerComponent = new HeaderComponent()
    const homePage = new HomePage()
    const loginPage = new LoginPage()
    const testCasesPage = new TestCasesPage()

    beforeEach(() => {
        cy.visit('/')
        homePage.verifyHomePage()
        headerComponent.goToLoginPage()
        cy.fixture('user.json').then((user) => {
            cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
            loginPage.fillLoginForm()
            loginPage.clickLoginButton()
            headerComponent.verifyUserIsLoggedIn()
        })
        headerComponent.goToTestCasesPage()
    })

    describe('Display successfully all test cases', () => {
    it('Should display all test cases, and expand a random test case', () => {
        testCasesPage.verifyTestCasesPage()
        headerComponent.verifyUserIsLoggedIn()
        testCasesPage.checksIfTestCasesAreVisible(26)
            testCasesPage.clickTestCaseByNumber(7)
        })
    })
})