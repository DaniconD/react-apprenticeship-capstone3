import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../StyledComponents/StyledComponentsList';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <Link to="/notes">submit</Link>
      <p>Email: {email}</p>
      <p>Email: {password}</p>
    </Container>
  );
}

export default Login;
