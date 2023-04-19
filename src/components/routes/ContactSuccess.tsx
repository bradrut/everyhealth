import React from 'react';

import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import './ContactSuccess.css';

export default function ContactSuccess() {

  return (
    <div className='contact-success-wrapper'>
      <Title
        order={2}
        size="h1"
        // sx={(theme) => ({ fontFamily: 'Verdana, serif' })}
        weight={900}
        align="center"
        className='contact-form-title contact-form-heading'
      >
        Success!
      </Title>
      <p className='contact-form-subtitle contact-form-heading'>Thanks for reaching out! We've received your message and will get back to you soon.</p>
    </div>
  );
}
