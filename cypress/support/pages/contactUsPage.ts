import { User } from "../types/user"
import { generateSubject, generateLongText } from "../utils/textGenerator"

export class ContactUsPage {
  selectors = {
    nameInput: 'input[data-qa="name"]',
    emailInput: 'input[data-qa="email"]',
    subjectInput: 'input[data-qa="subject"]',
    messageTextArea: 'textarea[data-qa="message"]',
    submitButton: 'input[data-qa="submit-button"]',
    fileInput: 'input[type="file"]',
    successMessage: 'Success!'
  }
  
  fillContactForm(user: User) {
    cy.get(this.selectors.nameInput).type(user.name)
    cy.get(this.selectors.emailInput).type(user.email)
    cy.get(this.selectors.subjectInput).type(generateSubject(3))
    cy.get(this.selectors.messageTextArea).type(generateLongText(3))
  }

  attachFile() {
    cy.get(this.selectors.fileInput).selectFile('cypress/fixtures/example.png', { action: 'drag-drop' })
  }

  submitForm() {
    cy.get(this.selectors.submitButton).click()
  }

  shouldShowSuccessMessage() {
    cy.contains(this.selectors.successMessage).should('be.visible')
  }
}