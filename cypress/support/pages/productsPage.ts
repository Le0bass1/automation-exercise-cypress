import { CartProduct } from '../types/product'

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
    viewProductLink: 'View Product',
    modal: '.modal',
    continueShoppingButton: 'Continue Shopping',
    viewCartButton: 'View Cart',
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

  verifyAllProductCardElements() {
    cy.get(this.selectors.productCard).each(($card) => {
      cy.wrap($card).within(() => {
        cy.get(this.selectors.productImage).should('be.visible')
        cy.get(this.selectors.productPrice).should('be.visible')
        cy.get(this.selectors.productName).should('be.visible')
        cy.contains(this.selectors.addToCartButton).should('be.visible')
        cy.contains(this.selectors.viewProductLink).should('be.visible')
      })
    })
  }

  clickFirstViewProduct() {
    cy.get(this.selectors.productCard).first().within(() => {
      cy.contains(this.selectors.viewProductLink).click()
    })
  }

  addToCartFirstProduct() {
    cy.extractProductDataAndSaveToCart(0)
    cy.get(this.selectors.productCard).first().within(() => {
      cy.contains(this.selectors.addToCartButton).should('be.visible').click()
    })
  }
  
  addToCartSecondProduct() {
    cy.extractProductDataAndSaveToCart(1)
    cy.get(this.selectors.productCard).eq(1).within(() => {
      cy.contains(this.selectors.addToCartButton).should('be.visible').click()
    })
  }

  verifyModalIsVisible() {
    cy.get(this.selectors.modal).should('be.visible')
  }

  clickContinueShoppingButtonInModal() {
    cy.contains(this.selectors.continueShoppingButton).should('be.visible').click()
  }

  clickInViewCartButtonInModal() {
    cy.contains(this.selectors.viewCartButton).should('be.visible').click()
  }
}