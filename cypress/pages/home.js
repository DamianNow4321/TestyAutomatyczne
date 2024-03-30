class Home {
  get womanTab() {
    return cy.get('a[title = "Women"]');
  }
  clickOnWoman() {
    this.womanTab.click();
  }
}
export default new Home();
