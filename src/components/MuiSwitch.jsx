import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	console.log(isDarkMode)

	const handelChange = e => {
		setIsDarkMode(prev => !prev)
	}
	return (
		<Box>
			<FormControlLabel
				label='Dark Mode'
				control={
					<Switch checked={isDarkMode} onChange={handelChange} />
				}
			/>
		</Box>
	)
}

export default MuiSwitch
