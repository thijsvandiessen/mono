import { expect, test } from "./fixtures.ts";

test("contact page renders its content", async ({ page }) => {
  await page.goto("/contact");

  await expect(page).toHaveTitle("Contact | Lundi Bleu - Strijkorkest");
  await expect(page.locator("h2").first()).toHaveText("Contact");
  await expect(page.getByText("Stuur ons een bericht.")).toBeVisible();
});

test("unknown pages show the not found page", async ({ page }) => {
  // The route streams behind a loading boundary, so the status stays 200: check the content.
  await page.goto("/deze-pagina-bestaat-niet");

  await expect(page.getByRole("heading", { name: "Niet gevonden" })).toBeVisible();
});
