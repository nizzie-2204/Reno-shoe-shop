import { Box } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import { BiBell, BiPodcast, BiTargetLock } from 'react-icons/bi'
import logo from '../../../assets/images/logo.jpg'

const Header = () => {
	const classes = useStyles()
	return (
		<Box className={classes.topbar}>
			<Box className={classes.topbarWrapper}>
				<Box className={classes.topLeft}>
					<img src={logo} alt="logo" className={classes.logo} />
				</Box>
				<Box className={classes.topRight}>
					<Box className={classes.topbarIconContainer}>
						<BiBell style={{ fontSize: 25 }} />
						<span className={classes.topIconBadge}>2</span>
					</Box>
					<Box className={classes.topbarIconContainer}>
						<BiPodcast style={{ fontSize: 25 }} />
						<span className={classes.topIconBadge}>2</span>
					</Box>
					<Box className={classes.topbarIconContainer}>
						<BiTargetLock style={{ fontSize: 25 }} />
					</Box>
					<img
						src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
						alt="admin"
						className={classes.topAvatar}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
