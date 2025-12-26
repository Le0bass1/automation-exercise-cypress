import { CartProduct } from "../types/product"

export class ViewCartPage {
    selectors = {
        cartPageTitle: 'Shopping Cart',
        cartTableRow: '#cart_info_table tbody tr',
        checkoutButton: 'Proceed To Checkout',
        checkoutModal: '#checkoutModal',
        loginOrRegisterButtonInModal: 'a[href="/login"]',
    }

    // Page Verification Methods

    verifyViewCartPage() {
        cy.contains(this.selectors.cartPageTitle).should('be.visible')
    }

    // Cart Methods

    clearCartJson() {
        cy.writeFile('cypress/fixtures/cart.json', [])
    }

    verifyCartProductsIsCorrect() {
        cy.readFile('cypress/fixtures/cart.json').then((cart: CartProduct[]) => {
            cy.get(this.selectors.cartTableRow).should('have.length', cart.length)

            cart.forEach((product, index) => {
                cy.get(this.selectors.cartTableRow).eq(index).within(() => {
                    cy.root().should('contain.text', product.name)
                    cy.root().should('contain.text', product.price)

                    if (product.quantity !== undefined) {
                        cy.root().should('contain.text', product.quantity.toString())
                    }
                })
            })
        })
    }

    // Checkout Methods

    clickCheckoutButton() {
        cy.contains(this.selectors.checkoutButton).should('be.visible').click()
    }

    verifyCheckoutModalIsVisible() {
        cy.get(this.selectors.checkoutModal).should('be.visible').and('contain.text', 'Checkout')
    }

    clickInLoginOrRegisterButtonInModal() {
        cy.get(this.selectors.checkoutModal).should('be.visible').within(() => {
            cy.get(this.selectors.loginOrRegisterButtonInModal).should('be.visible').click()
        })
    }
}