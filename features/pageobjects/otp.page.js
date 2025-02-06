class OTPPage {
    get otpInput() { return $("//input[@id='otp-input']"); } // XPath untuk input OTP
    get otpHeader() { return $("//h1[contains(text(), 'Verifikasi No. Handphone')]"); } // XPath untuk header halaman OTP
    get otpPhoneNumber() { return $("//p[contains(text(), '+62')]"); } // XPath untuk nomor telepon OTP

    async verifyOTPPage(expectedPhone) {
        await expect(this.otpHeader).toBeDisplayed(); // Pastikan header OTP terlihat
        const displayedPhone = await this.otpPhoneNumber.getText(); // Ambil teks nomor HP yang ditampilkan

        console.log(`Expected phone: ${expectedPhone}, Displayed phone: ${displayedPhone}`);

        // Pastikan nomor HP yang muncul sesuai dengan nomor HP saat registrasi
        await expect(displayedPhone).toContain(expectedPhone);
    }


}

module.exports = new OTPPage();
