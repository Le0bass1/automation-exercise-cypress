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

  beforeEach(() => {
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

  describe('Product listing and details', () => {
    it('Should display all products, verify product card elements, and navigate to product details page.', () => {
      productsPage.verifyProductsPage()
      productsPage.verifyProductsAreVisible()
      productsPage.verifyFirstProductCardElements()
      productsPage.clickFirstViewProduct()
      productsDetailsPage.verifyProductDetailPage()
      productsDetailsPage.verifyProductDetailsElements()
      productsDetailsPage.verifyReviewSection()
    })
  })

  describe('Product search', () => {
    it('Should search for a product and verify all search results contain the search term.', () => {
      productsPage.verifyProductsPage()
      productsPage.verifyProductsAreVisible()
      productsPage.verifyFirstProductCardElements()
      productsPage.searchForProduct('Top')
      productsPage.verifySearchResultsContain('Top')
    })
  })
})