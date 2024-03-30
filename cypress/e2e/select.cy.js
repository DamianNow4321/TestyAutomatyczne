/// <refrence types="cypress" />;
describe("Test związany z selectem", () => {
  it("Wejście w zakładke Woman", () => {
    cy.visit("/");
    cy.get('a[title = "Women"]').click();
    cy.url().should("include", "id_category=3&controller=category");
  });
  it("Wybieranie filtra in stock", () => {
    cy.get("#selectProductSort").select("In stock");
    cy.get("#selectProductSort").should("have.value", "quantity:desc");
  });
  it("Wybieranie filtra Name A-Z", () => {
    cy.get("#selectProductSort").select("name:asc");
    cy.get("#selectProductSort").should("have.value", "name:asc");
  });
});
