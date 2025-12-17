export class HomePage {
  open() {
    cy.visit('/')
    cy.contains('Features Items').should('be.visible')
  }

  verifyUserIsLoggedIn() {
    cy.contains('Logged in as').should('be.visible')
    cy.log('User is logged in')
}

  goToLoginPage() {
    cy.get('i[class="fa fa-lock"]').click()
  }

  goToContactUsPage() {
    cy.get('a[href="/contact_us"]').click()
    cy.contains('Contact Us').should('be.visible')
  }

  goToTestCasesPage() {
    cy.get('a[href="/test_cases"]').first().click()
  }

  logout() {
    cy.get('a[href="/logout"]').click()
  }
}