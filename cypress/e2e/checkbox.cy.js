/// <refrence types="cypress" />;
import base from "../pages/base.js";
import home from "../pages/home.js";
import woman from "../pages/woman.js";
describe("Test związany z checkboxem", () => {
  it("Wejście w zakładke Woman", () => {
    base.openHomePage();
    home.clickOnWoman();
    cy.url().should("include", "id_category=3&controller=category");
  });
  it("Zaznaczanie checkboxa", () => {
    woman.topsCheckbox.check();
    woman.topsCheckbox.should("be.checked");
    woman.dressesCheckbox.check();
    woman.sizeCheckboxes.check();
  });
});
