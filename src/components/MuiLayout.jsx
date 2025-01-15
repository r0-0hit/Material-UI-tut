import { Box, Divider, Grid2, Stack } from '@mui/material'

const MuiLayout = () => {
	return (
		<Stack>
			<Stack
				direction={'row'}
				spacing={2}
				sx={{ border: '1px solid' }}
				divider={<Divider orientation='vertical' flexItem />}
				padding={2}
			>
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
			</Stack>
			<Grid2 container my={4} spacing={2}>
				<Grid2 size={8}>
					<Box bgcolor='primary.light' p={2}>
						Item 1
					</Box>
				</Grid2>
				<Grid2 size={4}>
					<Box bgcolor='primary.light' p={2}>
						Item 2
					</Box>
				</Grid2>
				<Grid2 size={4}>
					<Box bgcolor='primary.light' p={2}>
						Item 3
					</Box>
				</Grid2>
				<Grid2 size={8}>
					<Box bgcolor='primary.light' p={2}>
						Item 4
					</Box>
				</Grid2>
			</Grid2>
			{/* mutiple breakpoints */}
			<Grid2 container rowSpacing={1} columnSpacing={2}>
				<Grid2 size={{ xs: 6, md: 8 }}>
					<Box bgcolor='primary.light' p={2}>
						xs=6 md=8
					</Box>
				</Grid2>
				<Grid2 size={{ xs: 6, md: 4 }}>
					<Box bgcolor='primary.light' p={2}>
						xs=6 md=4
					</Box>
				</Grid2>
				<Grid2 size={{ xs: 6, md: 4 }}>
					<Box bgcolor='primary.light' p={2}>
						xs=6 md=4
					</Box>
				</Grid2>
				<Grid2 size={{ xs: 6, md: 8 }}>
					<Box bgcolor='primary.light' p={2}>
						xs=6 md=8
					</Box>
				</Grid2>
			</Grid2>
		</Stack>
	)
}

export default MuiLayout
