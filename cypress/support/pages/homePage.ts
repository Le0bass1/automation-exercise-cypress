export class HomePage {
  selectors = {
    featuresItemsText: 'Features Items'
  }
  
  verifyHomePage() {
    cy.contains(this.selectors.featuresItemsText).should('be.visible')
  }
}