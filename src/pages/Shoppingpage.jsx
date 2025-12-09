import "./Shoppingpage.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const productsInfo = [
    {
        id: 1,
        name: "sweatshirt",
        imageUrl: "src/assets/clothes/Clothes/077f7ef8b641a723cb7b559914a4dfaa (1).jpg",
        price: 299.99
    },
    {
        id: 2,
        name: "pants",
        imageUrl: "src/assets/clothes/Clothes/1ff48997f48d80d1af1f0e314be41c29.jpg",
        price: 399.99
    },
    {
        id: 3,
        name: "hat",
        imageUrl: "src/assets/clothes/Clothes/a415617218dc5273f8c2260d905cecd0.jpg",
        price: 249.99
    },
    {
        id: 4,
        name: "shoes",
        imageUrl: "src/assets/clothes/Clothes/992176e775eb7b233eec0de1ded5e633.jpg",
        price: 499.99
    },
]

const exampleList = [];

async function getProducts () {
    const productIds = [ 17, 18, 19 ,20];
    
    for(const id of productIds) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            console.log(result);
            const listExample = [result];
            exampleList.push(result)

        } catch (error) {
            console.error(error.message);
        }
    }
    //console.log(exampleList)
}

function Product({ id = "0000", name = "testproduct", imageUrl ="testpng", price = 0.00 }) {
    const [countProduct, setCountProduct] = useState(0);

    const handleIncrement = () => {
        setCountProduct(prevQuantity => prevQuantity + 1);
    }

    const handleDecrement = () => {
        setCountProduct(prevQuantity => prevQuantity - 1);
    }

    const handleChange = (event) => {
        setCountProduct(Number(event.target.value));
    }

    return (
        <div className="product-card" key={id}>
            <div id="img-container">
                <img src={`${imageUrl}`} alt={name} className="product-image"/>
            </div>
            <div id="name-price-container">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">R{price}</p>
            </div>
            <div id="button-quantity-container">
                <button className="add-to-cart-button">Add to Cart</button>
                <div id="quantity-btns">
                    <button className="quantity-btn" id="decrease-btn" onClick={handleDecrement}>-</button>
                    <input type="number" name="" className="quantity-input" id={`${name}-quantity`} value={countProduct} onChange={handleChange} />
                    <button className="quantity-btn" id="increase-btn" onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    );
}

const listProducts = productsInfo.map((product) => 
    <Product 
        key={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        price={product.price}
    />
)



export default function Shoppingpage() {
    useEffect(() => {
    getProducts()
    }, [])
    console.log(exampleList)

    return (
        <>
        <Navbar />
        <div id="shopping-container">
            <h2 id="shopping-title">Shop Our Latest Collection</h2>
            <div id="products-container">
                {listProducts ? listProducts : <p>Loading products</p> }
            </div>
        </div>
        </>
    );
}