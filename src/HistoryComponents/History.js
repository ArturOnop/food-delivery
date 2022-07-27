import Order from "./Order";
import SearchOrder from "./SearchOrder";
import {useEffect, useState} from "react";
import axios from "axios";

const History = () => {

    const [userEmail, setUserEmail] = useState("");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (userEmail) {
            axios.get(`http://localhost:7777/orders/${userEmail}`, {
                headers: {"Content-Type": "application/json"}
            }).then((res) => setOrders(res.data));
        }
    }, [userEmail])

    return (
        <div className="history">
            <SearchOrder userEmail={userEmail} setUserEmail={setUserEmail}/>
            <div className="userOrders">
                {orders[0] ? orders.map((order) => (
                    <Order order={order} key={order.orderId}/>
                )) : <div className="choose">No such order</div>}
            </div>
        </div>
    )
}

export default History;