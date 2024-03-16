//This file will contain the UI tests that we'll write using Playwright and playwright/test

const {expect, test} = require('@playwright/test');

test("Verify All Books link is visible", async ( {page} ) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
})

test("Verify Login button is visible", async ( {page} ) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();

    expect(isLoginButtonVisible).toBe(true);
})

test("Verify Register button is visible", async ( {page} ) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();

    expect(isRegisterButtonVisible).toBe(true);
})

test("Verify All Books link is visible after user login", async ( {page} ) => {
    await page.goto("http://localhost:3000/login");
    await page.fill('input[name="email"]', 'petar@abv.bg');
    await page.fill('input[name="password"]', '12345');
    await page.click('input[type="submit"]');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
})

test("Verify My Books button is visible after user login", async ( {page} ) => {
    await page.goto("http://localhost:3000/login");
    await page.fill('input[name="email"]', 'petar@abv.bg');
    await page.fill('input[name="password"]', '12345');
    await page.click('input[type="submit"]');

    const myBooksButton = await page.$('a[href="/profile"]');
    const isMyBooksButtonVisible = await myBooksButton.isVisible();

    expect(isMyBooksButtonVisible).toBe(true);
})

test("Verify Add Book button is visible after user login", async ( {page} ) => {
    await page.goto("http://localhost:3000/login");
    await page.fill('input[name="email"]', 'petar@abv.bg');
    await page.fill('input[name="password"]', '12345');
    await page.click('input[type="submit"]');

    const addBookButton = await page.$('a[href="/create"]');
    const isAddBookButtonVisible = await addBookButton.isVisible();

    expect(isAddBookButtonVisible).toBe(true);
})

test('Verify user email address is visible', async ({ page }) => {
    await page.goto("http://localhost:3000/login");
    await page.fill('input[name="email"]', 'petar@abv.bg');
    await page.fill('input[name="password"]', '12345');
    await page.click('input[type="submit"]');

    const emailElement = await page.$('span');
    const isEmailElementVisible = await emailElement.isVisible();

    expect(isEmailElementVisible).toBe(true);
})