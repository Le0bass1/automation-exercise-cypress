import { HomePage } from '../../support/pages/homePage'
import { HeaderComponent } from '../../support/components/headerComponent'
import { ProductsPage } from '../../support/pages/productsPage'
import { ViewCartPage } from '../../support/pages/viewCartPage'

describe('Cart', () => {
    const homePage = new HomePage()
    const headerComponent = new HeaderComponent()
    const productsPage = new ProductsPage()
    const viewCartPage = new ViewCartPage()

    beforeEach(() => {
        cy.visit('/')
        homePage.verifyHomePage()
        headerComponent.goToProductsPage()
        productsPage.verifyProductsPage()
        productsPage.verifyProductsAreVisible()
        productsPage.verifyAllProductCardElements()
        viewCartPage.clearCartJson()
    })
    describe('Add to cart flow', () => {
        it('Should add two products to the cart and verify the cart page', () => {
            productsPage.addToCartFirstProduct()
            productsPage.verifyModalIsVisible()
            productsPage.clickContinueShoppingButtonInModal()
            productsPage.addToCartSecondProduct()
            productsPage.verifyModalIsVisible()
            productsPage.clickInViewCartButtonInModal()
            viewCartPage.verifyViewCartPage()
            viewCartPage.verifyCartProductsIsCorrect()
        })
    })
})