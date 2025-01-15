import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Rating, Stack } from '@mui/material'
import { useState } from 'react'

const MuiRating = () => {
	const [value, setValue] = useState(3)
	console.log(value)

	const handelChange = (e, newValue) => {
		setValue(newValue)
	}

	return (
		<Stack spacing={2}>
			<Rating
				value={value}
				onChange={handelChange}
				precision={0.5}
				size='small'
				icon={<Favorite fontSize='inherent' />}
				emptyIcon={<FavoriteBorder fontSize='inherent' />}
				// readOnly
				highlightSelectedOnly
			/>
		</Stack>
	)
}

export default MuiRating
