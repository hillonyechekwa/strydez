
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"


const Nav = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Products</li>
            </ul>
        </nav>
    )
}


export default Nav
