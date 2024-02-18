import { getMovieList } from "./getDiscover";
import { getTvShowlist } from "./getDiscover";

describe("Test for Discover Movie api ", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getMovieList(2);
    expect(data.data.id).not.toBe(null);
    expect(data).toBeDefined();
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.page).toBe(2);
  });

  test("Check status code", async () => {
    const { status } = await getMovieList(1);
    expect(status).toBe(200);
  });
});

describe("Test for Discover Tv api", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getTvShowlist(1);
    expect(data.data.id).not.toBe(null);
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await getTvShowlist(1);
    expect(status).toBe(200);
  });
});
