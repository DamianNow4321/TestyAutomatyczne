/// <refrence types="cypress" />;
import { email, pass } from "../fixtures/loginData.json";

describe("Custom Commands", () => {
  it("Logowanie do strony automationpractice", () => {
    cy.login(email, pass);
  });
});
