import { User } from "../types/user";

function getMonthName(month: string): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[Number(month) - 1];
}

export class SignupPage {
  selectors = {
    genderMr: 'input[id="id_gender1"]',
    genderMrs: 'input[id="id_gender2"]',
    passwordInput: 'input[data-qa="password"]',
    daysSelect: 'select[data-qa="days"]',
    monthsSelect: 'select[data-qa="months"]',
    yearsSelect: 'select[data-qa="years"]',
    firstNameInput: 'input[data-qa="first_name"]',
    lastNameInput: 'input[data-qa="last_name"]',
    companyInput: 'input[data-qa="company"]',
    addressInput: 'input[data-qa="address"]',
    address2Input: 'input[data-qa="address2"]',
    countrySelect: 'select[data-qa="country"]',
    stateInput: 'input[data-qa="state"]',
    cityInput: 'input[data-qa="city"]',
    zipcodeInput: 'input[data-qa="zipcode"]',
    mobileNumberInput: 'input[data-qa="mobile_number"]',
    createAccountButton: 'button[data-qa="create-account"]'
  }

  fillSignupInputs(user: User) {
    const [year, month, day] = user.birthday.split('-');

    if (user.title === "Mr") {
      cy.get(this.selectors.genderMr).click()
    } else {
      cy.get(this.selectors.genderMrs).click()
    }
    cy.get(this.selectors.passwordInput).type(user.password)
    cy.get(this.selectors.daysSelect).select(String(Number(day)));      // Remove leading zeros: "05" → "5"
    cy.get(this.selectors.monthsSelect).select(getMonthName(month));     // "01" → "January"
    cy.get(this.selectors.yearsSelect).select(year);
    cy.get(this.selectors.firstNameInput).type(user.firstName)
    cy.get(this.selectors.lastNameInput).type(user.lastName)
    cy.get(this.selectors.companyInput).type(user.company)
    cy.get(this.selectors.addressInput).type(user.address1)
    cy.get(this.selectors.address2Input).type(user.address2)
    cy.get(this.selectors.countrySelect).select(user.country)
    cy.get(this.selectors.stateInput).type(user.state)
    cy.get(this.selectors.cityInput).type(user.city)
    cy.get(this.selectors.zipcodeInput).type(user.zipcode)
    cy.get(this.selectors.mobileNumberInput).type(user.mobileNumber)
  }

  clickSignupButton() {
    cy.get(this.selectors.createAccountButton).click()
  }
}