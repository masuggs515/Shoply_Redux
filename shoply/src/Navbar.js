import './Navbar.css'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { totalQuantity } from "./helpers";

const Navbar = () => {

    const totalItems = useSelector(s => totalQuantity(s.cartItems))

    return (
        <div className='Navbar'>
            <NavLink to='/'>Shoply</NavLink>
            <NavLink to='/cart'>Total Items: {totalItems}</NavLink>
        </div>
    )
}

export default Navbar;