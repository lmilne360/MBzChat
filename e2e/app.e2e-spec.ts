import { MBchatPage } from './app.po';

describe('mbchat App', () => {
  let page: MBchatPage;

  beforeEach(() => {
    page = new MBchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
