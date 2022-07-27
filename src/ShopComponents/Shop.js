import Shops from "./Shops";
import Meals from "./Meals";
import {useEffect, useState} from "react";
import axios from "axios";

const Shop = ({cartItems}) => {
    const [selectedShop, setSelectedShop] = useState();
    const [shops, setShops] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7777/shops", {
            headers: {"Content-Type": "application/json"}
        }).then((res) => setShops(res.data));
    }, [])

    if (!cartItems[0]) window.localStorage.removeItem("shop");
    let currentShop = window.localStorage.getItem("shop");

    return (
        <div className="shopPage">
            {currentShop ? <Shops shops={shops.filter((shop) => currentShop === shop.title)}
                                  setSelectedShop={setSelectedShop}/> :
                <Shops shops={shops} setSelectedShop={setSelectedShop}/>}
            {selectedShop ? (
                    <Meals selectedShop={shops.filter((shop) => selectedShop === shop.title)[0]}/>) :
                <div className="choose">Choose shop</div>}
        </div>
    );
}

export default Shop;