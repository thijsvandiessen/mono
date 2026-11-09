import { expect, test } from "./fixtures.ts";

test.describe("homepage", () => {
  test("renders the page from the mock backend", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Homepage | Lundi Bleu - Strijkorkest");
    await expect(
      page.getByRole("article").getByRole("heading", { name: "Lundi Bleu - Strijkorkest" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Over ons" })).toBeVisible();
  });

  test("navigates to the concerts page through the main menu", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("navigation").getByRole("link", { name: "Concertagenda" }).click();

    await expect(page).toHaveURL(/\/concerten$/);
    await expect(page.locator("h2").filter({ hasText: /^Concerten$/ })).toBeVisible();
  });
});
