import {useState} from "react";

const Coupon = ({coupon}) => {

    const [copied, setCopied] = useState(false);

    const copyCoupon = () => {
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
    }

    return (
        <div className="coupon">
            <img src={coupon.img}
                 alt="coupon"
                 className="couponTitle"/>
            <div className="couponTitle">
                {coupon.title}
            </div>
            <div className="couponDiscount">
                - {coupon.discount} %
            </div>
            <button onClick={copyCoupon}>
                {coupon.code}
            </button>
            {copied ? <div className="copied">Copied!</div> : null}
        </div>
    )
}

export default Coupon;

