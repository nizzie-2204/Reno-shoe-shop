import {
	Box,
	Divider,
	Drawer,
	IconButton,
	ListItem,
	ListItemText,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { useStyles } from './styles'
const Dropdown = ({ open, onDrawerClose }) => {
	const classes = useStyles()
	const theme = useTheme()

	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<Box className={classes.drawerHeader}>
				<IconButton onClick={onDrawerClose}>
					{theme.direction === 'ltr' && <BiChevronLeft />}
				</IconButton>
			</Box>
			<Divider />
			<ListItem className={classes.listDropdown}>
				<ListItemText
					disableTypography
					primary={`Home`}
					className={classes.listDropdownLink}
				/>

				<ListItemText
					disableTypography
					primary={`Shop`}
					className={classes.listDropdownLink}
				/>

				<ListItemText
					disableTypography
					primary={`Contact us`}
					className={classes.listDropdownLink}
				/>
				<ListItemText
					disableTypography
					primary={`About us`}
					className={classes.listDropdownLink}
				/>
				<ListItemText
					disableTypography
					primary={`Login`}
					className={classes.listDropdownLink}
				/>
			</ListItem>
		</Drawer>
	)
}

export default Dropdown
