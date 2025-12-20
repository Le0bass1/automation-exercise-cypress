import { HomePage } from '../../support/pages/homePage'
import { HeaderComponent } from '../../support/components/headerComponent'
import { ProductsPage } from '../../support/pages/productsPage'
import { ViewCartPage } from '../../support/pages/viewCartPage'
import { ProductsDetailsPage } from '../../support/pages/productsDetailsPage'

describe('Cart', () => {
    const homePage = new HomePage()
    const headerComponent = new HeaderComponent()
    const productsPage = new ProductsPage()
    const viewCartPage = new ViewCartPage()
    const productsDetailsPage = new ProductsDetailsPage()

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

        it('Should add four products to the cart and verify the cart page', () => {
            productsPage.clickFirstViewProduct()
            productsDetailsPage.verifyProductDetailPage()
            productsDetailsPage.verifyProductDetailsElements()
            productsDetailsPage.verifyReviewSection()
            productsDetailsPage.incrementFirstProductQuantity(4)
            productsDetailsPage.addToCart()
            productsDetailsPage.clickInViewCartButtonInModal()
            viewCartPage.verifyViewCartPage()
            viewCartPage.verifyCartProductsIsCorrect()
        })
    })
})