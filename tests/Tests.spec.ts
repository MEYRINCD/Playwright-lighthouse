import { test, expect, chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginpage.page";
import { Homepage } from "../pages/homepage.page";
const { playAudit } = require("playwright-lighthouse");
const lighthouseDesktopConfig = require("lighthouse/lighthouse-core/config/lr-desktop-config");
const options = {
  loglevel: "info",
};

test.describe("Playwright challenge", () => {
  test("Successful login as valid user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    const Loginpage = new LoginPage(page);
    await Loginpage.TypeUsernameInputLine("standard_user");
    await Loginpage.TypePasswordInputLine("secret_sauce");
    await Loginpage.ClickLoginButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
  test(`Lighthouse performance test for page before login`, async () => {
    const browser = await chromium.launch({
      args: ["--remote-debugging-port=9222"],
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");
    await playAudit({
      page: page,
      config: lighthouseDesktopConfig,
      thresholds: {
        performance: 50,
        accessibility: 50,
        "best-practices": 50,
        seo: 50,
        pwa: 50,
      },
      port: 9222,
      opts: options,
      reports: {
        formats: {
          html: true, 
        },
        name: `ligthouse-report` + Date.now().toString(), 
        directory: `lighthous-report`, 
      },
    });
    await browser.close();
  });
  test("Buying a product test", async ({ page }) => {
    const sauceLabsTshirt = page.locator('[alt="Sauce Labs Bolt T-Shirt"]');
    const Loginpage = new LoginPage(page);
    const HomePage = new Homepage(page);
    const completeOrder = page.locator('[class="complete-header"]');
    await page.goto("https://www.saucedemo.com/");
    await Loginpage.TypeUsernameInputLine("standard_user");
    await Loginpage.TypePasswordInputLine("secret_sauce");
    await Loginpage.ClickLoginButton();
    await expect(sauceLabsTshirt).toBeVisible();
    await HomePage.ChooseOptionProductContainer("za");
    await HomePage.ClickAddtoCartBtnRedTShirt();
    await HomePage.ClickCartButton();
    await HomePage.ClickCheckoutButton();
    await HomePage.InputCheckoutFirstNameIL("Illya");
    await HomePage.InputCheckoutLastNameIL("Malinovskiy");
    await HomePage.InputCheckoutPostalCodeIL("44022");
    await HomePage.ClickCheckoutcontinueButton();
    await HomePage.ClickCheckoutfinishButton();
    await expect(completeOrder).toBeVisible();
    await HomePage.ClickCheckoutBackHomeButton();
  });
});
