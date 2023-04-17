import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import './Contact.css';

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    // <div className='contact-form-card'>
      <form className='contact-form' onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          // sx={(theme) => ({ fontFamily: 'Verdana, serif' })}
          weight={900}
          align="center"
          className='contact-form-title contact-form-heading'
        >
          Get in touch
        </Title>
        <p className='contact-form-subtitle contact-form-heading'>See an issue with the site? Have an idea? Just want to say thanks?<br/>Send us a message!</p>
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
          <Button className='contact-form-btn' type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    // </div>
  );
}
