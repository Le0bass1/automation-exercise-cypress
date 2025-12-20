import { CartProduct } from "../types/product"

export class ViewCartPage {
    selectors = {
        cartPageTitle: 'Shopping Cart',
        cartTableRow: '#cart_info_table tbody tr',
    }

    verifyViewCartPage() {
        cy.contains(this.selectors.cartPageTitle).should('be.visible')
    }

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
}