import "./Cartpage.css"
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";

export default function Cartpage() {
    const [ itemCount, setItemCount ] = useState(0);

    const handleIncrement = () => {
        setItemCount(count => count + 1);
    }

    const handleDecrement = () => {
        setItemCount(count => Math.max(0, count - 1));
    }

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
                            <button type="button" className="btn-quantity" onClick={handleDecrement}>-</button>
                            <div id="quantity-box">
                                <p id="quantity-text">{itemCount ? itemCount: 0}</p> 
                            </div>
                            <button type="button" className="btn-quantity" onClick={handleIncrement}>+</button>
                        </div>
                        <div id="item-total-container">
                            <p id="item-total-text">0</p>
                        </div>
                        <div id="remove-btn-container">
                            <button type="button" >x</button>
                        </div>
                    </div>
                    <div id="order-item">
                        <p id="id-text">01</p>
                        <p id="item-name">testing item long name</p>
                        <div id="quantity-buttons">
                            <button type="button" className="btn-quantity">-</button>
                            <div id="quantity-box">
                                <p id="quantity-text">0</p> 
                            </div>
                            <button type="button" className="btn-quantity">+</button>
                        </div>
                        <div id="item-total-container">
                            <p id="item-total-text">0</p>
                        </div>
                        <div id="remove-btn-container">
                            <button type="button" >x</button>
                        </div>
                    </div>
                    <div id="order-item">
                        <p id="id-text">01</p>
                        <p id="item-name">testing item long name</p>
                        <div id="quantity-buttons">
                            <button type="button" className="btn-quantity">-</button>
                            <div id="quantity-box">
                                <p id="quantity-text">0</p> 
                            </div>
                            <button type="button" className="btn-quantity">+</button>
                        </div>
                        <div id="item-total-container">
                            <p id="item-total-text">0</p>
                        </div>
                        <div id="remove-btn-container">
                            <button type="button" >x</button>
                        </div>
                    </div>
                    <div id="order-item">
                        <p id="id-text">01</p>
                        <p id="item-name">testing item long name</p>
                        <div id="quantity-buttons">
                            <button type="button" className="btn-quantity">-</button>
                            <div id="quantity-box">
                                <p id="quantity-text">0</p> 
                            </div>
                            <button type="button" className="btn-quantity">+</button>
                        </div>
                        <div id="item-total-container">
                            <p id="item-total-text">0</p>
                        </div>
                        <div id="remove-btn-container">
                            <button type="button" >x</button>
                        </div>
                    </div>
                    <div id="border-line"></div>
                    <div id="total-container">
                        <p id="total-quantity-text">Quantity: 0</p>
                        <h3 id="total-text">Total: $0</h3>
                    </div>
                    <div id="border-line"></div>
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