import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('Blue Llama Consulting Co.');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="company" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="Blue Llama Consulting Co." control={<Radio />} label="Blue Llama Consulting Co." />
                <FormControlLabel value="Et Cetera Systems" control={<Radio />} label="Et Cetera Systems" />
                <FormControlLabel value="Scranton Select Security" control={<Radio />} label="Scranton Select Security" />
            </RadioGroup>
        </FormControl>
    );
}
