const Shops = ({shops, setSelectedShop}) => {

    return (
        <div className="shops">
            <h2 className="shopsTitle">Shops</h2>
            <div className="shopsList">
                {shops.map((shop) => (
                    <button key={shop.title} onClick={() => setSelectedShop(shop.title)}>
                        {shop.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Shops;
