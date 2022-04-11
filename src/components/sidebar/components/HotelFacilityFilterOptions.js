
function HotelFacilityFilterOptions(props) {
    return (
        <p key={props.index}>
            <label>
                <input
                    name={props.name}
                    id={props.id}
                    type="checkbox"
                    value={props.value}
                    onChange={props.handleFilterFacility}
                />
                {props.value}
            </label>
        </p>
    )
}
export default HotelFacilityFilterOptions;