import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

interface FormSelectProps {
    name: string;
    label: string;
    value: string;
    options: string[];
    onChange: (event: SelectChangeEvent<string>) => void;
    required?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
    disabled?: boolean;
    displayEmpty?: boolean
    error?: boolean;
    helperText?: string;
    sx?: object;
    labelSx?: object;
    menuSx?: object;
    optionSx?: object;
}

const FormSelect: React.FC<FormSelectProps> = ({
                                                   name,
                                                   label,
                                                   value,
                                                   options,
                                                   onChange,
                                                   required = true,
                                                   fullWidth=true,
                                                   disabled,
                                                   error,
                                                   helperText,
                                                   sx,
                                                   labelSx,
                                                   menuSx,
                                                   optionSx,
                                                   placeholder = "בחר/י",
                                                   displayEmpty = false,
                                               }) => {
    const labelId = `${name}-label`;

    return (
        <FormControl
            fullWidth={fullWidth}
            margin="normal"
            required={required}
            disabled={disabled}
            error={error}
            sx={sx}
        >
            <InputLabel id={labelId} sx={labelSx}>
                {label}
            </InputLabel>

            <Select
                labelId={labelId}
                id={`${name}-select`}
                name={name}
                value={value}
                label={label}
                onChange={onChange}
                displayEmpty={displayEmpty}
                MenuProps={
                    menuSx
                        ? {
                            PaperProps: {
                                sx: menuSx,
                            },
                        }
                        : undefined
                }
            >
                <MenuItem value="">
                    <em>{placeholder}</em>
                </MenuItem>

                {options.map((option) => (
                    <MenuItem
                        key={option}
                        value={option}
                        sx={optionSx}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Select>

            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </FormControl>
    );
};

export default FormSelect;
