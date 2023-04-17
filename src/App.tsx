import { Outlet } from 'react-router';

import './App.css';
import { HeaderResponsive } from './components/Header';

const HEADER_LINKS = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
];

function App() {

  // TODO: Update font family

  return (
    <div className="App App-background-gradient">
      <HeaderResponsive links={HEADER_LINKS}></HeaderResponsive>
      <Outlet />
    </div>
  );
}

export default App;
