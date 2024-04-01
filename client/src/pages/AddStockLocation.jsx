import React, { useState } from 'react';

const AddStockLocation = () => {
    const [locationFormState, setLocationFormState] = useState({name: '',});

    const handleInputChange = (event) => {
        setLocationFormState({
            ...locationFormState,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(locationFormState.name);
    };

    return (
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
    );
};

export default AddStockLocation;