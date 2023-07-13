import Page from './page.js';

class PriceRatesPage extends Page {

    public get currencyDropdown () {
        return $('#currency-select');
    }

    public get currencyValues () {
        return $$('[id*="react-select-currency-select-option"]');
    }

    public get searchInput () {
        return $('[data-cy="SearchInput"]');
    }

    public get cryptoName () {
        return $('[data-cy="rates"]').$$('td')[0];
    }

    public get rateChange () {
        return $('[data-cy="rates"]').$$('td')[2];
    }

    public get acceptCookiesButton () {
        return $('button=Accept');
    }

    public get viewMoreButton () {
        return $('button=View more');
    }

    public get tableRows () {
        return $('[data-cy="rates"]').$$('tr');
    }

    public async inputData (name: string) {
        await this.searchInput.setValue(name);
        await (await $(`[data-cy="SearchInput.Option.${name}"]`)).click();
    }

    public async changeCurrency (index: number) {
        await this.currencyDropdown.click();
        await this.currencyValues[index].click();
    }

    public async acceptCookies () {
        await this.acceptCookiesButton.click();
    }

    public open () {
        return super.open('bitcoin-price-rates.html');
    }

    public async returnRate (name: string) {
        let isFound = false;
        while (!isFound) {
            for (let i = 1; i < await this.tableRows.length; i++) {
                let eachColumnName = await $('[data-cy="rates"]').$(`tr:nth-child(${i}) td:nth-child(1)`).getText();
                if (eachColumnName.includes(name)) {
                    isFound = true;
                    return await $('[data-cy="rates"]').$(`tr:nth-child(${i}) td:nth-child(3)`);
                }
            }
            if (await this.viewMoreButton.isEnabled()) {
                await this.viewMoreButton.click();
            }
            else return;     
        }
    }
}

export default new PriceRatesPage();
