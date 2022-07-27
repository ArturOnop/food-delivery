const SearchOrder = ({setUserEmail}) => {

    return (
        <div className="searchOrders">
            <label>
                <input type="email"
                       className="searchOrder"
                       placeholder="Search order by email"/>
            </label>
            <button className="searchButton" onClick={() => {
                setUserEmail(document.querySelector(".searchOrder").value);
            }}>Search
            </button>
        </div>
    )
}

export default SearchOrder;
