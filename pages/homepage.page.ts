import { Locator, Page } from "@playwright/test";

export class Homepage {
  readonly page: Page;
  readonly ProductSortContainer: Locator;
  readonly AddtoCartBtnRedTShirt: Locator;
  readonly CartButton: Locator;
  readonly CheckoutButton: Locator;
  readonly CheckoutFirstNameIL: Locator;
  readonly CheckoutLastNameIL: Locator;
  readonly CheckoutPostalCodeIL: Locator;
  readonly CheckoutcontinueButton: Locator;
  readonly CheckoutfinishButton: Locator;
  readonly CheckoutBackHomeButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.ProductSortContainer = page.locator(
      '[class="product_sort_container"]'
    );
    this.AddtoCartBtnRedTShirt = page.locator(
      "xpath=//html[//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']]"
    );
    this.CartButton = page.locator('[class="shopping_cart_link"]');
    this.CheckoutButton = page.locator("#checkout");
    this.CheckoutFirstNameIL = page.locator("#first-name");
    this.CheckoutLastNameIL = page.locator("#last-name");
    this.CheckoutPostalCodeIL = page.locator("#postal-code");
    this.CheckoutcontinueButton = page.locator("#continue");
    this.CheckoutfinishButton = page.locator("#finish");
    this.CheckoutBackHomeButton = page.locator("#back-to-products");
  }
  async ChooseOptionProductContainer(option) {
    await this.ProductSortContainer.selectOption(option);
  }
  async ClickAddtoCartBtnRedTShirt() {
    await this.AddtoCartBtnRedTShirt.click();
  }
  async ClickCartButton() {
    await this.CartButton.click();
  }
  async ClickCheckoutButton() {
    await this.CheckoutButton.click();
  }
  async InputCheckoutFirstNameIL(firstname) {
    await this.CheckoutFirstNameIL.fill(firstname);
  }
  async InputCheckoutLastNameIL(lastname) {
    await this.CheckoutLastNameIL.fill(lastname);
  }
  async InputCheckoutPostalCodeIL(postalcode) {
    await this.CheckoutPostalCodeIL.fill(postalcode);
  }
  async ClickCheckoutcontinueButton() {
    await this.CheckoutcontinueButton.click();
  }
  async ClickCheckoutfinishButton() {
    await this.CheckoutfinishButton.click();
  }
  async ClickCheckoutBackHomeButton() {
    await this.CheckoutBackHomeButton.click();
  }
}
