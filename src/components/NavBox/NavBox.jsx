import NavBoxItem from "./NavBoxItem"

import complaint from "../../images/complaint.jpg"
import google_map_logo from "../../images/google_map_logo.jpeg"
function NavBox() {
    return (
        <div className="nav-boxes">
            <NavBoxItem imgSrc={complaint} title="Register Your Complaint Here" />
            <NavBoxItem imgSrc={google_map_logo} title="Find Nearest Dustbins,Garbage Trucks and Offices" />
\        </div>
    )
}

export default NavBox;
