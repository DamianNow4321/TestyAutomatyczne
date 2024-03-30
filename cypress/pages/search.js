class Search {
  get searchBar() {
    return cy.get("#search_query_top");
  }
  typeIn(searchPhrase) {
    this.searchBar.type(searchPhrase);
  }
}
export default new Search();
