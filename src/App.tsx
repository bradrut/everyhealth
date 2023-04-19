import { useState } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router';

import './App.css';
import { HeaderResponsive } from './components/Header';

const HEADER_LINKS = [
  { link: '', label: 'Home' },
  { link: 'about', label: 'About' },
  { link: 'contact', label: 'Contact' },
];

function App() {

  // TODO: Update font family

  /**
     * Set activeRoute based on the current url pathname. This ensures that the active link in the header
     * is accurate even after a hard refresh. 
     */
  const location = useLocation();
  const [ activeRoute, setActiveRoute ] =
    useState<string | undefined>((HEADER_LINKS.find((link) => ('/' + link.link === location.pathname)))?.link);

  return (
    <div className="App App-background-gradient">
      <HeaderResponsive links={HEADER_LINKS} activeLink={ activeRoute } setActiveRoute={ setActiveRoute }></HeaderResponsive>
      <Outlet />
    </div>
  );
}

export default App;
