import { User } from "../types/user"
import { generateSubject, generateLongText } from "../utils/textGenerator"

export class ContactUsPage {
  fillContactForm(user: User) {
    cy.get('input[data-qa="name"]').type(user.name)
    cy.get('input[data-qa="email"]').type(user.email)
    cy.get('input[data-qa="subject"]').type(generateSubject(3))
    cy.get('textarea[data-qa="message"]').type(generateLongText(3))
  }

  attachFile() {
    cy.get('input[type="file"]').selectFile('cypress/fixtures/example.png', { action: 'drag-drop' })
  }

  submitForm() {
    cy.get('input[data-qa="submit-button"]').click()
  }

  shouldShowSuccessMessage() {
    cy.contains('Success!').should('be.visible')
  }
}