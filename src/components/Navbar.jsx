import "./Navbar.css";
import { ShoppingBag, House } from 'lucide-react';

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
                        <a href="#" className="nav-link"><House color="black" size={15} /> HOME</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">SHOP</a>
                    </li>
                    <li>
                        <p id="cart-total">0</p>
                        <a href="#" className="nav-link">CART</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}