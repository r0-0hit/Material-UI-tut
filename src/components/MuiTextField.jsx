import { Stack, TextField, InputAdornment, IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'

const MuiTextField = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [email, setEmail] = useState('')

	return (
		<Stack spacing={4} padding={4}>
			<Stack spacing={2} padding={2} direction='row'>
				<TextField label='Name' variant='outlined' />
				<TextField label='Name' variant='filled' />
				<TextField label='Name' variant='standard' />
			</Stack>
			<Stack spacing={2} padding={2} direction='row'>
				<TextField
					label='Small secondary'
					variant='outlined'
					size='small'
					color='secondary'
				/>
				<TextField
					label='Medium success'
					variant='filled'
					size='medium'
					color='success'
				/>
				<TextField
					label='Large error'
					variant='standard'
					size='large'
					color='error'
				/>
			</Stack>
			<Stack spacing={2} padding={2} direction='row'>
				<TextField
					label='Email'
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
					error={!email.includes('@')}
					helperText={
						email.includes('@') ? 'Valid email' : 'Invalid email'
					}
				/>
				<TextField
					label='Password'
					type='password'
					helperText='Do not share password'
					disabled
				/>
				<TextField
					label='Read only'
					defaultValue='Hello world'
					slotProps={{ input: { readOnly: true } }}
				/>
				<TextField
					label='Number'
					type='number'
					slotProps={{
						inputLabel: {
							shrink: true,
						},
					}}
				/>
			</Stack>
			<Stack spacing={2} padding={2} direction='row'>
				<TextField
					label='Amount'
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position='start'>
									$
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Weight'
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position='end'>
									kg
								</InputAdornment>
							),
						},
					}}
				/>
				<TextField
					label='Password'
					type={showPassword ? 'text' : 'password'}
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										onClick={() =>
											setShowPassword(prev => !prev)
										}
									>
										{showPassword ? (
											<VisibilityOffIcon />
										) : (
											<VisibilityIcon />
										)}
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
			</Stack>
		</Stack>
	)
}

export default MuiTextField
