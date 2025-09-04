import { Link } from 'react-router-dom';
export default function InventoryCard({ item }) {
    const { id, name, description, quantity } = item;

    return (
    <div>
        <h2><strong>Item: </strong>{name}</h2>
        <p>Description: {description}</p>
        <p>Quantity {quantity}</p>
    </div>
    )
}
