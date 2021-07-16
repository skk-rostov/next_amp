import { useState} from 'react'
import jwt from 'jsonwebtoken'
import Link from 'next/link'

export default function Login(req, res) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('Вы не залогинены');
    const [secret, setSecret] = useState('')

    async function submitForm() {
        

        const token = res.token

        if(token) {
            const json = jwt.decode(token)
            setMessage(`Добро пожаловать ${json.username} и вы ${json.admin ? 'администратор' : 'не администратор'}` )
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            }).then((t)=> t.json())
        }else{
            setMessage('Возникли проблемы')
        }
    }

    return(
        <div>
            <h2>{message}</h2>
            <Link href="/news/secret">
                <a>Секретная зона(после логина)</a>
            </Link>
            <br />
            <form>
                <input type="text" 
                name="username" 
                value={username} 
                onChange={e=>{setUsername(e.target.value)}} 
                />
                <br />
                <input type="text" 
                name="password" 
                value={password} 
                onChange={e=>{setPassword(e.target.value)}} 
                />
                <br />
                <input type="button" onClick={submitForm} value="Login" />
            </form>
        </div>
    )
}