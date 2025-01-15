import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
} from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MiuCheckBox = () => {
	const [accept, setAccept] = useState(false)
	const [skills, setSkills] = useState([])
	console.log(skills)

	const handelSkillChange = e => {
		skills.includes(e.target.value)
			? setSkills(prevSkills =>
					prevSkills.filter(skill => skill !== e.target.value)
			  )
			: setSkills([...skills, e.target.value])
	}

	return (
		<Box>
			<Box>
				<FormControlLabel
					control={
						<Checkbox
							checked={accept}
							onChange={() => setAccept(prev => !prev)}
						/>
					}
					label='I accept terms and conditions'
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={accept}
					onChange={() => setAccept(prev => !prev)}
					color='error'
				/>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Select your skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							control={
								<Checkbox
									checked={skills.includes('html')}
									onChange={handelSkillChange}
								/>
							}
							label='HTML'
							value='html'
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={skills.includes('css')}
									onChange={handelSkillChange}
								/>
							}
							label='CSS'
							value='css'
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={skills.includes('js')}
									onChange={handelSkillChange}
								/>
							}
							label='JS'
							value='js'
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	)
}

export default MiuCheckBox
