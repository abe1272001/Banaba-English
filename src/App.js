import React, { useEffect, useState } from 'react';
import './styles/app.scss';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RightSidebar from './components/RightSidebar';
import path from './utils/path';
// Navbar 滾動隱藏
// const HideOnScroll = React.forwardRef((props, ref) => {
// 	const { children } = props;

// 	const trigger = useScrollTrigger();

// 	return (
// 		<Slide appear={false} direction="down" in={!trigger} ref={ref}>
// 			{children}
// 		</Slide>
// 	);
// });

// App styles
const useStyles = makeStyles((theme) => ({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
	},
}));

const defaultProps = {
	bgcolor: 'background.paper',
	m: 1,
	border: 1,
	style: { width: '5rem', height: '5rem' },
};

function App(props) {
	const classes = useStyles();
	// const urlPath = path();

	const [open, setOpen] = useState(false);
	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setOpen(!open);
	};

	return (
		<div className="App">
			<CssBaseline />
			<Navbar toggleDrawer={toggleDrawer} open={open} />
			<RightSidebar open={open} toggleDrawer={toggleDrawer} />
			<Hero className={classes.mt10vh} />
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
