import "./Cartpage.css"
import Navbar from "../components/Navbar.jsx";

export default function Cartpage() {

    function Cart(){
        return (
            <>
            <div id="cart-container">
                <div id="heading-container">
                    <div id="name-container">
                        <h3 id="name-text">Items </h3>
                        <div id="border-line"></div>
                    </div>
                </div>
                <div id="items-container">
                    <div id="order-item">
                        <p id="id-text">01</p>
                        <p id="item-name">testing item long name</p>
                        <div id="quantity-buttons">
                            <button type="button">-</button>
                            <div id="quantity-box">
                                <p id="quantity-text">0</p> 
                            </div>
                            <button type="button">+</button>
                        </div>
                        <div id="item-total-container">
                            <p id="item-total-text">0</p>
                        </div>
                        <div id="remove-btn-container">
                            <button type="button">x</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
        <Navbar />
        <div id="cartpage-container">
            <h2 id="cart-title">Your Shopping Cart</h2>
                <Cart />
        </div>
        </>
    );
}