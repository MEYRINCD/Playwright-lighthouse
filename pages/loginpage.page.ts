import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly UsernameInputLine: Locator;
  readonly PasswordInputLine: Locator;
  readonly LoginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.UsernameInputLine = page.locator("#user-name");
    this.PasswordInputLine = page.locator("#password");
    this.LoginButton = page.locator("#login-button");
  }
  async TypeUsernameInputLine(username) {
    await this.UsernameInputLine.type(username);
  }
  async TypePasswordInputLine(password) {
    await this.PasswordInputLine.type(password);
  }
  async ClickLoginButton() {
    await this.LoginButton.click();
  }
}
