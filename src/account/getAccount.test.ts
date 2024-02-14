import * as AccountModule from './getAccount';

describe('Get account details', () => {

    test('Verify that a account id is not null.', async () => {
        const data = await AccountModule.getAccountDetails();
        expect(data.data.avatar.gravatar).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountDetails();
        expect(status).toBe(200);
    });
});

describe('Get account favourite movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountFavouriteMovies();
        expect(status).toBe(200);
    });
});

describe('Get account favourite tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountFavouriteTV();
        expect(status).toBe(200);
    });
});

describe('Get account lists', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountLists();
        expect(status).toBe(200);
    });
});

describe('Get account rated movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountRatedMovies();
        expect(status).toBe(200);
    });
});

describe('Get account rated tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountRatedTV();
        expect(status).toBe(200);
    });
});

describe('Get account rated tv episodes', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountRatedTvEpisodes();
        expect(status).toBe(200);
    });
});

describe('Get account rated watchlist movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountWatchlistMovies();
        expect(status).toBe(200);
    });
});

describe('Get account rated watchlist tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await AccountModule.getAccountWatchlistTV();
        expect(status).toBe(200);
    });
});