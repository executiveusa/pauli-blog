import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('loads successfully with main content', async ({ page }) => {
    await expect(page).toHaveTitle(/The Pauli Effect/)
    const mainContent = page.getByTestId('hero-section')
    await expect(mainContent).toBeVisible()
    await expect(mainContent).toHaveText(/AI Operator|Builder|Creator/)
  })

  test('navigates to posts page', async ({ page }) => {
    const postsLink = page.getByRole('link', { name: /posts/i })
    await postsLink.click()
    await expect(page).toHaveURL(/\/posts/)
  })
})
