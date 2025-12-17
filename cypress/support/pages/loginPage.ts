import { User } from "../types/user";
import { generateInvalidEmail, generateInvalidPassword } from "../utils/userGenerator";

export class LoginPage {
    // Login Methods

    fillLoginInputs() {
        cy.fixture('user.json').then((user) => {
            cy.get('input[data-qa="login-email"]').type(user.email)
            cy.get('input[data-qa="login-password"]').type(user.password)
        })
    }

    fillInvalidEmailLoginInputs(user: User) {
        cy.get('input[data-qa="login-email"]').type(generateInvalidEmail())
        cy.get('input[data-qa="login-password"]').type(user.password)
    }

    verifyInvalidEmailMessage() {
        cy.get('input[data-qa="login-email"]').then(($input) => {
            const input = $input[0] as HTMLInputElement;

            if (input.validationMessage) {
                expect(input.validationMessage).to.satisfy((msg: string) =>
                    msg.includes('incomplete') || msg.includes('symbol') || msg.includes('@') || msg.includes('required')
                );
            } else {
                cy.contains('Your email or password is incorrect!').should('be.visible');
            }
        });
    }

    fillInvalidPasswordLoginInputs(user: User) {
        const invalidPassword = generateInvalidPassword()
        cy.get('input[data-qa="login-email"]').type(user.email)
        if (invalidPassword !== '') {
            cy.get('input[data-qa="login-password"]').type(invalidPassword)
        }
    }

    verifyInvalidPasswordMessage() {
        cy.get('input[data-qa="login-password"]').then(($input) => {
            const input = $input[0] as HTMLInputElement;
    
            if (input.validationMessage) {
                expect(input.validationMessage).to.not.be.empty;
            } else {
                cy.contains('Your email or password is incorrect!').should('be.visible');
            }
        });
    }

    clickLoginButton() {
        cy.get('button[data-qa="login-button"]').click()
    }

    // Register Methods

    fillRegisterInputs(user: User) {
        cy.get('input[data-qa="signup-name"]').type(user.name)
        cy.get('input[data-qa="signup-email"]').type(user.email)
    }

    fillExistingEmailRegisterInputs(user: User) {
        cy.fixture('user.json').then((emailAlreadyExists) => {
            cy.get('input[data-qa="signup-name"]').type(user.name)
            cy.get('input[data-qa="signup-email"]').type(emailAlreadyExists.email)
        })
    }

    clickSignupButton() {
        cy.get('button[data-qa="signup-button"]').click()
    }
}