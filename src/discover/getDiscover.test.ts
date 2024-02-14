import { discoverMovie } from "./getDiscover";
import { discoverTv } from "./getDiscover";

describe("Test for Discover Movia api ", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await discoverMovie();
    expect(data.data.id).not.toBe(null);
    expect(data).toBeDefined();
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.results.length).toBe(20);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await discoverMovie();

    expect(status).toBe(200);
  });
});

describe("Test for Discover Tv api", () => {
  test("Verify that a account id is not null.", async () => {
    const data = await discoverTv();
    expect(data.data.id).not.toBe(null);
    expect(data.data.results[0].id).toBeGreaterThan(50000);
    expect(data.data.results.length).toBeGreaterThan(0);
    expect(data.data.results.length).toBe(20);
    expect(data.data.page).toBe(1);
  });

  test("Check status code", async () => {
    const { status } = await discoverTv();
    expect(status).toBe(200);
  });
});
