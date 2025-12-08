import Navbar from "../components/Navbar.jsx";

export default function Cartpage() {
    return (
        <>
        <Navbar />
        <div id="cart-container">
            <h2 id="cart-title">Your Shopping Cart</h2>
            <p id="cart-empty-message">Your cart is currently empty.</p>
        </div>
        </>
    );
}