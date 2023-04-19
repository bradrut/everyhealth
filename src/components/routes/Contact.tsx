import { Title } from '@mantine/core';

import './Contact.css';
import ContactForm from '../ContactForm';

export default function Contact() {

  return (
    <div style={{ marginTop: '8vh', padding: '30px' }}>
      <Title
        order={2}
        size="h1"
        // sx={(theme) => ({ fontFamily: 'Verdana, serif' })}
        weight={500}
        align="center"
        className='contact-form-title contact-form-heading'
      >
        Get in touch
      </Title>
      <p className='contact-form-subtitle contact-form-heading'>See an issue with the site? Have an idea? Just want to say thanks?<br/>Send us a message!</p>
      <ContactForm />
    </div>
  );
}
