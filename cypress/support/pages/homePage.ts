export class HomePage {
  goToLoginPage() {
    cy.get('i[class="fa fa-lock"]').click()
  }
}