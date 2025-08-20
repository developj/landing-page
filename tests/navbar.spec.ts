import { test, expect } from "@playwright/test";

const LINK_LABELS = ["SS", "FW", "PANTS", "T-Shirt", "SALE", "COLLECTION", "COMMUNITY"];

test.describe("Navbar (desktop)", () => {
  test.beforeEach(async ({ page }) => {
    // Desktop viewport (default), then go home
    await page.goto("/");
  });

  test("shows brand and primary nav links", async ({ page }) => {
    await expect(page.getByRole("link", { name: "LANDAS" })).toBeVisible();

    for (const label of LINK_LABELS) {
      await expect(page.getByRole("link", { name: label })).toBeVisible();
    }
  });
});

