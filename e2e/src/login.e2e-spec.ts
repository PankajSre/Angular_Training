import { LoginPage } from './login.po';


describe('Angular Form Validation', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it('Angular Form  should be valid', () => {
    page.getUsernameTextbox().sendKeys('admin');
    page.getEmailTextbox().sendKeys('admin@niit.com');
    page.getSecretTextbox().sendKeys('What is your Favourite Food?');
    page.getAnswerTextbox().sendKeys('Rice');
    page.getGenderTextbox().sendKeys('Male');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
  });
  it('Angular Form  should be Invalid', () => {
    page.getUsernameTextbox().sendKeys('');
    page.getEmailTextbox().sendKeys('admin@niit.com');
    page.getSecretTextbox().sendKeys('What is your Favourite Food?');
    page.getAnswerTextbox().sendKeys('Rice');
    page.getGenderTextbox().sendKeys('Male');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-invalid');
  });
});
