import { getAccountDetails } from './getAccount';
import { getAccountFavourites } from './getAccount';

describe('Get account details', () => {

    test('Verify that a account id is not null.', async () => {
        const data = await getAccountDetails();
        expect(data.data.id).not.toBe(null);
    });

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await getAccountDetails();
        expect(status).toBe(200);
    });
});

describe('Get account favourites', () => {

    test('Verify that the status code of the response is 200', async () => {
        const { status } = await getAccountFavourites();
        expect(status).toBe(200);
    });
});