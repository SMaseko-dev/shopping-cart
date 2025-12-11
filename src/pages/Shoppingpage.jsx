import "./Shoppingpage.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


export default function Shoppingpage() {
    const [productInfo, setProductInfo] = useState([]);

    // Fetch product data from multiple URLs on component mount
    useEffect (() => {
        async function getProducts () {
            const arrayUrls = [
                'https://fakestoreapi.com/products/17',
                'https://fakestoreapi.com/products/18',
                'https://fakestoreapi.com/products/19',
                'https://fakestoreapi.com/products/20'
            ];
            
            try {
                const fetchPromises = arrayUrls.map(url => fetch(url).then(res => res.json()));
                const results = await Promise.all(fetchPromises);
                setProductInfo(results);
                console.log("here are the results", results); 
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        getProducts();
    }, []);
    
    
    // Product component to display individual product details
    function Product({ id = "0000", name = "testproduct", imageUrl ="testpng", price = 0.00 }) {
        const [countProduct, setCountProduct] = useState(0);

        const handleIncrement = () => {
            setCountProduct(prevQuantity => prevQuantity + 1);
        }

        const handleDecrement = () => {
            setCountProduct(prevQuantity => Math.max(0,prevQuantity - 1));
        }

        const handleChange = (event) => {
            setCountProduct(Number(event.target.value));
        }

        //add to cart(local storage)
        function saveToLocalStorage() {
            const item = [
                {
                    id: id,
                    name: name,
                    price: price,
                    quantity: countProduct
                }
            ];

            localStorage.setItem(`cartItem${id}`, JSON.stringify(item));
        }

        return (
            <div className="product-card" key={id}>
                <div id="img-container">
                    <img src={`${imageUrl}`} alt={name} className="product-image"/>
                </div>
                <div id="name-price-container">
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">${price}</p>
                </div>
                <div id="button-quantity-container">
                    <button className="add-to-cart-button" onClick={saveToLocalStorage}>Add to Cart</button>
                    <div id="quantity-btns">
                        <button className="quantity-btn" id="decrease-btn" onClick={handleDecrement}>-</button>
                        <input type="number" name="" className="quantity-input" id={`${name}-quantity`} value={countProduct} onChange={handleChange} />
                        <button className="quantity-btn" id="increase-btn" onClick={handleIncrement}>+</button>
                    </div>
                </div>
            </div>
        );
    }


    // Map through productInfo to create a list of Product components
    const listProducts = productInfo.map((product) => 
        <Product 
            key={product.id}
            id={product.id}
            name={product.title}
            imageUrl={product.image}
            price={product.price}
        />
    )

    return (
        <>
        <Navbar />
        <div id="shopping-container">
            <h2 id="shopping-title">Shop Our Latest Collection</h2>
            <div id="products-container">
                {listProducts <= 0 ? <p className="loading-text">Loading</p> : listProducts}
            </div>
        </div>
        </>
    );
}