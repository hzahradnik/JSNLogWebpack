import { JSNLogWebpackPage } from './app.po';

describe('jsnlog-webpack App', () => {
  let page: JSNLogWebpackPage;

  beforeEach(() => {
    page = new JSNLogWebpackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
