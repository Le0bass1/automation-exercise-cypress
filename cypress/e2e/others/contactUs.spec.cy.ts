import { HomePage } from '../../support/pages/homePage'
import { ContactUsPage } from '../../support/pages/contactUsPage'
import { generateFullUser } from '../../support/utils/userGenerator'
import { User } from '../../support/types/user'

describe('Contact Us', () => {
    const homePage = new HomePage()
    const contactUsPage = new ContactUsPage()

    let user: User

    before(() => {
        homePage.open()

        user = generateFullUser()
    })

    describe('Successfully submit contact us form with file upload', () => {
        it('Should open contact us, and fill form with file upload successfully.', () => {
            homePage.goToContactUsPage()
            contactUsPage.fillContactUsInputs(user)
            contactUsPage.uploadFile()
            contactUsPage.clickSubmitButton()
        })
    })
})