import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
    const[userId, setUserId] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        onLogin(parseInt(userId));

        navigate('/inventory')
    }
    return(
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
        type='number'
        placeholder='User ID'
        value={userId}
        onChange={(event) => setUserId(event.target.value)}
        required 
        />
        <button type='submit'>Log In</button>
        </form>
    )
}