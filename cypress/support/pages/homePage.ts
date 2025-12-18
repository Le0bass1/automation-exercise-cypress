export class HomePage {
  verifyHomePage() {
    cy.visit('/')
    cy.contains('Features Items').should('be.visible')
  }
}