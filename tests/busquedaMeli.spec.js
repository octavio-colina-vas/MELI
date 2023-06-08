const HomePage = require('../pages/home.page');
const assert = require('assert');

describe('MercadoLibre search suite', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('should enter to vehiculos category', async () => {
    await HomePage.categoriasLink.moveTo();

    await HomePage.vehiculosLink.click();

    await browser.pause(1000);

    assert.equal(
      await browser.getUrl(),
      'https://www.mercadolibre.com.ar/c/autos-motos-y-otros#menu=categories',
      'The URL is not the same'
    );
  });
  it('should enter to vehiculos category and perform a search', async () => {
    await HomePage.categoriasLink.moveTo();

    await HomePage.vehiculosLink.click();

    await HomePage.searchFor('bora');

    await browser.pause(1000);

    assert.equal(
      await browser.getUrl(),
      'https://vehiculos.mercadolibre.com.ar/bora#D[A:bora,MLA1743]',
      'The URL is not the same'
    );
  });

  it.only('should search in a specific area', async () => {
    await HomePage.categoriasLink.moveTo();

    await HomePage.vehiculosLink.click();

    await HomePage.searchFor('bora');

    await HomePage.cordobaFilter.scrollIntoView();

    await browser.pause(6000);

    await HomePage.cordobaFilter.click();

    await browser.pause(3000);

    assert.equal(await HomePage.cordobaPill.isDisplayed(), true, 'Cordoba filter not applied');
  });
});
