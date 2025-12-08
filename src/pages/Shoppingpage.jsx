import "./Shoppingpage.css";
import Navbar from "../components/Navbar";

function Product({ id = "0000", name = "testproduct", imageId ="testpng", price = "00.00" }) {
    return (
        <div className="product-card" key={id}>
            <div id="img-container">
                <img src={`${imageId}`} alt={name} className="product-image"/>
            </div>
            <div id="name-price-container">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price}</p>
            </div>
            <div id="button-quantity-container">
                <button className="add-to-cart-button">Add to Cart</button>
                <input type="number" name="" id="quantity-input" />
            </div>
        </div>
    );
}


export default function Shoppingpage() {
    return (
        <>
        <Navbar />
        <div id="shopping-container">
            <h2 id="shopping-title">Shop Our Latest Collection</h2>
            <div id="products-container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
        </>
    );
}