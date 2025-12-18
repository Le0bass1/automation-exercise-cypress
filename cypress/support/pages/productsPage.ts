export class ProductsPage {
  verifyProductsPage() {
    cy.contains('All Products').should('be.visible')
  }

  checksIfProductsAreVisible() {
    cy.get('.features_items .col-sm-4').should('have.length.greaterThan', 0)
  }

  verifyProductCardElements() {
    cy.get('.features_items .col-sm-4').first().within(() => {
      // Verifica imagem do produto
      cy.get('img').should('be.visible')
      // Verifica preço
      cy.get('.productinfo h2').should('be.visible')
      // Verifica nome do produto
      cy.get('.productinfo p').should('be.visible')
      // Verifica botão "Add to cart"
      cy.contains('Add to cart').should('be.visible')
      // Verifica link "View Product"
      cy.contains('View Product').should('be.visible')
    })
  }

  clickFirstViewProduct() {
    cy.get('.features_items .col-sm-4').first().within(() => {
      cy.contains('View Product').click()
    })
  }
}