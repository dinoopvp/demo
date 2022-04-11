import DatePicker from 'react-date-picker';

import { DEPARTURE_LOCATIONS, DURATION_IN_DAYS,ADULTS } from "../../config/constants"
function HolidaySearch(props) {
    return (
        <div className="search-container">
            <div className="search-fields" >
                <select data-testid="select-location-option" className="location-container" value={props.location} onChange={props.handleLocationChange}>
                    <option value="">Select Location</option>
                    {
                        DEPARTURE_LOCATIONS.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.displayValue}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="depDatePicker search-fields ">
                <DatePicker
                    minDate={new Date()}
                    value={props.depDate} onChange={props.formatDepDate} />
            </div>
            <div className="search-fields">
                <select className="duration-container" value={props.durationInDays} onChange={props.handleDurationChange}>
                    <option value="">Select Duration(Days)</option>
                    {
                        DURATION_IN_DAYS.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.displayValue}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="search-fields">
                <select className="adults-container" value={props.adults} onChange={props.handleAdultsChange}>
                    <option value="">Select Adults</option>
                    {
                        ADULTS.map((item, index) => {
                            return (
                                <option key={index} value={item.value}>{item.displayValue}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="button-search-container">
                <button className="button-search" onClick={props.handleSearch}>Find Holidays</button>
            </div>
        </div>

    )
}
export default HolidaySearch;