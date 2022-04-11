import HolidayhomeItem from "./HolidayhomeItem";
import "./HolidayhomeList.css"
import _ from "underscore";
function HolidayhomeList(props) {
    let tempArray = [];
    let filteredArray = [];
    let holidayData = [];
    holidayData = props.holidayHomes;
    if (!_.isEmpty(props.perPersonCostRanges)) {
        for (let i in props.perPersonCostRanges) {
            tempArray = props.holidayHomes.filter(holidayHome => holidayHome.pricePerPerson < props.perPersonCostRanges[i])
            filteredArray = [...new Set(filteredArray),tempArray];
        }
        filteredArray = _.flatten(filteredArray)
        filteredArray = _.uniq(filteredArray);
        if(!_.isEmpty(filteredArray)){
            holidayData = filteredArray;
        }else{
            holidayData = [];
        }
    }
  
    
   
    if(!_.isEmpty(props.hotelFacility)){
        holidayData = holidayData.filter(holidayHome =>   holidayHome.hotel.content.hotelFacilities.some(item => props.hotelFacility.includes(item)))
    }
    if(!_.isEmpty(props.hotelRatingFilter)){
        holidayData = holidayData.filter(holidayHome =>   props.hotelRatingFilter.includes(holidayHome.hotel.content.starRating))
    }
    return (
        <>
            <div className="results-count">
                Found {holidayData.length} results.
            </div>
            <div className="holiday-home-list">

                {holidayData.map((holidayhome) => (
                    <HolidayhomeItem
                        key={holidayhome.hotel.id}
                        id={holidayhome.hotel.id}
                        image={holidayhome.hotel.content.images[0].RESULTS_CAROUSEL.url}
                        title={holidayhome.hotel.content.name}
                        address={holidayhome.hotel.content.hotelLocation[0]}
                        description={holidayhome.hotel.content.hotelDescription}
                        totalPrice={holidayhome.pricePerPerson}
                        hotelFacilities={holidayhome.hotel.content.hotelFacilities}
                        starRating={holidayhome.hotel.content.starRating}
                    />
                ))}
            </div>
        </>
    )
}


export default HolidayhomeList;