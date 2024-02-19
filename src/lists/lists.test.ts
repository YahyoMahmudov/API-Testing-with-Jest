import { clearItemsFromMovieList } from "./lists";
import { getMovieListDetails } from "./lists";


const listId = 8291031

describe("Test for Lists  API ", () => {
  test("Verify that movie list is empty", async () => {
    const response = await clearItemsFromMovieList(listId);
    expect(response.status).toBe(201);
    const movieList = await getMovieListDetails(listId);
    expect(movieList.data.item_count).toBe(0);
  });

  test("Check Status code", async () => {
    const { status } = await getMovieListDetails(listId);
    expect(status).toBe(200);
  });

  test("Check Movie List details", async () => {
    const data = await getMovieListDetails(listId);
    expect(data.data.id).not.toBe(null);
  });
});