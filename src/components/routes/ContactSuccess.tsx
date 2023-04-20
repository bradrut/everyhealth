import React from 'react';
import { Link } from 'react-router-dom'
import { Title } from '@mantine/core';

import './ContactSuccess.css';
import { useRoutingContext } from '../../App';

export default function ContactSuccess() {
  const { setActiveRoute } = useRoutingContext();

  return (
    <div className='contact-success-wrapper'>
      <Title
        order={2}
        size="h1"
        // sx={(theme) => ({ fontFamily: 'Verdana, serif' })}
        weight={500}
        align="center"
        className='contact-success-title'
      >
        Thanks for reaching out!
      </Title>
      <p className='contact-success-subtitle'>We've received your message and will get back to you soon.</p>
      <Link
        key={'contactSuccessReturnHome'}
        to={'/'}
        rel="noopener noreferrer"
        style={{ color: 'white', fontSize: '16px' }}
        onClick={(event: any) => {
          // Update the activeRoute state on the App component. This will re-render this header and ensure
          // that the appropriate activeLink is passed in, so that the UI displays correctly.
          setActiveRoute('');
        }}>
          Return home
      </Link>
    </div>
  );
}
