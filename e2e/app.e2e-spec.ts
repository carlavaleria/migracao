import { MigracaoPage } from './app.po';

describe('migracao App', function() {
  let page: MigracaoPage;

  beforeEach(() => {
    page = new MigracaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
