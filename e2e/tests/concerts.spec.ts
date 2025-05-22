import { test, expect } from '@playwright/test'

test('Concerts page has correct title', async ({ page }) => {
  await page.goto('/concerten')
  await expect(page).toHaveTitle('Concerten | Lundi Bleu - Strijkorkest')
})
