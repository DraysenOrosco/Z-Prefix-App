import React, { useEffect, useState } from 'react';
import InventoryCard from '../components/inventoryCard.jsx';

export default function Inventory() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then((res) => res.json())
        .then((data) => {
            setItems(data);
        })
    }, [])

    return (
    <div>
        <h1>Inventory Page</h1>
        <div className='Inventory'>
            {items.map((item) => (
                <InventoryCard key={item.id} item={item} />
            ))}
        </div>
    </div>
    )
}
