export class FooterComponent {
    selectors = {
        container: '#susbscribe_email',
        subscribeButton: '#subscribe',
        successMessage: '.alert-success'
    }

    fillNewsletterForm() {
        cy.fixture('user.json').then((user) => {
            cy.get(this.selectors.container).type(user.email)
        })
        cy.get(this.selectors.subscribeButton).click()
    }

    verifyNewsletterSubscriptionSuccess() {
        cy.get(this.selectors.successMessage).should('be.visible')
    }
};