import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Container } from '../StyledComponents/StyledComponentsList';

function Login() {
  const [email, setEmail] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('email');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));
  });

  return (
    <Container>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="pasword"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="Login" onClick={() => loginWithRedirect()} />
      <Link to="/notes-list">submit</Link>
      <p>Email: {email}</p>
      <p>Email: {password}</p>
    </Container>
  );
}

export default Login;
