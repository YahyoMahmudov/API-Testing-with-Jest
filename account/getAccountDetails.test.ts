import { getAccountDetails } from './getAccountDetails';

describe('fetchData function', () => {
    
    test('fetches data successfully', async () => {
        const data = await getAccountDetails();
        expect(data.data.id).toBeDefined();
    });

    test('Status code', async () => {
        const { status } = await getAccountDetails();
        expect(status).toBe(200);
    });
});