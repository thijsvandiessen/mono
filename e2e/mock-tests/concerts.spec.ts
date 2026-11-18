import { expect, test } from "./fixtures.ts";

test.describe("concerts", () => {
  test("lists every concert from the mock backend", async ({ page }) => {
    await page.goto("/concerten");

    await expect(page).toHaveTitle("Concerten | Lundi Bleu - Strijkorkest");
    await expect(page.getByRole("link", { name: "Voorjaarsconcert" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Winterconcert" })).toBeVisible();
    await expect(page.getByText("Concert voorbij")).toBeVisible();
  });

  test("opens a concert detail page", async ({ page }) => {
    await page.goto("/concerten");

    await page.getByRole("link", { name: "Voorjaarsconcert" }).click();

    await expect(page).toHaveURL(/\/concerten\/voorjaarsconcert$/);
    await expect(page).toHaveTitle("Voorjaarsconcert | Lundi Bleu - Strijkorkest");
    await expect(page.getByRole("heading", { level: 1, name: "Voorjaarsconcert" })).toBeVisible();
    await expect(page.getByText("Werken van Mozart en Grieg.")).toBeVisible();
  });

  test("shows the not found page for an unknown concert", async ({ page }) => {
    await page.goto("/concerten/bestaat-niet");

    await expect(page.getByRole("heading", { name: "Niet gevonden" })).toBeVisible();
  });
});
