import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import logger from '../logger/logger';
import { CucumberWorld } from "./world/CucumberWorld";


const url = "https://www.webdriveruniversity.com/";

Given('I navigate to the webdriveruniversity homepage', async function (this: CucumberWorld) {
    //Set the URL in the world object
    this.setUrl(url);
    //Log the URL
    logger.info('Navigating to: ' + url);
    try {
        //Access URL
        await pageFixture.page.goto(url);
        logger.info('Accessing URL: ' + url);
        this.setUrl(url); // Set the URL in the world object
        //throw new Error('Simulating an error during navigation');
    } catch (error: any) {
        logger.error('An error has occurred: ' + error.message);
    }
});

When('I click on the contact us button', async () => {
    //await page.pause();
    const contactUs_Button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
    await contactUs_Button.click();
});

When('I click on the login portal button', async () => {
    const login_Button = await pageFixture.page.getByRole('link', { name: 'LOGIN PORTAL Login Portal' });
    await login_Button.click();
});