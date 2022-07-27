import Coupon from "./Coupon";
import {useEffect, useState} from "react";
import axios from "axios";

const Coupons = () => {

    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7777/coupons", {
            headers: {"Content-Type": "application/json"}
        }).then((res) => setCoupons(res.data));
    }, [])

    return (
        <div className="couponList">
            {coupons[0] ? coupons.map((coupon) => (
                <Coupon coupon={coupon} key={coupon.code}/>
            )) : <div className="choose">No coupons available</div>}
        </div>
    )
}

export default Coupons;
