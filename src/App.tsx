import React, {useState} from 'react';

import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
import LanguageContext from './contexts/languageContext';

function App() {
  const [language, setLanguage] = useState("english")

  const handleChange = (nextValue: string) => {
    setLanguage(nextValue)
  }

  return (
    <div className="container">
      <h3>App, {language}</h3>
      <LanguageSelector handleChange={setLanguage} language={language}/>
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
