import { SyncfeedPage } from './app.po';

describe('syncfeed App', function() {
  let page: SyncfeedPage;

  beforeEach(() => {
    page = new SyncfeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
