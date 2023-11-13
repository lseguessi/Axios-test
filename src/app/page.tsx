'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login() {
    // const resp = await axios.post('https://localhost:7022/api/Account/login', {
    //   "login": email,
    //   "password": password
    // });

    // console.log(resp.data)

    fetch('https://localhost:7022/api/Account/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "login": email,
        "password": password
      })
    }).then((resp) => {
      console.log(resp)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <label htmlFor="email">E-mail</label>
      <input style={{width: '500px', padding: 10, fontSize: 18}} type="email" name="email" id="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input style={{width: '300px', padding: 10, fontSize: 18}} type="password" name="password" id="password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
      
      <button style={{width: '300px', height: '50px', marginTop: 24, backgroundColor: 'green', color: 'white'}} onClick={login}>Entrar</button>
    </div>
  )
}
