import { ADD_ITEM } from "../utils/API";
import { useState } from "react";
const AddStockItem = () => {
    const [itemFormState, setItemFormState] = useState({name: '', countBy: '', minCount: ''});
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!itemFormState.countBy){
            setItemFormState({...itemFormState, countBy: 'boxes'})
        }
        const response = await ADD_ITEM(itemFormState)
        const testItem = await response.json();

        document.getElementById('status-text').textContent = testItem.message;

        setItemFormState({name: '', countBy: '', minCount: ''});
        
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemFormState({ ...itemFormState, [name]: value });
    };
    return (
        <div>
            <h1>Add Stock Item</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Item name:</label>
                <input required type="text" id="name" name="name" onChange={handleInputChange} value={itemFormState.name} />
                <label htmlFor="countBy">Count By:</label>
                <input type="text" id="countBy" name="countBy" onChange={handleInputChange} value={itemFormState.countBy} />
                <label htmlFor="minCount">Minimum Count:</label>
                <input required type="number" id="minCount" name="minCount" onChange={handleInputChange} value={itemFormState.minCount}/>
                <button type="submit">Add Item</button>
            </form>
            <p id="status-text"></p>
        </div>
    );
};

export default AddStockItem;