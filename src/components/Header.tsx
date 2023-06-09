import { Link } from 'react-router-dom';
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

const HEADER_HEIGHT = rem(58);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: 999,
    width: '100%',
    marginBottom: '1rem !important',
    border: 'none',
    backdropFilter: 'blur(15px)',
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
    marginLeft: '2vw',
    marginRight: '2vw',
    fontFamily: 'Verdana',
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
    marginLeft: '.3rem',
    // marginRight: ,
    // borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#FFF',
    // fontSize: theme.fontSizes.sm,
    fontSize: '13px',
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
      // paddingBottom: '0.6rem 0.75rem',
      paddingBottom: '.7rem',
      // translate: '0px 1px',
      fontWeight: 'bold',
      borderBottom: '2px solid ' + COLORS.secondaryHighlight,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
  activeLink: string | undefined;
  setActiveRoute: Function; // Callback to update the activeRoute state on the App component
}

export function HeaderResponsive({ links, activeLink, setActiveRoute }: HeaderResponsiveProps) {

  const [ opened, { toggle } ] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const linkComponents = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      rel="noopener noreferrer"
      className={cx(classes.link, { [classes.linkActive]: activeLink === link.link })}
      onClick={(event: any) => {
        // Update the activeRoute state on the App component. This will re-render this header and ensure
        // that the appropriate activeLink is passed in, so that the UI displays correctly.
        setActiveRoute(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root + ' header-background'}>
      <Container className={classes.header}>
        <div>
          <Link
            key={'logoLink'}
            to={''}
            rel="noopener noreferrer"
            className={classes.logoContainer}
            onClick={(event: any) => {
              // Update the activeRoute state on the App component. This will re-render this header and ensure
              // that the appropriate activeLink is passed in, so that the UI displays correctly.
              setActiveRoute('');
            }}
          >
            <img src={LogoIcon} style={{ maxWidth: '44px' }} alt='Green leaf logo icon'></img>
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
      <Divider style={{ maxWidth: '98vw', marginLeft: 'auto', marginRight: 'auto' }} color={COLORS.header} size={'xs'}/>
    </Header>
  );
}