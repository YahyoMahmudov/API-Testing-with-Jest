import * as postAccount from './postAccount';
import * as getAccount from './getAccount';

describe('Add favourite movie to the account', () => {

    test('Verify that movie is added to the favourites', async () => {
        await postAccount.addAccountFavourite(390);
        const response = await getAccount.getAccountFavouriteMovies();
        console.log("FAVOURITE MOVIES: "+response.data)
        const movie = response.data.results.find(movie => movie.id === 390);
        expect(movie?.id).toBe(390);
    });

    test('Verify that the status code of the response is 201', async () => {
        const response = await postAccount.addAccountFavourite(400);
        expect(response.status).toBe(201);
    });
});

describe('Add watchlist movie to the account', () => {

    test('Verify that movie is added to the watchlist', async () => {
        await postAccount.addAccountWatchlist(391);
        const response = await getAccount.getAccountWatchlistMovies();
        console.log("WATCHLIST MOVIES: "+response.data)
        const movie = response.data.results.find(movie => movie.id === 391);
        expect(movie?.id).toBe(391);
    });

    test('Verify that the status code of the response is 201', async () => {
        const response = await postAccount.addAccountWatchlist(389);
        expect(response.status).toBe(201);
    });
});