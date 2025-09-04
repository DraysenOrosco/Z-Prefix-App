import React, { useEffect, useState } from 'react';
import InventoryCard from '../components/inventoryCard.jsx';
import NewItemForm from '../components/NewItemForm.jsx';

export default function Inventory({ userId }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        if (userId){
        fetch(`http://localhost:3000/items?user_id=${userId}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
        }
    }, [userId]);
    
    function handleItemAdded(newItem) {
        setItems(previousItems => [...previousItems, newItem])
    }

    if (!userId) return <p>Please Log in to veiw inventory</p>;

    return (
    <div>
        <h1>Inventory Page</h1>
        <NewItemForm userId={userId} onItemAdded={handleItemAdded} />
        <div className='Inventory'>
            {items.map((item) => (
                <InventoryCard key={item.id} item={item} />
            ))}
        </div>
    </div>
    )
}
