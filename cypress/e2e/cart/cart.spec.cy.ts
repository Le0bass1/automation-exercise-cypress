import { HomePage } from '../../support/pages/homePage'
import { HeaderComponent } from '../../support/components/headerComponent'
import { ProductsPage } from '../../support/pages/productsPage'
import { ViewCartPage } from '../../support/pages/viewCartPage'
import { ProductsDetailsPage } from '../../support/pages/productsDetailsPage'
import { LoginPage } from '../../support/pages/loginPage'
import { User } from '../../support/types/user'
import { generateFullUser } from '../../support/utils/userGenerator'
import { SignupPage } from '../../support/pages/signupPage'
import { AccountCreatedPage } from '../../support/pages/accountCreatedPage'

describe('Cart', () => {
    const homePage = new HomePage()
    const headerComponent = new HeaderComponent()
    const productsPage = new ProductsPage()
    const viewCartPage = new ViewCartPage()
    const productsDetailsPage = new ProductsDetailsPage()
    const loginPage = new LoginPage()
    const signupPage = new SignupPage()
    const accountCreatedPage = new AccountCreatedPage()

    let user: User

    // Helper functions
    const goToProductsAndVerify = () => {
        headerComponent.goToProductsPage()
        productsPage.verifyProductsPage()
        productsPage.verifyProductsAreVisible()
        productsPage.verifyAllProductCardElements()
    }

    const addProductFromDetailsPage = (quantity: number) => {
        productsPage.clickFirstViewProduct()
        productsDetailsPage.verifyProductDetailPage()
        productsDetailsPage.verifyProductDetailsElements()
        productsDetailsPage.verifyReviewSection()
        productsDetailsPage.incrementFirstProductQuantity(quantity)
        productsDetailsPage.addToCart()
        productsDetailsPage.clickInViewCartButtonInModal()
    }

    const verifyCartAndProceedToCheckout = () => {
        viewCartPage.verifyViewCartPage()
        viewCartPage.verifyCartProductsIsCorrect()
        viewCartPage.clickCheckoutButton()
    }

    const registerNewUser = () => {
        loginPage.fillSignupForm(user)
        loginPage.clickSignupButton()
        signupPage.fillSignupInputs(user)
        signupPage.clickSignupButton()
        accountCreatedPage.confirmAccountCreated(user)
    }

    beforeEach(() => {
        cy.visit('/')
        homePage.verifyHomePage()
        viewCartPage.clearCartJson()
        user = generateFullUser()
    })

    describe('Add products to cart', () => {
        beforeEach(() => {
            goToProductsAndVerify()
        })

        it('Should add two products from products list', () => {
            productsPage.addToCartFirstProduct()
            productsPage.verifyModalIsVisible()
            productsPage.clickContinueShoppingButtonInModal()
            productsPage.addToCartSecondProduct()
            productsPage.verifyModalIsVisible()
            productsPage.clickInViewCartButtonInModal()
            viewCartPage.verifyViewCartPage()
            viewCartPage.verifyCartProductsIsCorrect()
        })

        it('Should add product with custom quantity from details page', () => {
            addProductFromDetailsPage(4)
            viewCartPage.verifyViewCartPage()
            viewCartPage.verifyCartProductsIsCorrect()
        })
    })

    describe('Remove products from cart', () => {
        beforeEach(() => {
            goToProductsAndVerify()
        })

        it('Should remove product from cart', () => {
            addProductFromDetailsPage(4)
            viewCartPage.verifyViewCartPage()
            viewCartPage.verifyCartProductsIsCorrect()
            viewCartPage.removeAllProductsFromCart()
            viewCartPage.verifyCartIsEmpty()
        })
    })

    describe('Checkout flow', () => {
        beforeEach(() => {
            goToProductsAndVerify()
        })

        it('Should register during checkout', () => {
            addProductFromDetailsPage(4)
            verifyCartAndProceedToCheckout()
            viewCartPage.verifyCheckoutModalIsVisible()
            viewCartPage.clickInLoginOrRegisterButtonInModal()
            registerNewUser()
        })

        it('Should register before checkout', () => {
            headerComponent.goToLoginPage()
            registerNewUser()
            addProductFromDetailsPage(4)
            verifyCartAndProceedToCheckout()
        })

        it('Should login before checkout', () => {
            headerComponent.goToLoginPage()
            loginPage.fillLoginForm()
            loginPage.clickLoginButton()
            headerComponent.verifyUserIsLoggedIn()
            headerComponent.goToProductsPage()
            addProductFromDetailsPage(4)
            verifyCartAndProceedToCheckout()
        })
    })
})