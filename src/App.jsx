import React from "react";
import Clock from "./components/Clock";
import { LanguageProvider } from "./components/Language";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <div style={{
              backgroundColor: 'pink',
              marginLeft: '35vw',
              marginTop: '-20rem',
              padding: '20px',
            }}>
          <Clock />
        </div>
      </LanguageProvider>
    </>
  );
};

export default App;
