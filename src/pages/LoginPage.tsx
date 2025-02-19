import { useState } from "react";
import { useLocation } from "wouter";
import { User } from "../api/types";

function LoginPage() {

  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const [location, navigate] = useLocation();

  const login = async () => {
    const url = "/api/users";
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('it didnt work');
      }

      const users = await res.json();

      const authenticated = evaluateCredentials(users);
      
      if (authenticated) {
        navigate('/');
      } else {
        setError('Username not valid.');
      }
      
    } catch(error: any) {
      setError(error)
    }
  }

  const evaluateCredentials = (users: User[]) => users.find(user => user.username === userName);

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Username" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
      <button type="button" onClick={login}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;
