import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    
        fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{'Content-Type': 'application/json', },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Invalid Login')
        }
        return response.json();
    })
    .then(data =>{
        onLogin(data.userId);
        navigate('/inventory');
    })
    .catch(() => {
        alert('Login failed check username/password')
    });
}


    return(
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input 
        type='text'
        placeholder='Username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required />
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required/>
        <button type='submit'>Log In</button>
        </form>
    )
}