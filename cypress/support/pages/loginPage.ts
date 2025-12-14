import { User } from "../types/user";

export class LoginPage {
    fillLoginInputs() {
        cy.fixture('user.json').then((user) => {
            cy.get('input[data-qa="login-email"]').type(user.email)
            cy.get('input[data-qa="login-password"]').type(user.password)
        })
    }
    clickLoginButton() {
        cy.get('button[data-qa="login-button"]').click()
    }
    fillRegisterInputs(user: User) {
        cy.get('input[data-qa="signup-name"]').type(user.name)
        cy.get('input[data-qa="signup-email"]').type(user.email)
    }
    clickSignupButton() {
        cy.get('button[data-qa="signup-button"]').click()
    }
}