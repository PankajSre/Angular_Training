import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home for the anchor Tag', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });
});
