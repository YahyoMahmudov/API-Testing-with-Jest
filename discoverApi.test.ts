import fetchData from './discoverApi';

describe('fetchData function', () => {
  test('fetches data successfully', async () => {
    const { data, status: statusCode } = await fetchData();
    expect(data).toBeDefined(); 
    expect(data.results).toBeDefined(); 
    console.log(data);
    expect(data.results.length).toBeGreaterThan(0); 
  });

  test('number of movie in one page', async () => {
    const { data } = await fetchData();
    expect(data.results.length).toEqual(20);
  });

  test('Status code', async () => {
    const { status } = await fetchData();
    expect(status).toBe(200);
  });
});
