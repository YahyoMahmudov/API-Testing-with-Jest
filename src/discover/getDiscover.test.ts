import { getMovieInfo } from "./getDiscover";
import { getTvInfo } from "./getDiscover";

describe("Test for Discover Movia api ", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getMovieInfo();
    expect(data.data.id).not.toBe(null);
    expect(data).toBeDefined();
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.results.length).toBe(20);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await getMovieInfo();

    expect(status).toBe(200);
  });
});

describe("Test for Discover Tv api", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getTvInfo();
    expect(data.data.id).not.toBe(null);
    expect(data.data.results[0].id).toBeGreaterThan(50000);
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.results.length).toBe(20);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await getTvInfo();
    expect(status).toBe(200);
  });
});