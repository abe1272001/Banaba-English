import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

const RightSidebar = (props) => {
	const { open, toggleDrawer } = props;
	const classes = useStyles();

	//從上層傳遞 open, toggleDrawer 的 props
	// const [open, setOpen] = useState(false);
	// const toggleDrawer = (open) => (event) => {
	// 	if (
	// 		event &&
	// 		event.type === 'keydown' &&
	// 		(event.key === 'Tab' || event.key === 'Shift')
	// 	) {
	// 		return;
	// 	}
	// 	setOpen(!open);
	// };

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(open)}
			onKeyDown={toggleDrawer(open)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={toggleDrawer(open)}
				onOpen={toggleDrawer(open)}
			>
				{list(open)}
			</SwipeableDrawer>
		</div>
	);
};

export default RightSidebar;
