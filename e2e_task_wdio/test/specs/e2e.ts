import PriceRatesPage from '../pageobjects/priceRatesPage.js'

describe('Spectrocoin e2e task', () => {
    before(() => {
        PriceRatesPage.open();
    });

    it('close cookies modal', async () => {
        await PriceRatesPage.acceptCookiesButton.waitForDisplayed();
        await PriceRatesPage.acceptCookies();
        await expect(PriceRatesPage.acceptCookiesButton).not.toBeDisplayed();
    });

    it('change displayed currency to GBP', async () => {
        await PriceRatesPage.changeCurrency(1);
        await expect(PriceRatesPage.currencyDropdown).toHaveTextContaining('GBP');
    });

    it('enter ADA to search field', async () => {
        await PriceRatesPage.inputData('ADA');
        await expect(PriceRatesPage.cryptoName).toHaveTextContaining('ADA');
    });

    it('check if ADA change rate in last 24h was positive', async () => {
        await expect(PriceRatesPage.rateChange).toHaveTextContaining('+');
    });

    // different approach
    it.skip('check if ADA change rate in last 24h was positive', async () => {
        await expect(await PriceRatesPage.returnRate('ADA')).toHaveTextContaining('+');
    });
})

