import { NflPicksPage } from './app.po';

describe('nfl-picks App', function() {
  let page: NflPicksPage;

  beforeEach(() => {
    page = new NflPicksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
