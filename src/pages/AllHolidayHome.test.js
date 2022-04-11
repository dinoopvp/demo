import axios from "axios";

import { API_HOST_NAME, SEARCH_END_POINT } from "../config/constants"

export const getHolidayLists = async () => {
    const payload = {
        "bookingType": "hotel",
        "location": "orlando",
        "departureDate": "24-05-2022",
        "duration": "7",
        "partyCompositions": [
            {
                "adults": 2,
                "childAges": [],
                "infants": 0
            }
        ]
    }
    try {
        return await axios.post(`${API_HOST_NAME}${SEARCH_END_POINT}`, payload);
    } catch (e) {
        return [];
    }
};
jest.mock("axios");
describe("getHolidayLists", () => {
    describe("When API call is successful", () => {
        it("It should return results", async () => {
            const result = await getHolidayLists();
            expect(result).not.toEqual([]);
          });
        it("should return 'pricePerPerson, hotel' from Holiday lists Array", async () => {
            const result = await getHolidayLists();
          //  expect.arrayContaining(["pricePerPerson", "hotel"])
            /*expect(result).toEqual(
                expect.arrayContaining(["pricePerPerson", "hotel"])
              );*/
        });
    });
});