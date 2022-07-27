const Order = ({order}) => {

    let orderItems = JSON.parse(order.order);

    return (
        <div className="orderInfo">
            <div className="orderId">
                Order Id: {order.orderId}
            </div>
            <div className="orderMeals">
                {orderItems.map((item) => (
                    <div className="orderMeal" key={item.title}>
                        <img src={item.img}
                             alt="fries"
                             className="mealImg"/>
                        <div className="mealTitle">{item.title}</div>
                        <div className="mealPrice">Amount: {item.amount}</div>
                        <div className="mealPrice">{(item.price * item.amount).toFixed(2)}</div>
                    </div>
                ))}
            </div>
            <div className="orderPrice">
                Total: {order.sum}
            </div>
        </div>
    )
}

export default Order;
