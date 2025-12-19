export class FooterComponent {
    selectors = {
        container: '#susbscribe_email',
        subscribeButton: '#subscribe',
        successMessage: '.alert-success'
    }

    fillNewsletterForm() {
        cy.get(this.selectors.container).type('test@test.com')
        cy.get(this.selectors.subscribeButton).click()
    }

    verifyNewsletterSubscriptionSuccess() {
        cy.get(this.selectors.successMessage).should('be.visible')
    }
};