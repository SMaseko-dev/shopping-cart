import "./Cartpage.css"
import Navbar from "../components/Navbar.jsx";
import { useState, useEffect } from "react";

export default function Cartpage() {
    const handleIncrement = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    const handleDecrement = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };

    // Remove item
    const handleRemove = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    };
    
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCart);
    }, []);

        const displayList = cartItems.map((item) => {
            return (
            <div id="order-item" key={item.id}>
                <p id="id-text">{item.id}</p>
                <p id="item-name">{item.name}</p>
                <div id="quantity-buttons">
                    <button type="button" className="btn-quantity" onClick={() => handleDecrement(item.id)}>-</button>
                    <div id="quantity-box">
                        <p id="quantity-text">{item.quantity}</p> 
                    </div>
                    <button type="button" className="btn-quantity" onClick={() => handleIncrement(item.id)}>+</button>
                </div>
                <div id="item-total-container">
                    <p id="item-total-text">R{Math.floor((item.price * item.quantity) * 100) / 100}</p>
                </div>
                <div id="remove-btn-container">
                    <button type="button" onClick={() => handleRemove(item.id)} >x</button>
                </div>
            </div>
            )
        })


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

                    {cartItems.length === 0 && <p id="shopping-cart-empty-txt">Your shopping cart is empty</p>}
                    {displayList}
                    <div id="border-line"></div>
                    <div id="total-container">
                        <p id="total-quantity-text">Quantity:{" "}
                                {cartItems.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0
                                )}</p>
                        <h3 id="total-text">Total:{cartItems.reduce(
                                    (sum, item) =>
                                        Math.floor((sum + item.price * item.quantity) * 100) / 100,
                                    0
                                )}</h3>
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