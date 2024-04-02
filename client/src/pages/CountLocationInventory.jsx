import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { COUNT_INVENTORY, GET_ITEMS, GET_SINGLE_LOCATION } from '../utils/API';

const CountLocationInventory = () => {
    const { locationId } = useParams();
    const [formState, setFormState] = useState([]);
    const [itemData, setItemData] = useState(null);
    const [locationTitle, setLocationTitle] = useState('');
    let stockLength;

    useEffect(() => {
        const getItemData = async () => {
            try {
                const response = await GET_ITEMS();
                const data = await response.json();
                setItemData(data || []);
                const stateData = data.map(item => {
                    return { itemId: item._id, count: 0}
                })
                setFormState(stateData || [])
                stockLength = data.length;
            } catch (error) {
                console.error(error);
            }
        };

        const getLocationData = async () => {
            try {
                const response = await GET_SINGLE_LOCATION(locationId);
                const data = await response.json();
                setLocationTitle(data.name);
            } catch (error) {
                console.error(error);
            }
        }

        getItemData();
        getLocationData();
    }, [stockLength]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        const itemIndex = formState.findIndex(item => {
            if (item.itemId === id) {
                return item
            }
        })
        setFormState(prevState => {
            return prevState.map((item, index) => {
                if (index === itemIndex) {
                    return { ...item, count: Number(value) }
                }
                return item
            })
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const cleanedData = formState.filter(item => item.count > 0);
            await COUNT_INVENTORY(cleanedData, locationId);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Count inventory</h1>
            <h2>{locationTitle}</h2>
            {itemData && (
                <form onSubmit={handleFormSubmit}>
                    {itemData.map((item) => (
                        <div key={item._id} id={item}>
                            <label htmlFor={item._id}>{item.name}</label>
                            <input
                                type="number"
                                value={formState.find(formItem => formItem.itemId === item._id).count || ''}
                                id={item._id}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default CountLocationInventory;