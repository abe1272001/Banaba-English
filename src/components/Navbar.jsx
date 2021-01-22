import React, { useState } from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		// marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1),
	},
	height: {
		// minHeight: '10vh',
	},
}));

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

function Navbar(props) {
	const classes = useStyles();
	const preventDefault = (event) => {
		event.preventDefault();
		console.log('click');
	};

	const { toggleDrawer, open } = props;

	//color="transparent" 加在 AppBar 上會變透明
	return (
		<React.Fragment>
			<HideOnScroll>
				<AppBar className={classes.height}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Banabas
						</Typography>
						<Hidden smDown>
							<Link
								href="#"
								onClick={preventDefault}
								color="inherit"
								style={{ textDecoration: 'none' }}
								className={classes.link}
							>
								<Button color="inherit">About</Button>
							</Link>
							<Link
								href="#"
								onClick={preventDefault}
								color="inherit"
								style={{ textDecoration: 'none' }}
								className={classes.link}
							>
								<Button color="inherit">Services</Button>
							</Link>
							<Link
								href="#"
								onClick={preventDefault}
								color="inherit"
								style={{ textDecoration: 'none' }}
								className={classes.link}
							>
								<Button color="inherit">Contact</Button>
							</Link>
						</Hidden>
						<Hidden mdUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer(open)}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</React.Fragment>
	);
}

export default Navbar;

//因是 component 所以以用 Navbar 滑動 要加上這段
// export default React.forwardRef((props, ref) => (
// 	<Navbar {...props} forwardedRef={ref} />
// ));
