import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material'
import { useState } from 'react'

const MuiRadioGroup = () => {
	const [gender, setGender] = useState('')
	console.log(gender)

	return (
		<Box>
			<FormControl error>
				<FormLabel id='gender-group-label'>Gender</FormLabel>
				<RadioGroup
					aria-labelledby='gender-group-label'
					name='gender-group'
					value={gender}
					onChange={e => setGender(e.target.value)}
					row
				>
					<FormControlLabel
						control={<Radio size='small' color='secondary' />}
						label='Male'
						value='male'
					/>
					<FormControlLabel
						control={<Radio />}
						label='Female'
						value='female'
					/>
					<FormControlLabel
						control={<Radio />}
						label='Other'
						value='other'
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	)
}

export default MuiRadioGroup
