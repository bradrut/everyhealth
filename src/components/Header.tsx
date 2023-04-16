import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Divider,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { COLORS } from '../common/colors';

const HEADER_HEIGHT = rem(50);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    background: COLORS.background,
    marginBottom: '1rem !important',
    border: 'none',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: 'none',
    marginLeft: '5vw',
    marginRight: '5vw',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    color: 'black',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#FFF',
    fontSize: theme.fontSizes.sm,
    fontWeight: 'normal',

    '&:hover': {
      backgroundColor: 'none',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      color: COLORS.black + ' !important',
      backgroundColor: COLORS.secondaryHighlight,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const linkComponents = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <a href={'#'} rel="noopener noreferrer"><p style={{ color: COLORS.header, fontFamily: 'verdana', fontSize: 20, float: 'left' }}>Care 4 Everyone</p></a>
        <Group spacing={5} className={classes.links}>
          {linkComponents}
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color={COLORS.header} />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {linkComponents}
            </Paper>
          )}
        </Transition>
      </Container>
      <Divider color={COLORS.header} size={'xs'} style={{ maxWidth: '95vw', marginLeft: 'auto', marginRight: 'auto' }}/>
    </Header>
  );
}