import React from "react";
import { useState } from "react";
import { useLocation } from "wouter";
import { evaluateCredentials } from "../utils/utils";

const LoginPage: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [location, navigate] = useLocation();

  const login = async () => {
    const url = "/api/users";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const users = await res.json();

      const authenticated = evaluateCredentials(users, userName);
      
      if (authenticated) {
        navigate(`/${userName}`);
      } else {
        setError('Username not valid.');
      }
      
    } catch(error) {
      setError(error as string)
    }
  }

  return (
    <div style={{width: '60vw', height: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Login</h1>
      <form action={login} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <input style={{padding: 10, borderRadius: 20, fontSize: 16}} placeholder="Username" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
      <button style={{padding: 10, fontSize: 16}} type="submit">Submit</button>
      </form>
      {error && <p style={{color: '#d20'}}>{error}</p>}
    </div>
  );
}

export default LoginPage;
