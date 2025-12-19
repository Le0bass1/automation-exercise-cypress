import { User } from "../types/user";
import { generateInvalidEmail, generateInvalidPassword } from "../utils/userGenerator";

export class LoginPage {
    selectors = {
        loginEmailInput: 'input[data-qa="login-email"]',
        loginPasswordInput: 'input[data-qa="login-password"]',
        loginButton: 'button[data-qa="login-button"]',
        signupNameInput: 'input[data-qa="signup-name"]',
        signupEmailInput: 'input[data-qa="signup-email"]',
        signupButton: 'button[data-qa="signup-button"]',
        invalidCredentialsMessage: 'Your email or password is incorrect!'
    }

    // Login Methods

    fillLoginForm() {
        cy.fixture('user.json').then((user) => {
            cy.get(this.selectors.loginEmailInput).type(user.email)
            cy.get(this.selectors.loginPasswordInput).type(user.password)
        })
    }

    fillLoginFormWithInvalidEmail(user: User) {
        cy.get(this.selectors.loginEmailInput).type(generateInvalidEmail())
        cy.get(this.selectors.loginPasswordInput).type(user.password)
    }

    verifyInvalidEmailErrorMessage() {
        cy.get(this.selectors.loginEmailInput).then(($input) => {
            const input = $input[0] as HTMLInputElement;

            if (input.validationMessage) {
                expect(input.validationMessage).to.satisfy((msg: string) =>
                    msg.includes('incomplete') || msg.includes('symbol') || msg.includes('@') || msg.includes('required')
                );
            } else {
                cy.contains(this.selectors.invalidCredentialsMessage).should('be.visible');
            }
        });
    }

    fillLoginFormWithInvalidPassword(user: User) {
        const invalidPassword = generateInvalidPassword()
        cy.get(this.selectors.loginEmailInput).type(user.email)
        if (invalidPassword !== '') {
            cy.get(this.selectors.loginPasswordInput).type(invalidPassword)
        }
    }

    verifyInvalidPasswordErrorMessage() {
        cy.get(this.selectors.loginPasswordInput).then(($input) => {
            const input = $input[0] as HTMLInputElement;
    
            if (input.validationMessage) {
                expect(input.validationMessage).to.not.be.empty;
            } else {
                cy.contains(this.selectors.invalidCredentialsMessage).should('be.visible');
            }
        });
    }

    clickLoginButton() {
        cy.get(this.selectors.loginButton).click()
    }

    // Register Methods

    fillSignupForm(user: User) {
        cy.get(this.selectors.signupNameInput).type(user.name)
        cy.get(this.selectors.signupEmailInput).type(user.email)
    }

    fillSignupFormWithExistingEmail(user: User) {
        cy.fixture('user.json').then((emailAlreadyExists) => {
            cy.get(this.selectors.signupNameInput).type(user.name)
            cy.get(this.selectors.signupEmailInput).type(emailAlreadyExists.email)
        })
    }

    clickSignupButton() {
        cy.get(this.selectors.signupButton).click()
    }
}