import { expect, test } from '@playwright/test'

test.describe('i18n', () => {
  test('default locale (en-US) has locale prefix in URL', async ({ page }) => {
    await page.goto('/posts')
    await expect(page).toHaveURL(/\/en-US/)

    const html = page.locator('html')
    await expect(html).toHaveAttribute('lang', 'en-US')
    await expect(page).toHaveTitle(/Posts/)
  })
})
