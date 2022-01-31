import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
  Container,
  StyledButton,
} from '../StyledComponents/StyledComponentsList';
import { useTheme } from '../../providers/Theme/Theme.provider';

function Login() {
  const { theme } = useTheme();
  const { loginWithRedirect, logout, user } = useAuth0();

  return (
    <Container toggle={theme} centered>
      {user && (
        <div>
          asd
          <img src={user.picture} alt="Profile" />
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      )}
      <div>
        <StyledButton onClick={() => loginWithRedirect()}>Log In</StyledButton>
        <StyledButton onClick={() => logout()}>Log Out</StyledButton>
      </div>
      <Link to="/notes-list">Click here to see your Notes!</Link>
    </Container>
  );
}

export default Login;
