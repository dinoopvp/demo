import React, { useEffect, useState } from "react";
import axios from "axios";

import HolidayhomeList from "../components/holidayhome/HolidayhomeList"
import { API_HOST_NAME, SEARCH_END_POINT } from "../config/constants"

function AllHolidayHome(props) {
    const [holidayHomes, setHolidayHomes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const payload = {
        "bookingType": "hotel",
        "location": props.location,
        "departureDate": props.depDate,
        "duration": props.durationInDays,
        "partyCompositions": [
            {
                "adults": props.adults,
                "childAges": [],
                "infants": 0
            }
        ]
    }

    useEffect(() => {
        axios.post(`${API_HOST_NAME}${SEARCH_END_POINT}`, payload).then((response) => {
            setHolidayHomes(response.data.holidays)
            setIsLoading(false);
        })
    }, [props.location, props.depDate, props.adults, props.depDate])
    if (isLoading) {
        return (
            <div>Loading results...</div>
        )
    }
    return (
        <HolidayhomeList holidayHomes={holidayHomes}
            hotelFacility={props.hotelFacility}
            hotelRatingFilter={props.hotelRatingFilter}
            perPersonCostRanges={props.perPersonCostRanges} />
    )
}
export default AllHolidayHome;