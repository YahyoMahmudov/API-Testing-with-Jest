import * as getAccount from './getMovieLists';

describe('Get a list of movies that are currently in theatres.', () => {

    test('Verify that a results list is not null.', async () => {
        const response = await getAccount.getNowPlayingMovies();
        expect(response.data.results).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getNowPlayingMovies();
        expect(response.status).toBe(200);
    });
});

describe('Get a list of movies ordered by popularity.', () => {

    test('Verify that a results list is not null.', async () => {
        const response = await getAccount.getPopularMovies();
        expect(response.data.results).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getPopularMovies();
        expect(response.status).toBe(200);
    });
});

describe('Get a list of movies ordered by rating.', () => {

    test('Verify that a results list is not null.', async () => {
        const response = await getAccount.getTopRatedMovies();
        expect(response.data.results).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getTopRatedMovies();
        expect(response.status).toBe(200);
    });
});

describe('Get a list of movies that are being released soon.', () => {

    test('Verify that a results list is not null.', async () => {
        const response = await getAccount.getUpcomingMovies();
        expect(response.data.results).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const response = await getAccount.getUpcomingMovies();
        expect(response.status).toBe(200);
    });
});