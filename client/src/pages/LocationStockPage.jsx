import { GET_LOCATIONS } from '../utils/API';
import { useState, useEffect } from 'react';
import StockNavbar from '../components/StockNavbar';

const LocationStockPage = () => {
    const [stockData, setstockData] = useState([]);
    let stockLength;

    useEffect(() => {
        const getLocationData = async () => {
            try {
                const response = await GET_LOCATIONS();
                if (response.ok) {
                    const data = await response.json();
                    stockLength = data.length;
                    console.log("data", data)
                    setstockData(data || []);

                }
            } catch (error) {
                console.log(error)
            }
        };
        getLocationData();
    }, [stockLength]);

    return (
        <>
            <StockNavbar />
            <div>
                <h1>Locations</h1>

                {stockData && stockData.length ?
                    stockData.map(location => {
                        return (
                            <div>
                                <h3 key={location._id} id={location._id}>{location.name}</h3>
                                {location.stock.map(item => {
                                    return (
                                        <p key={item.item._id}>{item.item.name}: {item.count} {item.item.countBy}</p>
                                    )
                                })}

                            </div>

                        )
                    }) : <p>No locations found</p>
                }
            </div>
        </>
    );
}

export default LocationStockPage;