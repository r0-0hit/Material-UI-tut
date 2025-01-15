import { Box } from '@mui/material'

const MuiLayout = () => {
	return (
		<>
			<Box
				// component={'span'}
				sx={{
					backgroundColor: 'primary.main',
					color: 'white',
					height: '100px',
					width: '100px',
					padding: '16px',
					'&:hover': {
						backgroundColor: 'primary.light',
					},
				}}
			>
				MuiLayout
			</Box>
			<Box
				display={'flex'}
				height={'100px'}
				width={'100px'}
				p={2}
				bgcolor={'success.light'}
			></Box>
		</>
	)
}

export default MuiLayout
