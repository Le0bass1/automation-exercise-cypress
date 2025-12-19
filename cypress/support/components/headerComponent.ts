export class HeaderComponent {
  selectors = {
    homeLink: 'a[href="/"]',
    productsLink: 'a[href="/products"]',
    cartLink: 'a[href="/view_cart"]',
    loginIcon: 'i[class="fa fa-lock"]',
    testCasesLink: 'a[href="/test_cases"]',
    contactUsLink: 'a[href="/contact_us"]',
    logoutLink: 'a[href="/logout"]',
  };

  goToHome() {
    cy.get(this.selectors.homeLink).click()
  }

  goToProducts() {
    cy.get(this.selectors.productsLink).click()
  }

  goToCartPage() {
    cy.get(this.selectors.cartLink).first().click()
  }

  goToLoginPage() {
    cy.get(this.selectors.loginIcon).click()
  }

  goToTestCasesPage() {
    cy.get(this.selectors.testCasesLink).first().click()
  }

  goToContactUsPage() {
    cy.get(this.selectors.contactUsLink).click()
  }

  logout() {
    cy.get(this.selectors.logoutLink).click()
  }

  verifyUserIsLoggedIn(username?: string) {
    cy.contains('Logged in as').should('be.visible')
    if (username) {
      cy.contains(`Logged in as ${username}`).should('be.visible')
    }
  }
}