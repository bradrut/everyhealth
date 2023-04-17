import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
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

import '../App.css';
import { COLORS } from '../common/colors';
import LogoIcon from '../assets/leaves-icon.svg';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    marginBottom: '1rem !important',
    border: 'none',
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'left',
    textDecoration: 'none',
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
    // borderRadius: theme.radius.sm,
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
      color: COLORS.secondaryHighlight + ' !important',
      paddingBottom: '0.6rem 0.75rem',
      fontWeight: 'bold',
      borderBottom: '2px solid ' + COLORS.secondaryHighlight,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  /**
   * Set activeLink based on the current url pathname. This ensures that the active link is accurate
   * even after a hard refresh. 
   */
  let location = useLocation();
  const [ activeLink, setActiveLink ] =
  useState((links.find((link) => ('/' + link.link === location.pathname)))?.link);

  const [ opened, { toggle } ] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const linkComponents = links.map((link) => (
    <div>
      <Link
        key={link.label}
        to={link.link}
        className={cx(classes.link, { [classes.linkActive]: activeLink === link.link })}
        onClick={(event: any) => {
          setActiveLink(link.link);
        }}
      >
        {link.label}
      </Link>
    </div>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root + ' App-background-gradient'}>
      <Container className={classes.header}>
        <div>
          <Link to={'/'} rel="noopener noreferrer" className={classes.logoContainer}>
            <img src={LogoIcon} style={{ maxWidth: '44px' }}></img>
            <p style={{ color: COLORS.primaryHighlight, fontFamily: 'verdana', fontSize: 20, float: 'left', lineHeight: .8 }}>Every
              <span style={{ color: COLORS.white }}>Health
                <span style={{ fontSize: '13px' }}>
                  <br/>Resources & Care
                </span>
              </span>
            </p>
          </Link>
        </div>
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