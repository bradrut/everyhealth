import { useState } from 'react';

import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import './routes/Contact.css';

export default function ContactForm() {
  const [ nameValid, setNameValid ] = useState(false);
  const [ emailValid, setEmailValid ] = useState(false);
  const [ subjectValid, setSubjectValid ] = useState(false);
  const [ messageValid, setMessageValid ] = useState(false);

  const btnOnSubmit = (event: any) => {
    console.log('entered onSubmit');
    if (!(nameValid && emailValid && subjectValid && messageValid)) {
      event.preventDefault();
      // TODO: Display additional form-level error message
    }
  };

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => {
        if (value.trim().length < 2) {
          setNameValid(false);
          return 'Name must have at least 2 letters';
        } else {
          setNameValid(true);
          return null;
        }
      },
      email: (value) => {
        if (!/^\S+@\S+$/.test(value)) {
          setEmailValid(false);
          return 'Invalid email address';
        } else {
          setEmailValid(true);
          return null;
        }
      },
      subject: (value) => {
        if (value.trim().length === 0) {
          setSubjectValid(false);
          return 'Subject must not be empty';
        } else {
          setSubjectValid(true);
          return null;
        }
      },
      message: (value) => {
        if (value.trim().length === 0) {
          setMessageValid(false);
          return 'Message must not be empty';
        } else {
          setMessageValid(true);
          return null;
        }
      },
    },
    validateInputOnBlur: true,
  });

  return (
    <form className='contact-form' onSubmit={(e) => btnOnSubmit(e)} action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="a8021967-dec3-4d4b-859b-6a939064ea63"/>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          color='white !important'
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group position="center" mt="xl">
        <Button id='contactFormSubmitBtn' key='contact-form-submit-btn' className='contact-form-btn' type="submit" size="md">
          Send message
        </Button>
      </Group>

      <input type="hidden" name="redirect" value={process.env.REACT_APP_WEBSITE_DOMAIN + 'contact/success'}/>
    </form>
  );
}
