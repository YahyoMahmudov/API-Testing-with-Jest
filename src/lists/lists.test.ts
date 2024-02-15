import { clearItemsFromList } from "./lists";
import { getListDetails } from "./lists";

describe("Test for Lists  API ", () => {
  test("Verify that a account id is not null.", async () => {
    const { status } = await clearItemsFromList();
    expect(status).toBe(201);
  });
 
  test('Check Status code',async () => {
    const {status} = await getListDetails();
    expect(status).toBe(200);
    })

    test('Check  List details',async () => {
        const data = await getListDetails();
        expect(data.data.page).toBe(1);
        expect(data.data.id).not.toBe(null);

    })
});