const Nav = ({setComponent}) => {
    return (
        <div className="nav">
            <button onClick={() => setComponent("Shop")}>
                Shop
            </button>
            <button onClick={() => setComponent("Cart")}>
                Cart
            </button>
            <button onClick={() => setComponent("History")}>
                History
            </button>
            <button onClick={() => setComponent("Coupons")}>
                Coupons
            </button>
        </div>
    )
}

export default Nav;
