import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from './Language'; // Asegúrate de importar desde el archivo correcto

const Clock = () => {
  const { language } = useContext(LanguageContext);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getCurrentTimeMessage = () => {
    switch (language) {
      case 'fr':
        return 'Heure actuelle';
      case 'en':
        return 'Current Time';
      case 'es':
        return 'Hora actual';
      default:
        return 'Current Time';
    }
  };

  return (
    <div>
      <h2>{getCurrentTimeMessage()}: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
