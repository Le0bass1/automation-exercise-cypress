import { User } from "../types/user";

function getMonthName(month: string): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[Number(month) - 1];
}

export class SignupPage {
  fillSignupInputs(user: User) {
    const [year, month, day] = user.birthday.split('-');

    if (user.title === "Mr") {
      cy.get('input[id="id_gender1"]').click()
    } else {
      cy.get('input[id="id_gender2"]').click()
    }
    cy.get('input[data-qa="password"]').type(user.password)
    cy.get('select[data-qa="days"]').select(String(Number(day)));      // Remove zero à esquerda: "05" → "5"
    cy.get('select[data-qa="months"]').select(getMonthName(month));     // "01" → "January"
    cy.get('select[data-qa="years"]').select(year);
    cy.get('input[data-qa="first_name"]').type(user.firstName)
    cy.get('input[data-qa="last_name"]').type(user.lastName)
    cy.get('input[data-qa="company"]').type(user.company)
    cy.get('input[data-qa="address"]').type(user.address1)
    cy.get('input[data-qa="address2"]').type(user.address2)
    cy.get('select[data-qa="country"]').select(user.country)
    cy.get('input[data-qa="state"]').type(user.state)
    cy.get('input[data-qa="city"]').type(user.city)
    cy.get('input[data-qa="zipcode"]').type(user.zipcode)
    cy.get('input[data-qa="mobile_number"]').type(user.mobileNumber)
  }

  clickSignupButton() {
    cy.get('button[data-qa="create-account"]').click()
  }
}