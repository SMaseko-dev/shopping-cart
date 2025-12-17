import Navbar from "../components/Navbar";
import "./Homepage.css";

export default function Homepage() {
    return (
        <>
        <Navbar />
        <div id="container" data-testid="container">
            <div id="brand-container">
                <div id="slogan-container">
                    <div id="text-container">
                        <h3 id="slogan-title">Welcome to ShopSmart</h3>
                        <p id="slogan-subtitle">Your one-stop shop for all your fashion needs!</p>
                    </div>
                </div>
                <div id="image-container">
                    <img src="\undraw_window-shopping_9l2k.png" alt="Fashion" id="slogan-image"/>
                </div>
            </div>
        </div>
        </>
    );
}