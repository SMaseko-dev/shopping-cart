import "./Navbar.css";
import { ShoppingBag, House, Shirt, ShoppingCart } from 'lucide-react';
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [cartQuantity, setCartQuantity] = useState(0)

    useEffect(() => {
        const updateCartQuantity = () => {
            const storedCart =
                JSON.parse(localStorage.getItem("cartItems")) || [];

            const totalQuantity = storedCart.reduce(
                (sum, item) => sum + item.quantity,
                0
            );

            setCartQuantity(totalQuantity);
        };
        
        
        // initial load
        updateCartQuantity();

        // listen for cart changes (from other pages)
        //window.addEventListener("storage", updateCartQuantity);
        window.addEventListener("click", updateCartQuantity)

        return () => {
            //window.removeEventListener("storage", updateCartQuantity);
            window.removeEventListener("click", updateCartQuantity)
        };
    }, []);
    

    return (
        <>
        <div id="navbar-container" data-testid="navbar-container">
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
                            <p id="navbar-title">
                                CART {cartQuantity === 0 ? "": cartQuantity}
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}