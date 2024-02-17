import * as getAccount from './getAccount';
import * as postAccount from './postAccount';

describe('Test account details', () => {

    test('Verify that a account id is not null.', async () => {
        const response = await getAccount.getAccountDetails();
        expect(response.data.id).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountDetails();
        expect(response.status).toBe(200);
    });
});

describe('Test account favourite movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountFavouriteMovies();
        expect(response.status).toBe(200);
    });

    test('Verify that the status code of the response is 200', async () => {
        await postAccount.addAccountFavourite(391);
        const response = await getAccount.getAccountFavouriteMovies();
        const movie = response.data.results.find(movie => movie.id === 391);
        expect(movie?.id).toBe(391);
    });
});

describe('Test account favourite tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountFavouriteTV();
        expect(response.status).toBe(200);
    });
});

describe('Test account lists', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountLists();
        expect(response.status).toBe(200);
    });
});

describe('Test account rated movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountRatedMovies();
        expect(response.status).toBe(200);
    });
});

describe('Test account rated tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountRatedTV();
        expect(response.status).toBe(200);
    });
});

describe('Test account rated tv episodes', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountRatedTvEpisodes();
        expect(response.status).toBe(200);
    });
});

describe('Test account watchlist movies', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountWatchlistMovies();
        expect(response.status).toBe(200);
    });
});

describe('Test account watchlist tv', () => {

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getAccountWatchlistTV();
        expect(response.status).toBe(200);
    });
});