import { useState } from 'react';
import { Outlet, useLocation, useOutletContext } from 'react-router-dom';

import './App.css';
import { HeaderResponsive } from './components/Header';
import { HEADER_LINKS } from './common/constants';

type RoutingContextType = {
  activeRoute: string | undefined,
  setActiveRoute: Function,
};

export function useRoutingContext() {
  return useOutletContext<RoutingContextType>();
}

export default function App() {

  // TODO: Update font family

  /**
   * Set activeRoute based on the current url pathname. This ensures that the active link in the header
   * is accurate even after a hard refresh. 
   */
  const location = useLocation();
  const [ activeRoute, setActiveRoute ] =
    useState<string | undefined>((HEADER_LINKS.find((link) => ('/' + link.link === location.pathname)))?.link);

  return (
    <div className='App-container'>
      <div className='App-background-gradient'></div>
      <div className="App-content">
        <HeaderResponsive links={HEADER_LINKS} activeLink={ activeRoute } setActiveRoute={ setActiveRoute }></HeaderResponsive>
        <Outlet context={{ activeRoute, setActiveRoute }}/>
      </div>
    </div>
  );
}
