import { ADD_ITEM } from "../utils/API";
import { useState } from "react";
const AddStockItem = () => {
    const [itemFormState, setItemFormState] = useState({name: '', countBy: '', minCount: ''});
   
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItemFormState({ ...itemFormState, [name]: value });
    };
    return (
        <div>
            <h1>Add Stock Item</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleInputChange} />
                <label htmlFor="countBy">Count By:</label>
                <input type="text" id="countBy" name="countBy" onChange={handleInputChange} />
                <label htmlFor="minCount">Minimum Count:</label>
                <input type="number" id="minCount" name="minCount" onChange={handleInputChange} />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddStockItem;