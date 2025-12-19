export class TestCasesPage {
    selectors = {
        testCasesTitle: 'Test Cases',
        panelGroup: '.panel-group',
        panel: '.panel',
        panelTitleLink: '.panel-title a',
        panelCollapse: '.panel-collapse'
    }

    verifyTestCasesPage() {
        cy.contains(this.selectors.testCasesTitle).should('be.visible')
    }

    checksIfTestCasesAreVisible(minimumItems: number) {
        cy.get(this.selectors.panelGroup)
            .should('be.visible')
            .find(this.selectors.panel)
            .should('have.length.at.least', minimumItems)
    }

    clickTestCaseByNumber(testCaseNumber: number) {
        cy.get(`${this.selectors.panelGroup} ${this.selectors.panel}`)
            .eq(testCaseNumber - 1)
            .find(this.selectors.panelTitleLink)
            .click()

            cy.get(`${this.selectors.panelGroup} ${this.selectors.panel}`)
            .eq(testCaseNumber - 1)
            .find(this.selectors.panelCollapse)
            .should('be.visible')
            .and('have.class', 'in')
    }
}