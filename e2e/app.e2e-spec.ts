import { GoosegoosePage } from './app.po';

describe('goosegoose App', () => {
  let page: GoosegoosePage;

  beforeEach(() => {
    page = new GoosegoosePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
