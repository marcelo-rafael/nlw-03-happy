import React from 'react';

import 'leaflet/dist/leaflet.css';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
