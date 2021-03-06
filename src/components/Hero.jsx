import React from 'react';
import {
	createMuiTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

//Hero Animation
// import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
	hero: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '90vh',
		minHeight: '35rem',
		// backgroundColor: 'yellow',
		backgroundColor: 'rgb(255, 253, 247)',
		overflow: 'hidden',
		// marginTop: '10vh', //在上方設置 10vh margin
	},
}));

export default function Hero() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<section id="toolbar" className={classes.hero}>
				Hero
			</section>
		</React.Fragment>
	);
}
