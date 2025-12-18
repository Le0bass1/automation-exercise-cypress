import { HeaderComponent } from '../../support/components/headerComponent'
import { ProductsPage } from '../../support/pages/productsPage'
import { HomePage } from '../../support/pages/homePage'
import { LoginPage } from '../../support/pages/loginPage'
import { ProductsDetailsPage } from '../../support/pages/productsDetailsPage'

describe('Products', () => {
  const headerComponent = new HeaderComponent()
  const homePage = new HomePage()
  const loginPage = new LoginPage()
  const productsPage = new ProductsPage()
  const productsDetailsPage = new ProductsDetailsPage()

  before(() => {
    cy.visit('/')
    homePage.verifyHomePage()
    headerComponent.goToLoginPage()

    cy.fixture('user.json').then((user) => {
        cy.log(`Attempting to log in as user: ${user.name}, with email: ${user.email}, and password: ${user.password}`)
        loginPage.fillLoginInputs()
        loginPage.clickLoginButton()
        headerComponent.verifyUserIsLoggedIn()
    })
    headerComponent.goToProducts()
  })

  describe('Verify All Products and product detail page', () => {
    it('Should display all products, click on first view product and verify product details and review section', () => {
      headerComponent.goToProducts()
      productsPage.verifyProductsPage()
      productsPage.checksIfProductsAreVisible()
      productsPage.verifyProductCardElements()
      productsPage.clickFirstViewProduct()
      productsDetailsPage.verifyProductDetailPage()
      productsDetailsPage.verifyProductDetailsElements()
      productsDetailsPage.verifyReviewSection()
    })
  })
})