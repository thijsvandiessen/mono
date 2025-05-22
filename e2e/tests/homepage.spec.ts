import { test, expect } from '@playwright/test'

test('homepage has correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Homepage | Lundi Bleu - Strijkorkest')
})

test('navigate to concerts', async ({ page }) => {
  await page.goto('/')
  await expect(
    page
      .getByRole('article')
      .getByRole('heading', { name: 'Lundi Bleu - Strijkorkest' })
  ).toBeVisible()
  await page
    .locator('header')
    .getByRole('link', { name: 'Concertagenda' })
    .click()
  await expect(
    page.locator('h2').filter({ hasText: /^Concerten$/ })
  ).toBeVisible()
})
