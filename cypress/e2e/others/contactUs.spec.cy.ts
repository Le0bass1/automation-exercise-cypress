import { HeaderComponent } from '../../support/components/headerComponent'
import { ContactUsPage } from '../../support/pages/contactUsPage'
import { generateFullUser } from '../../support/utils/userGenerator'
import { User } from '../../support/types/user'
import { HomePage } from '../../support/pages/homePage'

describe('Contact Us Form', () => {
    const headerComponent = new HeaderComponent()
    const homePage = new HomePage()
    const contactUsPage = new ContactUsPage()

    let user: User

    before(() => {
        cy.visit('/')
        homePage.verifyHomePage()
        user = generateFullUser()
    })

    describe('Form submission with file upload', () => {
        it('submits contact form with all fields and file attachment', () => {
            headerComponent.goToContactUsPage()
            contactUsPage.fillContactForm(user)
            contactUsPage.attachFile()
            contactUsPage.submitForm()
            contactUsPage.shouldShowSuccessMessage()
        })
    })
})