import React, { createContext, useState } from 'react';

// Crear el Contexto de Lenguaje
const LanguageContext = createContext();

// Crear el componente proveedor de LanguageContext
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };