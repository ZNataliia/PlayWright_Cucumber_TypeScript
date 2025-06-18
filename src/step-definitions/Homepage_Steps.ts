import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { chromium, Browser, Page } from "playwright"


const url = "https://www.webdriveruniversity.com/";

Given('I navigated to homepage', async () => {
    //Access URL
    await pageFixture.page.goto(url, { timeout: 60000 });
});

When('I click on the contact us button', async () => {
    //await page.pause();
    const contactUs_Button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_Button.click();
});
