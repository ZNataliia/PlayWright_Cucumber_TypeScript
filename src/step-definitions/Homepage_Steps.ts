import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { chromium, Browser, Page } from "playwright"


const url = "https://www.webdriveruniversity.com/";

Given('I navigate to the webdriveruniversity homepage', async () => {
    //Access URL
    await pageFixture.page.goto(url, { timeout: 60000 });
});

When('I click on the contact us button', async () => {
    
    const contactUs_Button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_Button.click();
});

When('I click on the login portal', async () => {
    const loginPortal_Button = await pageFixture.page.locator('#login-portal');
    await loginPortal_Button.click();
});
