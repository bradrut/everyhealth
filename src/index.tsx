import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider } from '@mantine/core';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/routes/Home';
import Contact from './components/routes/Contact';
import ContactSuccess from './components/routes/ContactSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />, // TODO!
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        // element: <Homepage />,  // TODO!
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/contact/success',
        element: <ContactSuccess />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
