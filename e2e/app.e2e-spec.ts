import { FrontlineChallengePage } from './app.po';

describe('frontline-challenge App', () => {
  let page: FrontlineChallengePage;

  beforeEach(() => {
    page = new FrontlineChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
