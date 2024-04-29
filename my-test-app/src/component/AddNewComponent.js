import { Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

const AddNewComponent = ({ handleClose, open, handleSubmit, data: oldInfo }) => {
    const [data, setData] = useState({
        inputType: 'text',
        placeholder: 'Enter ', disable: false,
        label: 'Enter ', ...oldInfo
    })
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={'sm'}
        >
            <DialogTitle>Add New Component</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={'Enter Label'}
                    value={data?.label}
                    onChange={(e) => setData({ ...data, label: e.target.value })}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={'Enter Placeholder'}
                    value={data?.placeholder}
                    onChange={(e) => setData({ ...data, placeholder: e.target.value })}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={'Select Input Type'}
                    select
                    value={data?.inputType}
                    onChange={(e) => setData({ inputType: e.target.value, label: data?.label, placeholder: data?.placeholder, options: data?.options || [], })}
                    fullWidth
                >
                    <MenuItem value={'text'}>Text</MenuItem>
                    <MenuItem value={'select'}>Select</MenuItem>
                    <MenuItem value={'number'}>Number</MenuItem>
                    <MenuItem value={'currency'}>Currency</MenuItem>
                    <MenuItem value={'password'}>Password</MenuItem>
                    <MenuItem value={'checkbox'}>Checkbox</MenuItem>
                    <MenuItem value={'radio'}>Radio</MenuItem>

                </TextField>
                {

                }
                {data?.inputType === 'select' && <TextField
                    label={'Enter Options Seperated By Comma'}
                    margin="dense"
                    fullWidth
                    value={data?.options?.join(',')}
                    onChange={(e) => setData({ ...data, options: e.target.value.split(',') })}
                />}
                {(data?.inputType === 'text' || data?.inputType === 'number' || data?.inputType === 'currency') && <TextField
                    label={'Enter Max Length'}
                    margin="dense"
                    fullWidth
                    value={data?.maxLength}
                    onChange={(e) => setData({ ...data, maxLength: e.target.value })}
                />}
                {(data?.inputType === 'text' || data?.inputType === 'number' || data?.inputType === 'currency') && <TextField
                    label={'Enter Min Length'}
                    margin="dense"
                    fullWidth
                    value={data?.minLength}
                    onChange={(e) => setData({ ...data, maxLength: e.target.value })}
                />}
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label={'Select Required Type'}
                    select
                    value={data?.required ? 'required' : 'notRequired'}
                    onChange={(e) => setData({ ...data, required: e.target.value === 'required' ? true : false })}
                    fullWidth
                >
                    <MenuItem value={'required'}>Required</MenuItem>
                    <MenuItem value={'notRequired'}>Not Required</MenuItem>
                </TextField>

                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={data.disabled ? 'Disable' : 'Enable'}
                    onChange={(e) => setData({ ...data, disabled: e.target.value === 'Enable' ? false : true })}
                >
                    <FormControlLabel value="Enable" control={<Radio />} label="Enable" />
                    <FormControlLabel value="Disable" control={<Radio />} label="Disable" />
                </RadioGroup>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => handleSubmit(data)}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNewComponent