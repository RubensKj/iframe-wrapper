import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';

import { Container, Card } from './styles';
import { getItem, setItem } from '../../utils/storage';
import { useAuth } from '../../contexts/AuthProvider';

const Main: React.FC = () => {
  const { logout } = useAuth();
  const [urlFrame, setUrlFrame] = useState<string | null>(null);

  useEffect(() => {
    const url = getItem('url-iframe');
    setUrlFrame(url);
  }, []);

  const changeUrlFrame = (url: string) => {
    setUrlFrame(url);
    setItem('url-iframe', url);
  }

  const debouncedChangeUrlFrame = useRef(_.debounce(changeUrlFrame, 750)).current;

  return (
    <Container>
      <header>
        <nav>
          <h1>IFrame Wrapper</h1>
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <Card>
        <input onChange={e => debouncedChangeUrlFrame(e.target.value)} defaultValue={urlFrame ? urlFrame : ''} placeholder="Paste the iframe url" />
        <iframe title="IFrame Wrapper" src={urlFrame ? urlFrame : ''} name="frame" scrolling="no" height="450px" width="100%" allow="fullscreen"></iframe>
      </Card>
    </Container>
  );
}

export default Main;