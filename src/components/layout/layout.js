import React, { useState } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Footer from "../footer/footer";
import AllHolidayHome from "../../pages/AllHolidayHome";
import Sidebar from "../sidebar/Sidebar";
import HolidaySearch from "../HolidaySearch/HolidaySearch"
import "./layout.css";
import { SEARCH_VALIDATION_ERROR_MESSAGE } from "../../config/constants"
function Layout(props) {
    const [location, onLcationChange] = useState("");
    const [durationInDays, onDurationChange] = useState("");
    const [adults, onAdultsChange] = useState("");
    const [depDate, onDepartureDateChange] = useState(new Date());
    const [departureDate, onFormatDepartureDate] = useState(new Date());
    const [isSearchSubmit, onSearchSubmit] = useState(false);
    const [perPersonCostRanges, setPerPersonCostRanges] = useState([])
    const [hotelFacility, setHotelFacility] = useState([])
    const [hotelRatingFilter, setHotelRatingFilter] = useState([])
    const [isSearchFrmError, setSearchFrmError] = useState(false)

    function handleSearch(e) {
        if (!validateFields()) {
            setSearchFrmError(true);
            return false;
        }
        setSearchFrmError(false);
        onSearchSubmit(true)
        e.preventDefault();
    }
    function validateFields() {
        if (adults === "" || depDate === "" || departureDate === "" || location === "") {
            return false;
        }
        return true;
    }
    function formatDepDate(depDate) {
        let formattedDepDate = `${depDate.getDate()}-0${(depDate.getMonth() + 1)}-${depDate.getFullYear()}`;
        onDepartureDateChange(depDate);
        onFormatDepartureDate(formattedDepDate)
    }
    function handleLocationChange(event) {
        onLcationChange(event.target.value);
    }
    function handleDurationChange(e) {
        onDurationChange(e.target.value)
    }
    function handleAdultsChange(e) {
        onAdultsChange(e.target.value)

    }
    function handleFilterPricePerPerson(e) {
        const { value, checked } = e.target;
        if (checked) {
            setPerPersonCostRanges([...new Set(perPersonCostRanges), value])
        } else {
            const filteredArray = perPersonCostRanges.filter((item) => item != value)
            setPerPersonCostRanges(filteredArray)
        }
    }
    function handleFilterFacility(e) {
        const { value, checked } = e.target;
        if (checked) {
            setHotelFacility([...new Set(hotelFacility), value])
        } else {
            const filteredArray = hotelFacility.filter((item) => item != value)
            setHotelFacility(filteredArray)
        }
        console.log("hotelFacility", hotelFacility)
    }
    function handleFilterRating(e) {
        const { value, checked } = e.target;
        if (checked) {
            setHotelRatingFilter([...new Set(hotelRatingFilter), value])
        } else {
            const filteredArray = hotelRatingFilter.filter((item) => item != value)
            setHotelRatingFilter(filteredArray)
        }
    }
    return (
        <>
            <HeaderComponent
            />
            <HolidaySearch
                location={location}
                handleLocationChange={handleLocationChange}
                depDate={depDate}
                formatDepDate={formatDepDate}
                durationInDays={durationInDays}
                handleDurationChange={handleDurationChange}
                adults={adults}
                handleAdultsChange={handleAdultsChange}
                handleSearch={handleSearch}
            />
            <div className="field-error">
                {isSearchFrmError ? SEARCH_VALIDATION_ERROR_MESSAGE : ""}
            </div>
            <div className="content-wrapper">
                <div className="sidebar">
                    {isSearchSubmit &&
                        <Sidebar
                            handleFilterRating={handleFilterRating}
                            handleFilterFacility={handleFilterFacility}
                            handleFilterPricePerPerson={handleFilterPricePerPerson}
                        />
                    }
                </div>
                <div className="search-results-container">
                    {isSearchSubmit &&
                        <AllHolidayHome
                            location={location}
                            depDate={departureDate}
                            durationInDays={durationInDays}
                            adults={adults}
                            perPersonCostRanges={perPersonCostRanges}
                            onSearchSubmit={onSearchSubmit}
                            hotelFacility={hotelFacility}
                            hotelRatingFilter={hotelRatingFilter}
                        />
                    }
                </div>
            </div>
            <div className={isSearchSubmit ? "" : "content-dummy-area"}>
            </div>
            <Footer />
        </>
    )
}
export default Layout;