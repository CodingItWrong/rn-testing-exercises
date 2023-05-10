describe('managing movies', () => {
  const newMovieTitle = 'Movie 3';

  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('allows viewing and creating movies', async () => {
    await expect(element(by.text('Movie 1'))).toBeVisible();
    await expect(element(by.text('Movie 2'))).toBeVisible();

    await element(by.id('new-movie-title-field')).typeText(newMovieTitle);
    await element(by.id('save-movie-button')).tap();

    await expect(element(by.text('Movie 3'))).toBeVisible();
  });
});
