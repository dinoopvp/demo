import logo from "../../assets/images/virgin-holidays-logo-2017.jpg"
import "./Header.css"
function HeaderComponent(){
    return(
        <div className="logo">
            <img style = {{"width":"100%"}}src={logo} />
        </div>
    )
}
export default HeaderComponent;