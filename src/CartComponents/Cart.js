import CartItem from "./CartItem";
import Form from "./Form";
import Map from "./Map";

const Cart = () => {

    let cart = JSON.parse(window.localStorage.getItem("cart"));

    return (
        <div className="cartPage">
            <div className="formBoard">
                <Map/>
                <Form cart={cart}/>
            </div>
            <div className="cart">
                {cart[0] ? cart.map((item) => (
                    <CartItem item={item} className="meal" key={item.id}/>
                )) : <div className="choose">No meals yet</div>}
            </div>
        </div>
    );
}

export default Cart;