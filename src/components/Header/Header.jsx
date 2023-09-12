import "./Header.css"
import logo from "../../images/logo.png"
import AppContext from "../../AppContext/AppContext"
import { useContext, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from "@mui/material";
function Header() {
    const { isLoggedIn, accountType } = useContext(AppContext)

    //office-menu
    const [officeAnchorEl, setOfficeAnchorEl] = useState(null)
    const isOfficeMenuOpen = Boolean(officeAnchorEl)

    const [mobileAnchorEl, setMobileAnchorEl] = useState(null)
    const isMobileMenuOpen = Boolean(mobileAnchorEl)

    function openOfficeMenu(e) {
        setOfficeAnchorEl(e.currentTarget)
    }
    function closeOfficeMenu() {
        setOfficeAnchorEl(null);
    }

    function openMobileMenu(e) {
        setMobileAnchorEl(e.currentTarget)
    }
    function closeMobileMenu() {
        setMobileAnchorEl(null);
    }
    return (
        <>
            <div className="header">
                <img src={logo} alt="DWM" className="logo" />
                <div className="nav">
                    <a href="/">Home</a>
                    {
                        accountType === "official" &&
                        (
                            // {/* Only office accessible, its a menu consist of different installation methods */}
                            <button className="nav-item" onClick={openOfficeMenu}>Office</button>
                            // consist of view complaints,install dustbin,garbage truck connection,add BBMP office, appoint worker
                        )
                    }
                    <a href="/contact">Contact US</a>
                    <a href="/about">About US</a>


                </div>
                <div className="right-menu-option">
                    {
                        isLoggedIn ?
                            // {/* Only for users who logged in */}
                            <a href="/profile" className="login">Profile</a>
                            :
                            // {/* only when user is not logged in */}
                            <a href="/auth" className="login">Login</a>
                    }

                    <div className="mobile-nav">
                        <IconButton onClick={openMobileMenu}>
                            <MenuIcon sx={{ color: "white", margin: "5px" }} />
                        </IconButton>
                    </div>
                </div>

            </div>

            <div>
                <Menu
                    id="office-menu"
                    anchorEl={officeAnchorEl}
                    open={isOfficeMenuOpen}
                    onClose={closeOfficeMenu}
                >
                    <MenuItem>View Compliants</MenuItem>
                    <MenuItem>Install Dustbin</MenuItem>
                    <MenuItem>Connect Garbage truck</MenuItem>
                    <MenuItem>Add BBMP Office</MenuItem>
                    <MenuItem>Appoint Worker</MenuItem>

                </Menu>
            </div>

            <div>
                <Menu
                    id="mobile-menu"
                    anchorEl={mobileAnchorEl}
                    open={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                >
                    <MenuItem><a href="/">Home</a></MenuItem>
                    <MenuItem><a href="/contact">Contact US</a></MenuItem>
                    <MenuItem> <a href="/about">About US</a></MenuItem>
                    {
                        accountType === "official" &&
                        (
                            // {/* Only office accessible, its a menu consist of different installation methods */}
                            <MenuItem><button className="nav-item" onClick={openOfficeMenu}>Office</button></MenuItem>
                            // consist of view complaints,install dustbin,garbage truck connection,add BBMP office, appoint worker
                        )
                    }
                </Menu>
            </div>
        </>
    )
}

export default Header
