import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

const MuiSelect = () => {
	const [countries, setCountries] = useState([])
	console.log(countries)

	return (
		<Box width='200px'>
			<TextField
				label='Countries'
				select
				fullWidth
				value={countries}
				onChange={e => setCountries(e.target.value)}
				slotProps={{
					select: {
						multiple: true,
					},
				}}
				color='secondary'
				size='small'
				error
			>
				<MenuItem value='IN'>India</MenuItem>
				<MenuItem value='US'>USA</MenuItem>
				<MenuItem value='AU'>Austrila</MenuItem>
			</TextField>
		</Box>
	)
}

export default MuiSelect
