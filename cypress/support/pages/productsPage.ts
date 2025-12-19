export class ProductsPage {
  selectors = {
    allProductsTitle: 'All Products',
    searchInput: '#search_product',
    searchSubmitButton: '#submit_search',
    productCard: '.features_items .col-sm-4',
    productName: '.productinfo p',
    productImage: 'img',
    productPrice: '.productinfo h2',
    addToCartButton: 'Add to cart',
    viewProductLink: 'View Product'
  }

  verifyProductsPage() {
    cy.contains(this.selectors.allProductsTitle).should('be.visible')
  }

  searchForProduct(productName: string) {
    cy.get(this.selectors.searchInput).type(productName)
    cy.get(this.selectors.searchSubmitButton).click()
  }

  verifySearchResultsContain(productName: string) {
    cy.get(this.selectors.productCard).should('have.length.greaterThan', 0)
    cy.get(`${this.selectors.productCard} ${this.selectors.productName}`)
      .should('contain.text', productName)
  }

  verifyAllSearchResultsContain(productName: string) {
    cy.get(this.selectors.productCard).should('have.length.greaterThan', 0)
    cy.get(this.selectors.productCard).each(($card) => {
      cy.wrap($card).find(this.selectors.productName)
        .should('be.visible')
        .invoke('text')
        .should('include', productName)
    })
  }

  verifyProductsAreVisible() {
    cy.get(this.selectors.productCard).should('have.length.greaterThan', 0)
  }

  verifyFirstProductCardElements() {
    cy.get(this.selectors.productCard).first().within(() => {
      cy.get(this.selectors.productImage).should('be.visible')
      cy.get(this.selectors.productPrice).should('be.visible')
      cy.get(this.selectors.productName).should('be.visible')
      cy.contains(this.selectors.addToCartButton).should('be.visible')
      cy.contains(this.selectors.viewProductLink).should('be.visible')
    })
  }

  clickFirstViewProduct() {
    cy.get(this.selectors.productCard).first().within(() => {
      cy.contains(this.selectors.viewProductLink).click()
    })
  }
}