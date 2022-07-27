import {useEffect, useState} from "react";
import {CartContext} from "../App";
import {useContext} from "react";

const CartItem = ({item}) => {
    const setCartItems = useContext(CartContext);

    const [amount, setAmount] = useState(1);

    useEffect(() => {
        setAmount(item.amount);
    }, []);

    useEffect(() => {
        setCartItems(prevMeals => {
            let mealExists = prevMeals.filter(m => m.id === item.id)[0];
            if (mealExists && amount > 0) {
                mealExists.amount = amount;
                return prevMeals.map(obj => [mealExists].find(o => o.id === obj.id) || obj);
            } else if (mealExists && amount === 0) {
                return prevMeals.filter(obj => obj.id !== mealExists.id);
            }
        });
    }, [amount])

    return (
        <>
            {amount > 0 ?
                (
                    <div className="meal">
                        <img src={item.img}
                             alt="fries"
                             className="mealImg"/>
                        <div className="mealTitle">{item.title}</div>
                        <div className="mealPrice">{(item.price * amount).toFixed(2)}</div>
                        <div className="amountBlock">
                            <button onClick={() => setAmount(prevAmount => prevAmount + 1)}>+</button>
                            <div>{amount}</div>
                            <button onClick={() => setAmount(prevAmount => prevAmount - 1)}>-</button>
                        </div>

                    </div>
                ) : ""
            }
        </>
    )
}

export default CartItem;
