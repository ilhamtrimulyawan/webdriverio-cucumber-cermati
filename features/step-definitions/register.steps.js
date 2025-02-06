const RegisterPage = require('../pageobjects/register.page');
const OTPPage = require('../pageobjects/otp.page');
const assert = require('assert');
const { faker } = require('@faker-js/faker');
const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const user = {
    email: faker.internet.email(),
    phone: `+628${faker.string.numeric(9)}`,
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    password: faker.internet.password(12, false, /[A-Za-z0-9]/)
};

Given(/^I am on the register cermati page$/, async () => {
    const cookies = await browser.getCookies();
    await browser.setCookies(cookies);
    await browser.deleteAllCookies();
    await RegisterPage.open();
});

When(/^I fill in the registration form with valid data$/, async (dataTable) => {
    const data = dataTable.hashes()[0]; // Mengambil data pertama dari tabel

    console.log(`Registering user: ${data.firstName} ${data.lastName}, ${data.email}, ${data.phone}`);

    await RegisterPage.fillRegistrationForm(data.firstName, data.lastName, data.email, data.phone);
});

When(/^I click Daftar button$/, async () => {
    await RegisterPage.clickDaftarButton();
});

Then(/^I should be on the Verification OTP page$/, async () => {
    await OTPPage.verifyOTPPage();
});

Then(/^I should be on the OTP verification page$/, async () => {
    await browser.waitUntil(
        async () => {
            const url = await browser.getUrl();
            return url.includes('/app/verification-methods') || url.includes('/app/verify-otp');
        },
        {
            timeout: 5000,
            timeoutMsg: 'Expected to be on the OTP verification page, but the URL did not match'
        }
    );

    const currentUrl = await browser.getUrl();
    console.log(`Current URL: ${currentUrl}`);

    await expect(currentUrl).toMatch(/\/app\/(verification-methods|verify-otp)/);
});