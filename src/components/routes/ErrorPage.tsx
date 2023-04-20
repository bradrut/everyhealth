import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { Title } from '@mantine/core';

import { useRoutingContext } from "../../App";
import './ErrorPage.css';

export default function ErrorPage() {
  const error: any = useRouteError();
  // const { setActiveRoute } = useRoutingContext();
  console.error(error);

  return (
    <div className='error-page-wrapper'>
      <Title
        order={2}
        size="h1"
        // sx={(theme) => ({ fontFamily: 'Verdana, serif' })}
        weight={500}
        align="center"
        className='contact-success-title'
      >
        Oops!
      </Title>
      <p className='error-page-subtitle'>This page doesn't exist.</p>
      <Link
        key={'contactSuccessReturnHome'}
        to={'/'}
        rel="noopener noreferrer"
        style={{ color: 'white', fontSize: '16px' }}
        onClick={(event: any) => {
          // Update the activeRoute state on the App component. This will re-render this header and ensure
          // that the appropriate activeLink is passed in, so that the UI displays correctly.
          // setActiveRoute('');
        }}>
          Return home
      </Link>
    </div>
  );
}
