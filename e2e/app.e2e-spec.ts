import { MandalaPage } from './app.po';

describe('mandala App', function() {
  let page: MandalaPage;

  beforeEach(() => {
    page = new MandalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
