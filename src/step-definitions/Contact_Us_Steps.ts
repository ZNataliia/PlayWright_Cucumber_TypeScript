import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";



When('I switch to the new browser tab', async () => {
    const [newPage] = await Promise.all([
        pageFixture.context.waitForEvent('page'),
        // The action that opens the new tab should happen before this step
    ]);
    pageFixture.page = newPage;
    await pageFixture.page.bringToFront?.();
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
    const successMessage = await pageFixture.page.getByText('Thank You for your Message!');
});
