import * as postAccount from './postAccount';

describe('Add favourite movie to the account', () => {

    test('Verify that the status code of the response is 201', async () => {
        const response = await postAccount.addAccountFavourite(390);
        expect(response.status).toBe(201);
    });
});

describe('Add watchlist movie to the account', () => {

    test('Verify that the status code of the response is 201', async () => {
        const response = await postAccount.addAccountWatchlist(389);
        expect(response.status).toBe(201);
    });
});