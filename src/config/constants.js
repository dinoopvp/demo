export const HOTEL_FACILITIES = [
    "Restaurant",
    "Bar",
    "Room Service",
    "Valet parking",
    "Fitness Centre/Gym",
    "Internet Access",
    "Laundry Service",
    "Spa",
    "No Smoking",
    "Safety Deposit Box"
]
export const API_HOST_NAME = "https://www.virginholidays.co.uk/";
export const SEARCH_END_POINT = "cjs-search-api/search";
export const DEPARTURE_LOCATIONS = [
    { "displayValue": "New York", "value": "new-york" },
    { "displayValue": "Orlando", "value": "orlando" },
    { "displayValue": "Barbados", "value": "barbados" },
    { "displayValue": "Toronto", "value": "toronto" },
]

const drationStart = 1;
const durationLimit = 15;
let durationRangeOption = {};
let durationListItems = [];
for (let i = 1; i < durationLimit; i++) {
    durationRangeOption = { "displayValue": i, "value": i }
    durationListItems.push(durationRangeOption)
}
export const DURATION_IN_DAYS = durationListItems;

const adultsMin = 1;
const adultsMax = 10;
let adultsRangeOption = {};
let adultsListItems = [];
for (let i = 1; i < adultsMax; i++) {
    adultsRangeOption = { "displayValue": i, "value": i }
    adultsListItems.push(adultsRangeOption)
}
export const ADULTS = adultsListItems;

export const PRICE_PP_FILTER_OPTIONS = [
    {"name":"pricePerPerson","id":"pricePerPerson1","displayValue":"upto £500", "value":"500"},
    {"name":"pricePerPerson","id":"pricePerPerson2","displayValue":"upto £1000", "value":"1000"},
    {"name":"pricePerPerson","id":"pricePerPerson3","displayValue":"upto £2000", "value":"2000"}
]
export const RATING_FILTER_OPTIONS=[
    {"name":"rating","id":"rating","value":"5"},
    {"name":"rating","id":"rating","value":"4"},
    {"name":"rating","id":"rating","value":"3"},
    {"name":"rating","id":"rating","value":"2"},
    {"name":"rating","id":"rating","value":"1"},
]
export const SEARCH_VALIDATION_ERROR_MESSAGE = "All field input required."