const request = require('supertest');
const {expect} = require('expect');

const app = 'https://spectrocoin.com';

describe('Spectrocoin api task', function() {
    it('test GET endpoint', async function() {
        const response = await request(app)
            .get('/scapi/ticker/usd/btc');
        expect(response.status).toBe(200);
        expect(response.body.currencyFrom).toBe('USD');
        expect(response.body.currencyTo).toBe('BTC');
        expect(response.body.currencyFromScale).toBeGreaterThanOrEqual(0);
        expect(response.body.currencyToScale).toBeGreaterThanOrEqual(0);
        expect(response.body.last).toBeGreaterThanOrEqual(0);
        expect(response.body.lastHP).toBeGreaterThanOrEqual(0);
        expect(response.body.friendlyLast.split(' ')[1]).toBe(response.body.currencyTo);
        expect(response.body.friendlyLast.split(' ')[0]).toBe('1');
        const BTCPrice = response.body.friendlyLast.split(' ')[3];
        const formattedBTCPrice = BTCPrice.replace(',','');
        expect(formattedBTCPrice).toBe(response.body.last.toString());
        expect(response.body.friendlyLast.split(' ')[4]).toBe(response.body.currencyFrom);
    });
});

