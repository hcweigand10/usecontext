import React from 'react';

import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <div className="container">
      <h3>App</h3>
      <LanguageSelector />
      <UserCreate />
    </div>
  );
}

export default App;
