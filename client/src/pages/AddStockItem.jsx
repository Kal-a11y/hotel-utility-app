import { ADD_ITEM } from "../utils/API";
import { useState } from "react";
const AddStockItem = () => {
    return (
        <div>
            <h1>Add Stock Item</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="countBy">Count By:</label>
                <input type="text" id="countBy" name="countBy" />
                <label htmlFor="minCount">Minimum Count:</label>
                <input type="number" id="minCount" name="minCount" />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddStockItem;