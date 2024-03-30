/// <refrence types="cypress" />;
import search from "../pages/search.js";
import base from "../pages/base.js";
import { searchPhrase } from "../fixtures/searchData.json";

describe("Wpisywanie tekstu w wyszukiwarke", () => {
  it("Wpisywanie tekstu", () => {
    base.openHomePage();
    search.typeIn(searchPhrase);
    search.searchBar.should("have.value", searchPhrase);
    cy.wait(3000);
    search.searchBar.clear();
    search.typeIn(`${searchPhrase} {enter}`);
    cy.get("p.alert").should("be.visible").and("include.text", "No results");
  });
});
