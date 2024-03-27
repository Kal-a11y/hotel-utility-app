export const GET_ITEMS = () => {
    return fetch('/api/stock/items');
}

export const GET_LOCATIONS = () => {
    return fetch('/api/stock/locations');
}