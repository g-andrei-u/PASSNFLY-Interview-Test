import React, { useState } from 'react';
import '../Style/Style.css';
import { useNavigate } from 'react-router-dom';
import { sendData } from './API.jsx';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleLogIn = async () => {

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Incorrect Email');
            return;

        } else

        if (password.length < 6) {
            alert('The password needs to have at least 5 caracters');
            return;

        } else if ( password.toLocaleLowerCase().search('[a-z]') < 0) {
            alert ('The password must have at least one letter');
            return;

        } else if ( password.search('[1-9]') < 0) {

            alert ('The password must have at least one number');
            return;
        }

        setIsLoading(true);
        await new Promise(rezolve => setTimeout(rezolve, 5000))
        sendData(email, password);
        setIsLoading(false);
        navigate('/success');
    };


    return (
        <div className='center'>
            <h1>LogIn Please</h1>
            <input type='email' value={email} placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' value={password} placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogIn}>Submit</button>
            {isLoading && <p>Loading...</p>}
        </div>
    )
}