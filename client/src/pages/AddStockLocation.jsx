import React, { useState } from 'react';
import { ADD_LOCATION } from '../utils/API';
import StockNavbar from '../components/StockNavbar';

const AddStockLocation = () => {
    const [locationFormState, setLocationFormState] = useState({ name: '', });

    const handleInputChange = (event) => {
        setLocationFormState({
            ...locationFormState,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const response = await ADD_LOCATION(locationFormState);
        const data = await response.json();
        document.getElementById('status-text').textContent = data.message;
        setLocationFormState({ name: '' });
    };

    return (
        <div>
            <StockNavbar />
            <form onSubmit={handleFormSubmit}>
                <label>
                    Location Name:
                    <input
                        type="text"
                        name="name"
                        value={locationFormState.name}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p id="status-text"></p>
        </div>
    );
};

export default AddStockLocation;