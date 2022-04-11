import Rating from "react-rating"
function RatingFilterOptions(props) {
    return (
        <p key={props.index}>
            <label>
                <input
                    name={props.name}
                    id={props.id}
                    type="checkbox"
                    value={props.value}
                    onChange={props.handleFilterRating}
                />
                <Rating
                    initialRating={props.value}
                    readonly
                />
            </label>
        </p>
    )
}
export default RatingFilterOptions;