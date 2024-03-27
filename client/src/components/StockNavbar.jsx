import { useLocation, useNavigate } from "react-router-dom";

const StockNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    return (
        <>
            <button onClick={() => navigate('/stock/locations')}>Locations</button>
            <button onClick={() => navigate('/stock/items')}>Items</button>
            {location.pathname == '/stock/items' && (
                <button onClick={() => navigate('/stock/addItem')}>Add Item</button>
            ) }
            {location.pathname == '/stock/locations' &&(
                <button onClick={() => navigate('/stock/addLocation')}>Add Location</button>
            )}

        </>
    );
}

export default StockNavbar;