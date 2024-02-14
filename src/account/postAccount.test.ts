import * as AccountModule from './postAccount';

describe('Get account favourite movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.addAccountFavourite();
        expect(status).toBe(201);
    });
});

describe('Get account watchlist movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.addAccountWatchlist();
        expect(status).toBe(201);
    });
});