import { HomePage } from '../../support/pages/homePage'
import { FooterComponent } from '../../support/components/footerComponent'
import { HeaderComponent } from '../../support/components/headerComponent'

describe('Subscription', () => {
  const homePage = new HomePage()
  const footerComponent = new FooterComponent()
  const headerComponent = new HeaderComponent()

  beforeEach(() => {
    cy.visit('/')
    homePage.verifyHomePage()
  })

  describe('Fill newsletter form, with email address, in home and cart pages', () => {
    it('should subscribe to the newsletter, in home page', () => {
      footerComponent.fillNewsletterForm()
      footerComponent.verifyNewsletterSubscriptionSuccess()
    })

    it('should subscribe to the newsletter, in cart page', () => {
      headerComponent.goToCartPage()
      footerComponent.fillNewsletterForm()
      footerComponent.verifyNewsletterSubscriptionSuccess()
    })
  })
})