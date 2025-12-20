export class ProductsDetailsPage {
    selectors = {
        productImage: '.product-information img, .view-product img',
        productTitle: '.product-information h2',
        categoryText: 'Category:',
        productPrice: '.product-information span span',
        availabilityText: 'Availability:',
        conditionText: 'Condition:',
        brandText: 'Brand:',
        quantityInput: '#quantity',
        addToCartButton: 'button.cart',
        reviewSectionTitle: 'Write Your Review',
        reviewNameInput: '#name',
        reviewEmailInput: '#email',
        reviewTextArea: '#review',
        reviewSubmitButton: '#button-review',
        productInformation: '.product-information',
        viewCartButton: 'View Cart'
    }

    verifyProductDetailPage() {
        cy.url().should('include', '/product_details/')
    }

    verifyProductDetailsElements() {
        cy.get(this.selectors.productImage).should('be.visible')
        cy.get(this.selectors.productTitle).should('be.visible')
        cy.get(`${this.selectors.productInformation} p`).contains(this.selectors.categoryText).should('be.visible')
        cy.get(this.selectors.productPrice).should('be.visible')
        cy.get(this.selectors.productInformation).contains(this.selectors.availabilityText).should('be.visible')
        cy.get(this.selectors.productInformation).contains(this.selectors.conditionText).should('be.visible')
        cy.get(this.selectors.productInformation).contains(this.selectors.brandText).should('be.visible')
        cy.get(this.selectors.quantityInput).should('be.visible')
        cy.get(this.selectors.addToCartButton).should('be.visible')
    }

    verifyReviewSection() {
        cy.contains(this.selectors.reviewSectionTitle).should('be.visible')
        cy.get(this.selectors.reviewNameInput).should('be.visible')
        cy.get(this.selectors.reviewEmailInput).should('be.visible')
        cy.get(this.selectors.reviewTextArea).should('be.visible')
        cy.get(this.selectors.reviewSubmitButton).should('be.visible')
    }

    incrementFirstProductQuantity(quantity: number) {
        cy.get(this.selectors.quantityInput).first().clear().type(quantity.toString())
        cy.extractProductDataFromDetailsAndSaveToCart(quantity)
    }

    addToCart() {
        cy.get(this.selectors.addToCartButton).click()
    }

    clickInViewCartButtonInModal() {
        cy.contains(this.selectors.viewCartButton).should('be.visible').click()
    }
}