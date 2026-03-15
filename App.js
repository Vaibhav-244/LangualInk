import { useEffect, useState } from 'react';
import TranslationInterface from './components/TranslationInterface';
import './styles.css';

const WELCOME_DURATION = 6000;

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), WELCOME_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-root">
      {showWelcome ? <WelcomeScreen /> : <TranslationInterface />}
    </div>
  );
}

function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-message">Welcome to LinguaLink</div>
      <div className="welcome-animation">
        <div className="orb orb-left" />
        <div className="connector">
          <span className="pulse" />
          <span className="pulse delay" />
        </div>
        <div className="orb orb-right" />
      </div>
    </div>
  );
}

export default App;

