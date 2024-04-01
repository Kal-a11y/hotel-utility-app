export const GET_ITEMS = () => {
    return fetch('/api/stock/items');
}

export const GET_LOCATIONS = () => {
    return fetch('/api/stock/locations');
}
export const ADD_ITEM = (item) => {
    return fetch('/api/stock/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
}