/// <refrence types="cypress" />;
describe("Kliknięcie w element na stronie", () => {
  it("Kliknięcie w zakładkę contact us", () => {
    cy.visit("/");
    cy.get('a[title="Contact us"]').click();
  });
});
