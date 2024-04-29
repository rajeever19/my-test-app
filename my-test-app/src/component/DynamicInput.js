import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, InputAdornment, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
// Available Input Type :select input, radio input, checkbox, text input, number input, currency input, password input,
const DynamicInput = ({
    inputType = 'text',
    placeholder = 'Enter Your Text', errorMessage,
    label = null, value, customChangeFunction, ...other
}) => {
    // const [value, setValue] = React.useState('')
    const handleChange = (e) => {
        customChangeFunction(e.target.value)
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, minWidth: '35ch' },
                }}
                noValidate
                autoComplete="off"
            >

                {inputType === 'text' && <TextField
                    id=""
                    label={label}
                    value={value}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    placeholder={placeholder}
                    fullWidth
                    error={other?.error || (other.minLength && value.length < other.minLength) || (other.maxLength && value.length > other.maxLength)}
                    helperText={other?.errorMessage || (other.minLength && value.length < other.minLength) || (other.maxLength && value.length > other.maxLength) ? `${other.minLength} to ${other.maxLength} characters` : ""}


                    {...other}

                />}
                {inputType === 'select' && <TextField
                    id=""
                    select
                    label={label}
                    value={value}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    helperText={errorMessage}

                    placeholder={placeholder}
                    fullWidth
                    {...other}
                >
                    {other?.options?.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}
                        >

                            {option}
                        </MenuItem>
                    ))}
                </TextField>}
                {
                    inputType === 'number' && <TextField
                        id=""
                        label=""
                        value={value}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                        placeholder={placeholder}
                        helperText={errorMessage}

                        error={other?.error || (other.minLength && value.length < other.minLength) || (other.maxLength && value.length > other.maxLength)}
                        helperText={other?.errorMessage || (other.minLength && value.length < other.minLength) || (other.maxLength && value.length > other.maxLength) ? `${other.minLength} to ${other.maxLength} characters` : ""}

                        fullWidth
                        type="number"
                        {...other}
                    />
                }
                {inputType === 'currency' && <TextField
                    id=""
                    label=""
                    value={value}
                    onChange={handleChange}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText={errorMessage}

                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    sx={{ width: '100%' }}
                    placeholder={placeholder}
                    fullWidth
                    type="number"
                    {...other}
                />
                }
                {inputType == 'radio' && <Stack direction='column'>

                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        {...other}
                    >
                        <FormControlLabel value="female" control={<Radio disabled={other.disabled} />} label="Female" />
                        <FormControlLabel value="male" control={<Radio disabled={other.disabled} />} label="Male" />
                    </RadioGroup>
                    <Typography variant='body2' color='red' >{errorMessage}</Typography>
                </Stack>
                }
                {inputType == 'checkbox' &&
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked disabled={other.disabled} />} label={label} {...other} />

                    </FormGroup>}
            </Box>

        </>
    )
}

export default DynamicInput