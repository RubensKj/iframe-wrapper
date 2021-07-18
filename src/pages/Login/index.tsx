import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

import { Container, Card } from './styles';

const Login: React.FC = () => {
  const history = useHistory();
  const { login, signed } = useAuth();
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const loginInApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordInput) {
      setError('Password cannot be null');
      return;
    }

    login(passwordInput);
  };

  if (signed) {
    history.push('/');
  }

  return (
    <Container>
      <Card>
        <header>
          <span>Login</span>
          {error ? <p>{error}</p> : ''}
        </header>
        <form onSubmit={e => loginInApp(e)}>
          <input onChange={e => setPasswordInput(e.target.value)} placeholder="Paste the password" />
          <button type="submit">Login</button>
        </form>
      </Card>
    </Container>
  );
}

export default Login;