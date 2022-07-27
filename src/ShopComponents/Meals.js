import {useContext} from "react";
import {CartContext} from "../App";

const Meals = ({selectedShop}) => {

    const setCartItems = useContext(CartContext);

    let click = (meal) => {
        setCartItems(prevMeals => {
            let mealExists = prevMeals.filter(m => m.id === meal.id)[0];
            if (mealExists) {
                mealExists.amount += 1;
                return prevMeals.map(obj => [mealExists].find(o => o.id === obj.id) || obj);
            }
            meal.amount = 1;
            return [...prevMeals, meal]
        });
        window.localStorage.setItem("shop", selectedShop.title)
    }

    return (
        <div className="mealsList">
            {selectedShop.meals.map((meal) => (
                <div className="meal" key={meal.title}>
                    <img src={meal.img}
                         alt="meal"
                         className="mealImg"/>
                    <div className="mealTitle">{meal.title}</div>
                    <div className="mealPrice">{meal.price}</div>
                    <button onClick={() => click(meal)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )

}

export default Meals;