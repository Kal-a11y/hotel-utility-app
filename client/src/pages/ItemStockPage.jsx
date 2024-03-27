import { GET_ITEMS } from '../utils/API';
import { useState, useEffect } from 'react';
import StockNavbar from '../components/StockNavbar';

const ItemStockPage = () => {
    const [stockData, setstockData] = useState([]);
    let stockLength;

    useEffect(() => {
       const getItemData = async () => {
        try {
            const response = await GET_ITEMS();
            if (response.ok) {
                const data = await response.json();
                stockLength = data.length;
                setstockData(data);
                
            }
        } catch (error) {
            console.log(error)
        }
       };
         getItemData();
    },[stockLength]);

    const orderStatus = ({totalCount, minCount}) => {
        if (totalCount <= minCount || !totalCount) {
            return " ❗ Order More ❗"
        }
        console.log("totalCount",totalCount, minCount)
    }

    return (
        <>
            <StockNavbar />
                <div>
                    <h1>Items</h1>
    
                    {stockData.map(item => {
                        return (
                        <div key={item._id}>
                            <h3>{item.name}: {item.totalCount || 0} {item.countBy} left {orderStatus(item)}</h3>
                            <p>Locations:</p>
                            {item.locations.map(location => {
                                if (location.count > 0) {
                                    return (
                                        <p key={location._id}>{location.name}: {location.count} {item.countBy}</p>
                                    )
                                }
                            })}
                        </div>
    
                    )})}

                </div>
        </>
    );
}

export default ItemStockPage;