import Shop from "./ShopComponents/Shop";
import Cart from "./CartComponents/Cart";
import History from "./HistoryComponents/History"
import Coupons from "./CouponsComponents/Coupons"
import Nav from "./Nav";
import {useState, createContext, useEffect} from "react";

export const CartContext = createContext();

function App() {
    const [component, setComponent] = useState("Shop");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cartItems));
    })

    return (
        <CartContext.Provider value={setCartItems}>
            <Nav setComponent={setComponent}/>
            {component === "Shop" ?
                (<Shop cartItems={cartItems}/>) :
                component === "Cart" ? (<Cart/>) :
                    component === "History" ? (<History/>) : <Coupons/>
            }
        </CartContext.Provider>
    );
}

export default App;
