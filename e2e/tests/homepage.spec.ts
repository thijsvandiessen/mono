import { test, expect } from '@playwright/test'

test('homepage has correct title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Homepage | Lundi Bleu - Strijkorkest')
})
