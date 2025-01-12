import { Typography } from '@mui/material'

const MuiTypography = () => {
	return (
		<div>
			<Typography variant='h1'>h1 Heading</Typography>
			<Typography variant='h2'>h2 Heading</Typography>
			<Typography variant='h3'>h3 Heading</Typography>
			<Typography
				variant='h4'
				component='h1'
				gutterBottom
			>
				h4 Heading
			</Typography>
			<Typography variant='h5'>h5 Heading</Typography>
			<Typography variant='h6'>h6 Heading</Typography>
			<Typography variant='subtitle1'>Subtitle 1</Typography>
			<Typography variant='subtitle2'>Subtitle 2</Typography>

			{/* default body1 */}
			<Typography variant='body1'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
				quidem a, inventore neque, quasi quae est eius mollitia ratione
				reprehenderit consequatur accusantium nobis modi libero ducimus
				at aliquid, fugit esse.
			</Typography>
			<Typography variant='body2'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
				quidem a, inventore neque, quasi quae est eius mollitia ratione
				reprehenderit consequatur accusantium nobis modi libero ducimus
				at aliquid, fugit esse.
			</Typography>
		</div>
	)
}

export default MuiTypography
