export class HomePage {
  open() {
    cy.visit('/')
    cy.contains('Features Items').should('be.visible')
  }

  goToLoginPage() {
    cy.get('i[class="fa fa-lock"]').click()
  }

  goToContactUsPage() {
    cy.get('a[href="/contact_us"]').click()
    cy.contains('Contact Us').should('be.visible')
  }

  logout() {
    cy.get('a[href="/logout"]').click()
  }
}