import React from 'react';
import { TextField } from '@mui/material';

interface FormInputProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    multiline?: boolean;
    rows?: number;
    maxLength?: number;
    max?: string;
    placeholder?: string;
    required?: boolean;
    fullWidth?: boolean
    min?: string;
    disabled?: boolean;
    readOnly?: boolean;
    helperText?: string;
    error?: boolean;
    sx?: object;
    labelSx?: object;
    inputSx?: object;
}

const FormInput: React.FC<FormInputProps> = ({
                                                 name,
                                                 label,
                                                 value,
                                                 onChange,
                                                 type = "text",
                                                 multiline = false,
                                                 required = false,
                                                 rows,
                                                 maxLength,
                                                 max,
                                                 placeholder,
                                                 fullWidth = true,
                                                 min,
                                                 disabled,
                                                 readOnly,
                                                 helperText,
                                                 error,
                                                 sx,
                                                 labelSx,
                                                 inputSx,
                                             }) => {
    return (
        <TextField
            variant="outlined"
            fullWidth={fullWidth}
            margin="normal"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            multiline={multiline}
            rows={rows}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            helperText={helperText}
            error={error}
            sx={sx}
            slotProps={{
                htmlInput: {
                    maxLength: maxLength,
                    max: max,
                    min: min,
                    readOnly: readOnly,
                    ...(inputSx ? { sx: inputSx } : {}),
                },
                inputLabel: {
                    shrink: type === 'datetime-local' ? true : undefined,
                    ...(labelSx ? { sx: labelSx } : {}),
                },
            }}
        />
    );
};

export default FormInput;
