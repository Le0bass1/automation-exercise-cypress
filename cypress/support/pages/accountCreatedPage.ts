import { User } from "../types/user";

export class AccountCreatedPage {
  selectors = {
    accountCreatedMessage: 'Account Created!',
    continueButton: 'a[data-qa="continue-button"]'
  }
  
  confirmAccountCreated(user: User) {
    cy.contains(this.selectors.accountCreatedMessage).should('be.visible')

    // Save the user data to a JSON file
    cy.writeFile('cypress/fixtures/user.json', user)
    
    cy.get(this.selectors.continueButton).should('exist').click()
  }
}