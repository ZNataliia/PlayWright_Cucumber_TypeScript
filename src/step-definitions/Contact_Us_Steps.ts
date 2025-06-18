import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";



When('I switch to the new browser tab', async () => {

    await pageFixture.context.waitForEvent('page');
    //retrieve all open pages in the browser context
    const pages = pageFixture.context.pages();
    //assigg the most recent page to the pageFixture
    pageFixture.page = pages[pages.length - 1];
    await pageFixture.page.bringToFront?.();

    //ensure the page is maximized
    await pageFixture.page.setViewportSize({ width: 1920, height: 1080 }

    );
});

When('I type a first name', async () => {
    const firstName_Input = await pageFixture.page.getByRole('textbox', { name: 'First Name' })
    await firstName_Input.fill('John');

});

When('I type a last name', async () => {
    const lastName_Input = await pageFixture.page.getByRole('textbox', { name: 'Last Name' })
    await lastName_Input.fill('Smith');
});

When('I enter an email address', async () => {
    const email_Input = await pageFixture.page.getByRole('textbox', { name: 'email' })
    await email_Input.fill('1@gmail.com');
});

When('I type a comment', async () => {
    const comment_Input = await pageFixture.page.getByRole('textbox', { name: 'comment' })
    await comment_Input.fill('comment');
});

When('I click on the submit button', async () => {
    const submitButton = await pageFixture.page.getByRole('button', { name: 'submit' })
    await submitButton.click();
});

Then('I should be presented with a successful contact us submission message', async () => {
    // Write code here that turns the phrase above into concrete actions
    const successMessage = await pageFixture.page.waitForSelector("#contact_reply h1");
    const messageText = await successMessage.textContent();
    expect(messageText).toBe("Thank You for your Message!");
});

Then('I should be presented with an error contact us message', async () => {
    // Write code here that turns the phrase above into concrete actions
    const errorMessage = pageFixture.page.locator("body");
    const messageText = await errorMessage.textContent();
    // Check if the error message contains specific text or patterns
    expect(messageText).toMatch(/Error: (all fields are required|invalid email address)/);
});

