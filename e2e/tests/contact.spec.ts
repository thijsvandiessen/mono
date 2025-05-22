import { test, expect } from '@playwright/test'

test('contact page has correct title', async ({ page }) => {
  await page.goto('/contact')
  await expect(page).toHaveTitle('Contact | Lundi Bleu - Strijkorkest')

  // check the title of the page
  await expect(page.locator('h2').first()).toHaveText('Contact')
})
