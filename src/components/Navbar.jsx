import "./Navbar.css";
import { ShoppingBag, House, Shirt, ShoppingCart } from 'lucide-react';
import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
        <div id="navbar-container">
            <div id="logo-container">
                <ShoppingBag  color="black" size={20} />
                <p id="logo-title">SHOPSMART</p>
            </div>
            <div id="links-container">
                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            <House color="black" size={15} id="navbar-logo" />
                            <p id="navbar-title">
                                HOME
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoppingpage" className="nav-link">
                            <Shirt color="black" size={15} id="navbar-logo" />
                            <p id="navbar-title">
                                SHOP
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cartpage" className="nav-link">
                            <ShoppingCart color="black" size={15} id="navbar-logo" />
                            <p id="cart-total">0</p>
                            <p id="navbar-title">
                                CART
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}