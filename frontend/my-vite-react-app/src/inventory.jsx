import React, { useEffect, useState } from 'react';
import InventoryCard from '../components/inventoryCard.jsx';
import NewItemForm from '../components/NewItemForm.jsx';

export default function Inventory({ userId }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = userId ?
        `http://localhost:3000/items?user_id=${userId}` :'http://localhost:3000/items';
            fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, [userId]);
    
    function handleItemAdded(newItem) {
        setItems(previousItems => [...previousItems, newItem])
    }

    const canAddItems = Boolean(userId)

    return (
    <div>
        <h1>Inventory Page</h1>
        {canAddItems && (
        <NewItemForm userId={userId} onItemAdded={handleItemAdded} />
        )}
        <div className='Inventory'>
            {items.length === 0 ? (
            <p>No items found...</p>
            ) : (
            items.map((item) => (
                <InventoryCard key={item.id} item={item} />
            ))
            )}
        </div>
    </div>
    )
}
