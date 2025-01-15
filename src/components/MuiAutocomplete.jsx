import { Autocomplete, Stack, TextField } from '@mui/material'
import { useState } from 'react'

const MuiAutocomplete = () => {
	const [value, setValue] = useState(null)
	const [skill, setSkill] = useState(null)
	console.log({ value })
	console.log(skill)

	const skills = ['HTML', 'CSS', 'JavaScript', 'TypeSscript', 'React']
	const skillsOpt = skills.map((skill, index) => ({
		id: index + 1,
		label: skill,
	}))

	return (
		<Stack spacing={2} width={'250px'}>
			<Autocomplete
				options={skills}
				renderInput={param => <TextField {...param} label='Skills' />}
				value={value}
				onChange={(e, newValue) => setValue(newValue)}
			/>
			<Autocomplete
				options={skillsOpt}
				renderInput={param => <TextField {...param} label='Skills' />}
				value={skill}
				onChange={(e, newValue) => setSkill(newValue)}
			/>
		</Stack>
	)
}

export default MuiAutocomplete
