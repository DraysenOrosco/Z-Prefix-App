import { useState } from 'react';

export default function NewItem ({ userId, onItemAdded }) {
    const [itemData, setItemData] = useState({
        name: '', 
        description: '',
        quantity: ''
    });
    function handleInputChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setItemData(function(oldItemData) {
            return{
                ...oldItemData,
                [inputName]: inputValue 
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const quantityValue = parseInt(itemData.quantity);
        const newItem = {
            ...itemData,
            quantity:isNaN(quantityValue) ? 0 : quantityValue,
            user_id: userId
        };

        fetch('http://localhost:3000/items', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem),
        })
        .then(response => response.json())
        .then(addedItem => {
            onItemAdded(addedItem);
            setItemData({ name: '', description: '', quantity: '' })
        })
        }
        return(
            <form onSubmit={handleSubmit}>
                <h2>Add New Inventory Item</h2>

                <input
                name="name"
                value={itemData.name}
                onChange={handleInputChange}
                placeholder='item name'
                required />

<input
                name="description"
                value={itemData.description}
                onChange={handleInputChange}
                placeholder='Description'
                required />

<input
                name="quantity"
                value={itemData.quantity}
                onChange={handleInputChange}
                placeholder='Quantity'
                required />

                <button type='submit'>Add Item</button>
            </form>
        )
    }
