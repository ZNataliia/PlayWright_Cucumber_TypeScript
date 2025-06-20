import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";
import { faker } from '@faker-js/faker';
import { CucumberWorld } from "./world/CucumberWorld";



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

Then('I should be presented with a unsuccessful contact us message', async () => {
    // Write code here that turns the phrase above into concrete actions
    const errorMessage = pageFixture.page.locator("body");
    const messageText = await errorMessage.textContent();
    // Check if the error message contains specific text or patterns
    expect(messageText).toMatch(/Error: (all fields are required|invalid email address)/);
});

//cucumber expressions


When('I type a specific first name {string}', async (firstName: string) => {
    const firstName_Input = pageFixture.page.getByRole('textbox', { name: 'First Name' })
    await firstName_Input.fill(firstName);
});


When('I type a specific last name {string}', async (LastName: string) => {
    const lastName_Input = await pageFixture.page.getByRole('textbox', { name: 'Last Name' })
    await lastName_Input.fill(LastName);
});

When('I enter a specific email address {string}', async (email: string) => {
    const email_Input = await pageFixture.page.getByRole('textbox', { name: 'email' })
    await email_Input.fill(email);
});

When('I type specific text {string} and a number {int} within the comment input field', async (comment: string, commentNumber: number) => {
    const comment_Input = await pageFixture.page.getByRole('textbox', { name: 'comment' })
    await comment_Input.fill(comment + ' ' + commentNumber);
});

//random data

When('I type a random first name', async function (this: CucumberWorld) {
    const randomFirstName = faker.person.firstName(); // Generate a random first name
    this.setFirstName(randomFirstName); // Set the first name in the world object
    const firstName_Input = pageFixture.page.getByRole('textbox', { name: 'First Name' })
    await firstName_Input.fill(randomFirstName);
});


When('I type a random last name', async function (this: CucumberWorld) {
    const randomLastName = faker.person.lastName(); // Generate a random last name
    this.setLastName(randomLastName); // Set the last name in the world object
    const lastName_Input = await pageFixture.page.getByRole('textbox', { name: 'Last Name' })
    await lastName_Input.fill(randomLastName);
});

When('I enter a random email address', async function (this: CucumberWorld) {
    const randomEmail = faker.internet.email(); // Generate a random email address
    this.setEmailAddress(randomEmail); // Set the email address in the world object
    const email_Input = await pageFixture.page.getByRole('textbox', { name: 'email' })
    await email_Input.fill(randomEmail);
});

When('I type a random comment', async () => {
    const comment_Input = await pageFixture.page.getByRole('textbox', { name: 'comment' })
    await comment_Input.fill(faker.lorem.sentence());
});

//outlines

When('I type a first name {word} and a last name {word}', async (firstName: string, lastName: string) => {
    const firstName_Input = pageFixture.page.getByRole('textbox', { name: 'First Name' })
    await firstName_Input.fill(firstName);
    const lastName_Input = pageFixture.page.getByRole('textbox', { name: 'Last Name' })
    await lastName_Input.fill(lastName);

});
When('I type a email address {string} and a comment {string}', async (emailAddress: string, comment: string) => {
    const email_Input = pageFixture.page.getByRole('textbox', { name: 'email' })
    await email_Input.fill(emailAddress);
    const comment_Input = pageFixture.page.getByRole('textbox', { name: 'comment' })
    await comment_Input.fill(comment);
});

Then('I should be presented with header text {string}', async (message: string) => {
    // Wait for the header or body to be present
    await pageFixture.page.waitForSelector("//h1|//body", { state: "visible" });
    // get all elements
    const elements = await pageFixture.page.locator("//h1|//body").elementHandles();
    //loop though all elements and check if the text content matches the expected message
    let foundElementText = '';
    //await pageFixture.page.pause(); // Wait for the page to load completely
    for (const element of elements) {
        if (!element) {
            // Skip null elements
            continue;
        }
        const text = await element.innerText();
        if (text.includes(message)) {
            foundElementText = text;
            break;
        }
    }


    // Assert that the message text matches the expected message
    expect(foundElementText).toContain(message);
});