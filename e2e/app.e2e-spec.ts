import { RedDevilsAngular4Page } from './app.po';

describe('red-devils-angular4 App', () => {
  let page: RedDevilsAngular4Page;

  beforeEach(() => {
    page = new RedDevilsAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
