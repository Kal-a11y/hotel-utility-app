import { useParams } from "react-router-dom";
const StockNavbar = () => {
    const { stockCategory } = useParams();
    return (
        <>
            <button>Locations</button>
            <button>Items</button>
            {stockCategory === 'items' ? (
                <button>Add Item</button>
            ) : (
                <button>Add Location</button>
            )}

        </>
    );
}

export default StockNavbar;