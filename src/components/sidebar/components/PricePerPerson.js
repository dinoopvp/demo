import {
    PRICE_PP_FILTER_OPTIONS,
} from "../../../config/constants";
function PricePerPerson(props){
        return (
            <p key={props.index}>
                <label>
                    <input
                        name={props.name}
                        id={props.id}
                        type="checkbox"
                        value={props.value}
                        onChange={props.handleFilterPricePerPerson}
                    />
                    {props.displayValue}
                </label>
            </p>
        )
}
export default PricePerPerson;