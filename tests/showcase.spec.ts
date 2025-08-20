import { test, expect } from "@playwright/test";

const HEADING = "스타일과 실용성을 모두 담은 시즌 셀렉션";

const TITLES = [
  "계절에 구애받지 않고",
  "가볍고 뛰어난 보온성을",
  "포근한 따뜻함이",
];

const SECONDARY = [
  "편하게 입을 수 있는 아노락",
  "자랑하는 방한조끼",
  "필요할 때 플리스",
];

const DESCRIPTIONS = [
  "카테고리명 카테고리명 카테고리명",
  "카테고리명 카테고리명 카테고리명명",
];

test.describe("Showcase section (desktop)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders the showcase heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: HEADING })).toBeVisible();
  });

  test("renders several product titles and secondary titles", async ({ page }) => {
    const showcase = page.locator("section", {
      has: page.getByRole("heading", { name: HEADING }),
    });
    await expect(showcase).toBeVisible();

    for (const t of TITLES) {
      await expect(showcase.getByText(t, { exact: false }).first()).toBeVisible();
    }
    for (const s of SECONDARY) {
      await expect(showcase.getByText(s, { exact: false }).first()).toBeVisible();
    }
  });

  test("renders sample descriptions", async ({ page }) => {
    const showcase = page.locator("section", {
      has: page.getByRole("heading", { name: HEADING }),
    });
    for (const d of DESCRIPTIONS) {
      await expect(showcase.getByText(d, { exact: true }).first()).toBeVisible();
    }
  });
});

test.describe("Showcase section (mobile)", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // mobile-ish
    await page.goto("/");
  });

  test("renders the showcase heading on mobile", async ({ page }) => {
    await expect(page.getByRole("heading", { name: HEADING })).toBeVisible();
  });

  test("renders product texts on mobile as well", async ({ page }) => {
    const showcase = page.locator("section", {
      has: page.getByRole("heading", { name: HEADING }),
    });

    for (const t of TITLES) {
      await expect(showcase.getByText(t, { exact: false }).first()).toBeVisible();
    }
    for (const s of SECONDARY) {
      await expect(showcase.getByText(s, { exact: false }).first()).toBeVisible();
    }
    for (const d of DESCRIPTIONS) {
      await expect(showcase.getByText(d, { exact: true }).first()).toBeVisible();
    }
  });
});
