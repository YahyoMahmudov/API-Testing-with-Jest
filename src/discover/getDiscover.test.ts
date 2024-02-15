import { getMovieList } from "./getDiscover";
import { getTvShowlist } from "./getDiscover";

describe("Test for Discover Movia api ", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getMovieList();
    expect(data.data.id).not.toBe(null);
    expect(data).toBeDefined();
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await getMovieList();
    expect(status).toBe(200);
  });
});

describe("Test for Discover Tv api", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await getTvShowlist();
    expect(data.data.id).not.toBe(null);
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await getTvShowlist();
    expect(status).toBe(200);
  });
});
