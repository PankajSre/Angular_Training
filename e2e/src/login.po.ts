import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo() {
        return browser.get('/angular-form');
    }
    getUsernameTextbox() {
        return element(by.name('username'));
    }
    getEmailTextbox() {
        return element(by.name('email'));
    }
    getSecretTextbox() {
        return element(by.name('secret'));
    }
    getAnswerTextbox() {
        return element(by.name('answer'));
    }
    getGenderTextbox() {
        return element(by.name('gender'));
    }
    getForm() {
        return element(by.css('#submittedForm'));
    }

}
