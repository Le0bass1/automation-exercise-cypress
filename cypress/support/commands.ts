import { CartProduct } from './types/product'

declare global {
    namespace Cypress {
        interface Chainable {
            extractProductDataAndSaveToCart(index?: number): Chainable<CartProduct>
            extractProductDataFromDetailsAndSaveToCart(quantity?: number): Chainable<CartProduct>
            saveProductToCart(productData: CartProduct): Chainable<CartProduct>
            clearCartJson(): Chainable<void>
        }
    }
}

// Command to save the product to the cart.json file
Cypress.Commands.add('saveProductToCart', (productData: CartProduct) => {
    cy.readFile('cypress/fixtures/cart.json').then((cart: CartProduct[]) => {
        const existingProductIndex = cart.findIndex(
            (item) => item.name === productData.name && item.price === productData.price
        )

        let updatedCart: CartProduct[]

        if (existingProductIndex !== -1) {
            // Product already exists, update the quantity
            updatedCart = [...cart]
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: (updatedCart[existingProductIndex].quantity || 1) + (productData.quantity || 1)
            }
        } else {
            // Product does not exist, add new
            updatedCart = [...cart, productData]
        }

        cy.writeFile('cypress/fixtures/cart.json', updatedCart)
    })

    return cy.wrap(productData)
})

// Command to extract the product data and save to the cart.json file
Cypress.Commands.add('extractProductDataAndSaveToCart', (index: number = 0) => {
    cy.get('.features_items .col-sm-4').eq(index).within(() => {
        cy.get('.productinfo p').invoke('text').as('productName')
        cy.get('.productinfo h2').invoke('text').as('productPrice')
    })

    cy.then(function () {
        const productData: CartProduct = {
            name: this.productName.trim(),
            price: this.productPrice.trim(),
            quantity: 1
        }

        cy.saveProductToCart(productData)
        return cy.wrap(productData)
    })
})

Cypress.Commands.add('extractProductDataFromDetailsAndSaveToCart', (quantity: number = 1) => {
    cy.get('.product-information h2').invoke('text').as('productName')
    cy.get('.product-information span span').invoke('text').as('productPrice')

    cy.then(function () {
        const productData: CartProduct = {
            name: this.productName.trim(),
            price: this.productPrice.trim(),
            quantity: quantity
        }

        cy.saveProductToCart(productData)
        return cy.wrap(productData)
    })
})

Cypress.Commands.add('clearCartJson', () => {
    cy.writeFile('cypress/fixtures/cart.json', [])
})