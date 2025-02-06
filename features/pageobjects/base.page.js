class BasePage {
    async open(path) {
        const cookies = await browser.getCookies();

// Gunakan cookie sebelum mengakses halaman reCAPTCHA
        await browser.setCookies(cookies);
        await browser.url(path);
    }
}

module.exports = BasePage;
