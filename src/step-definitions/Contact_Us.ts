import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright"

let browser: Browser; //Represents the browser instance (e.g., Chrome, Firefox) opened by Playwright.
let context: any; //Represents a browser context (a separate browsing session); Each context has its own cookies, cache, and storage.
let page: Page; //Represents a single web page within a context


When('I switch to the new browser tab', async () => {
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        // The action that opens the new tab should happen before this step
    ]);
    page = newPage;
    await page.bringToFront?.();

});

When('I type a first name', async () => {
    const firstName_Input = await page.getByRole('textbox', { name: 'First Name' })
    await firstName_Input.fill('John');

});

When('I type a last name', async () => {
    const lastName_Input = await page.getByRole('textbox', { name: 'Last Name' })
    await lastName_Input.fill('Smith');
});

When('I enter an email address', async () => {
    const email_Input = await page.getByRole('textbox', { name: 'email' })
    await email_Input.fill('1@gmail.com');
});

When('I type a comment', async () => {
    const comment_Input = await page.getByRole('textbox', { name: 'comment' })
    await comment_Input.fill('comment');
});

When('I click on the submit button', async () => {
    const submitButton = await page.getByRole('button', { name: 'submit' })
    await submitButton.click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    // Write code here that turns the phrase above into concrete actions
    const successMessage = await page.getByText('Thank You for your Message!');
});
