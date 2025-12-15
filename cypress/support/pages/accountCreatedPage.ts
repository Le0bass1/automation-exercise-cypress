import { User } from "../types/user";

export class AccountCreatedPage {
  confirmAccountCreated(user: User) {
    cy.contains('Account Created!').should('be.visible')
    cy.writeFile('cypress/fixtures/user.json', user)
    cy.get('a[data-qa="continue-button"]').should('exist').click()
  }
}