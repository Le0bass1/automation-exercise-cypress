export class HeaderComponent {
    goToHome() {
      cy.get('a[href="/"]').contains('Home').click()
    }
  
    goToProducts() {
      cy.get('a[href="/products"]').click()
    }
  
    goToCart() {
      cy.get('a[href="/view_cart"]').click()
    }
  
    goToLoginPage() {
      cy.get('i[class="fa fa-lock"]').click()
    }
  
    goToTestCasesPage() {
      cy.get('a[href="/test_cases"]').first().click()
    }
  
    goToContactUsPage() {
      cy.get('a[href="/contact_us"]').click()
    }
  
    logout() {
      cy.get('a[href="/logout"]').click()
    }
  
    verifyUserIsLoggedIn(username?: string) {
      cy.contains('Logged in as').should('be.visible')
      if (username) {
        cy.contains(`Logged in as ${username}`).should('be.visible')
      }
    }
  }