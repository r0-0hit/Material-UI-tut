import { Button, Stack, ButtonGroup } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton'

const MuiButton = () => {
	return (
		<Stack padding={4}>
			<Stack padding={2} spacing={2} direction='row'>
				<Button variant='text'>Text</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
			</Stack>

			<Stack direction='row' spacing={2} padding={2}>
				<Button>Primary</Button>
				<Button disabled>Disabled</Button>
				<Button href='https://www.google.co.in/'>Link</Button>
			</Stack>

			<Stack direction='row' spacing={2} padding={2}>
				<Button variant='contained'>Primary</Button>
				<Button variant='contained' disabled>
					Disabled
				</Button>
				<Button variant='contained' href='https://www.google.co.in/'>
					Link
				</Button>
			</Stack>

			<Stack direction='row' spacing={2} padding={2}>
				<Button variant='outlined'>Primary</Button>
				<Button variant='outlined' disabled>
					Disabled
				</Button>
				<Button variant='outlined' href='https://www.google.co.in/'>
					Link
				</Button>
			</Stack>

			<Stack padding={2} spacing={2} direction='row'>
				<Button
					variant='contained'
					color='primary'
					disableElevation
					disableRipple
				>
					Primary
				</Button>
				<Button variant='contained' color='secondary'>
					Primary
				</Button>
				<Button variant='contained' color='error'>
					Primary
				</Button>
				<Button variant='contained' color='warning'>
					Primary
				</Button>
				<Button variant='contained' color='success'>
					Primary
				</Button>
				<Button variant='contained' color='info'>
					Primary
				</Button>
				<Button variant='contained' color='grey'>
					Primary
				</Button>
				<Button variant='contained' color='common'>
					Primary
				</Button>
			</Stack>
			<Stack padding={2} spacing={2} display='block' direction='row'>
				<Button variant='contained' size='small'>
					Small
				</Button>
				<Button variant='contained' size='medium'>
					Medium
				</Button>
				<Button variant='contained' size='large'>
					Large
				</Button>
			</Stack>
			<Stack direction='row' spacing={2} padding={2}>
				<Button variant='contained' startIcon={<DeleteIcon />}>
					Delete
				</Button>
				<Button
					variant='contained'
					endIcon={<SendIcon />}
					onClick={() => alert('Clicked!')}
				>
					Send
				</Button>
			</Stack>
			<Stack spacing={2} padding={2} display='block'>
				<IconButton aria-label='send' color='secondary'>
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction='row'>
				<ButtonGroup
					variant='contained'
					size='small'
					color='secondary'
					orientation='vertical'
					aria-label='alignment button group'
				>
					<Button onClick={() => alert('From left!')}>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	)
}

export default MuiButton
