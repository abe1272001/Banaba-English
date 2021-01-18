import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slide from '@material-ui/core/Slide';

// Navbar 滾動隱藏
function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

// App styles
const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
});

const defaultProps = {
	bgcolor: 'background.paper',
	m: 1,
	border: 1,
	style: { width: '5rem', height: '5rem' },
};

function App(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className="App">
			<CssBaseline />
			<HideOnScroll {...props}>
				<Navbar />
			</HideOnScroll>
			<Hero />

			<Container>
				<Box my={2}>
					{[...new Array(12)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
						)
						.join('\n')}
				</Box>
			</Container>
			<header className="App-header">
				<h1>Hello World</h1>
				<Button variant="contained" color="primary" className={classes.root}>
					press me
				</Button>
				<Box display="flex" justifyContent="center">
					<Box borderColor="primary.main" {...defaultProps} />
					<Box borderColor="secondary.main" {...defaultProps} />
					<Box borderColor="error.main" {...defaultProps} />
					<Box borderColor="grey.500" {...defaultProps} />
					<Box borderColor="text.primary" {...defaultProps} />
				</Box>
				<Box
					component="span"
					display="block"
					p={1}
					m={1}
					bgcolor="background.paper"
				>
					block
				</Box>
				<Box
					component="span"
					display="block"
					p={1}
					m={1}
					bgcolor="primary.main"
				>
					block
				</Box>
			</header>
		</div>
	);
}

export default App;
