export class TestCasesPage {
    verifyTestCasesPage() {
        cy.contains('Test Cases').should('be.visible')
    }

    checksIfTestCasesAreVisible(minimumItems: number) {
        cy.get('.panel-group')
            .should('be.visible')
            .find('.panel')
            .should('have.length.at.least', minimumItems)
    }

    clickTestCaseByNumber(testCaseNumber: number) {
        cy.get('.panel-group .panel')
            .eq(testCaseNumber - 1)
            .find('.panel-title a')
            .click()

            cy.get('.panel-group .panel')
            .eq(testCaseNumber - 1)
            .find('.panel-collapse')
            .should('be.visible')
            .and('have.class', 'in')
    }
}