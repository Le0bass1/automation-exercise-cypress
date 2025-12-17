import { HeaderComponent } from '../../support/components/headerComponent'
import { ContactUsPage } from '../../support/pages/contactUsPage'
import { generateFullUser } from '../../support/utils/userGenerator'
import { User } from '../../support/types/user'

describe('Contact Us', () => {
    const headerComponent = new HeaderComponent()
    const contactUsPage = new ContactUsPage()

    let user: User

    before(() => {
        cy.visit('/')

        user = generateFullUser()
    })

    describe('Successfully submit contact us form with file upload', () => {
        it('Should open contact us, and fill form with file upload successfully.', () => {
            headerComponent.goToContactUsPage()
            contactUsPage.fillContactUsInputs(user)
            contactUsPage.uploadFile()
            contactUsPage.clickSubmitButton()
            contactUsPage.verifySuccessMessage()
        })
    })
})