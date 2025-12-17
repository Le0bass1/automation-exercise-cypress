export class HomePage {
  open() {
    cy.visit('/')
    cy.contains('Features Items').should('be.visible')
  }
}