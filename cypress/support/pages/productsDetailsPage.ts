export class ProductsDetailsPage {
    verifyProductDetailPage() {
        cy.url().should('include', '/product_details/')
    }

    verifyProductDetailsElements() {
        // Verifica imagem do produto
        cy.get('.product-information img, .view-product img').should('be.visible')

        // Verifica nome do produto
        cy.get('.product-information h2').should('be.visible')

        // Verifica categoria
        cy.get('.product-information p').contains('Category:').should('be.visible')

        // Verifica preço
        cy.get('.product-information span span').should('be.visible')

        // Verifica disponibilidade
        cy.get('.product-information').contains('Availability:').should('be.visible')

        // Verifica condição
        cy.get('.product-information').contains('Condition:').should('be.visible')

        // Verifica marca
        cy.get('.product-information').contains('Brand:').should('be.visible')

        // Verifica campo de quantidade
        cy.get('#quantity').should('be.visible')

        // Verifica botão "Add to cart"
        cy.get('button.cart').should('be.visible')
    }

    verifyReviewSection() {
        // Verifica seção de review
        cy.contains('Write Your Review').should('be.visible')
        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#review').should('be.visible')
        cy.get('#button-review').should('be.visible')
      }
}