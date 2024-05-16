import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Guillermo Rauch's blog/);
});

test("can navigate to about", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About" }).click();
  await page.getByRole("heading", { name: "About" }).click();
});

test("can navigate to post", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Making the Web. Faster." }).click();
  await page.getByRole("heading", { name: "Making the Web. Faster." }).click();
});
