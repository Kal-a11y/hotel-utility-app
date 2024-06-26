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
export const ADD_LOCATION = (location) => {
    return fetch('/api/stock/locations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
    });
}

export const GET_SINGLE_LOCATION = (locationId) => {
    return fetch(`/api/stock/location/${locationId}`);
}

export const COUNT_INVENTORY = (stock, locationId) => {
    return fetch(`/api/stock/location/${locationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({stock})
    });
}