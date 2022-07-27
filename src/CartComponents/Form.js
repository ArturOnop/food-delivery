import {useEffect, useState} from "react";
import makeId from "./IdMaker";
import axios from "axios";

const Form = () => {

    let cart = JSON.parse(window.localStorage.getItem("cart"));

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7777/coupons", {
            headers: {"Content-Type": "application/json"}
        }).then((res) => setCoupons(res.data));
    }, [])

    const [user, setUser] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            order: cart,
            coupon: "",
            sum: cart.reduce((acc, val) => acc + (val.amount * val.price), 0),
            orderId: makeId()
        }
    );
    const [submitted, setSubmitted] = useState(false);
    const [discount, setDiscount] = useState(0);

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        cart = JSON.parse(window.localStorage.getItem("cart"));

        let totalSum = cart.reduce((acc, val) => acc + (val.amount * val.price), 0).toFixed(2)

        setUser({
            ...user,
            [name]: value,
            sum: discount !== 0 ? (totalSum - (totalSum * discount)).toFixed(2) : totalSum
        });
    }

    const handleCoupon = (evt) => {
        const value = evt.target.value;
        let checkCoupon = coupons.filter((coupon) => coupon.code === value)[0];

        if (checkCoupon) {
            setUser({
                ...user,
                coupon: value,
                sum: (user.sum - (user.sum * (checkCoupon.discount * 0.01))).toFixed(2)
            });
            setDiscount(checkCoupon.discount * 0.01);
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setSubmitted(true);
        axios.post("http://localhost:7777/orders",
            {...user, order: JSON.stringify(cart)},
            {headers: {"Content-Type": "application/json"}})
            .catch(() => {
            });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {submitted ? <div className="successOrder">Ordered successfully!</div> : null}
            <label>
                <input required type="text" name="name" placeholder="Name"
                       value={user.name} onChange={handleChange}/>
            </label>
            <label>
                <input required type="email" name="email" placeholder="Email"
                       value={user.email} onChange={handleChange}/>
            </label>
            <label>
                <input required type="text" name="phone" placeholder="Phone"
                       value={user.phone} onChange={handleChange}/>
            </label>
            <label>
                <input required type="text" name="address" placeholder="Address"
                       value={user.address} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="coupon" placeholder="Coupon"
                       value={user.coupon} onChange={handleCoupon}/>
            </label>
            <label>
                Total:
                <input type="text" name="orderId" readOnly value={user.sum}/>
            </label>
            <label>
                Order id:
                <input type="text" name="orderId" readOnly value={user.orderId}/>
            </label>
            <input type="submit" value="Submit" className="formSubmit"/>
        </form>
    );
}

export default Form;
