import { BcTestPage } from './app.po';

describe('bc-test App', function() {
  let page: BcTestPage;

  beforeEach(() => {
    page = new BcTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
