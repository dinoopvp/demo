import "./HolidayhomeItem.css";
import Rating from "react-rating"
function HolidayhomeItem(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} key={props.image} />
            </div>
            <div className="card-details">
                <div className="address">
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className="hotel-facilities">
                    <div className="facilities-title">
                        Hotel facilities:
                    </div>
                    {props.hotelFacilities.map((facility, index) => (
                        <span key={index}>{(index ? ', ' : "") + facility}</span>
                    ))}
                </div>
                <div className="rating">
                    <Rating
                        initialRating={props.starRating}
                        readonly
                    />
                </div>
                <div className="pricing">
                    <span>£{props.totalPrice}</span> pp
                </div>
            </div>
        </div>
    )
}
export default HolidayhomeItem;