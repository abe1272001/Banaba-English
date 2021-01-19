import React from 'react';
import { Link } from '@material-ui/core';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
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

function Navbar(props) {
	const classes = useStyles();
	const preventDefault = (event) => {
		event.preventDefault();
		console.log('click');
	};
	const { forwardedRef } = props;

	return (
		<AppBar ref={forwardedRef} className={classes.height}>
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
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}

//因是 component 所以以用 Navbar 滑動 要加上這段
export default React.forwardRef((props, ref) => (
	<Navbar {...props} forwardedRef={ref} />
));
