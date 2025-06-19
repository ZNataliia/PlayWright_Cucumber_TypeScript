import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";


When('I fill login field with {string}', async (login: string) => {
    const loginInput = pageFixture.page.getByRole('textbox', { name: 'Username' })
    await loginInput.fill(login);
});


When('I fill password field with {string}', async (password: string) => {
    const passwordInput = await pageFixture.page.getByRole('textbox', { name: 'password' });
    await passwordInput.fill(password);
});


When('I click on the login button', async () => {
    const loginButton = await pageFixture.page.getByRole('button', { name: 'login' });
    await loginButton.click();
});

Then('I should be presented with a {string} message', async (message: string) => {

    pageFixture.page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe(message);
    });
});