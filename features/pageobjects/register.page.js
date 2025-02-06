const { $ } = require('@wdio/globals')
const Page = require('./page');

class RegisterPage extends Page{
    get inputFirstName() { return $('#firstName'); }
    get inputLastName() { return $('#lastName'); }
    get inputEmail() { return $('#email'); }
    get inputPhone() { return $('#mobilePhone'); }
    get btnDaftar() { return $("//*[@data-button-name='register-new']"); }


    open () {

        return super.open('gabung');
    }

    async fillRegistrationForm(firstName, lastName, email, phone) {
        await this.inputPhone.setValue(phone);
        await this.inputEmail.setValue(email);
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);

    }

    async clickDaftarButton() {
        await this.btnDaftar.click();
    }
}

module.exports = new RegisterPage();
