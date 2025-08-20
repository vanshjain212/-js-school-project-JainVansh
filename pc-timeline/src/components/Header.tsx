import logo from '../assets/logo.svg';

export const Header = ({ toggleTheme }: { toggleTheme: () => void }) => (
  <header>
    <img src={logo} alt="App Logo" />
    <h3>PC History Timeline</h3>
    <button onClick={toggleTheme}>🌓</button>
  </header>
);
