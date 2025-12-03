import React from 'react';
import { Stack } from '@mui/material';
import FormInput from "../../common/FormInput";
import FormSelect from "../../common/FormSelect";
import { locationArr } from "../../../data/formOptions";
import { checkEventVenue, getCurrentDate, getCurrentTime } from "../../../utils/formHelpers";
import { type StepProps } from "../../../types/formSteps";

const BasicInfoStep: React.FC<StepProps> = ({ formData, handleChange, errors }) => {

    const maxTime = formData.eventDate === getCurrentDate() ? getCurrentTime() : undefined;

    return (
        <>
            <FormInput
                label="יחידות משנה"
                name="unitName"
                value={formData.unitName}
                onChange={handleChange}
                placeholder="כתוב את שם היחידה"
                maxLength={40}
                error={!!errors.unitName}
                helperText={errors.unitName}
                required
            />

            <Stack direction="row" >
                <FormInput
                    label="תאריך האירוע"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    max={getCurrentDate()}
                    error={!!errors.eventDate}
                    helperText={errors.eventDate}
                    required
                    fullWidth
                    sx={{pl: 1}}
                />

                <FormInput
                    label="שעת האירוע"
                    name="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={handleChange}
                    max={maxTime}
                    error={!!errors.eventTime}
                    helperText={errors.eventTime}
                    required
                    fullWidth
                    sx={{pr: 1}}
                />
            </Stack>

            <FormSelect
                name="location"
                label="מקום האירוע"
                value={formData.location}
                options={locationArr}
                onChange={handleChange}
                error={!!errors.location}
                helperText={errors.location}
                required
            />

            {checkEventVenue(formData.location) && (
                <FormInput
                    name="coordinates"
                    label='נ"צ (נקודת ציון)'
                    value={formData.coordinates || ""}
                    onChange={handleChange}
                    placeholder="123456/810000"
                    error={!!errors.coordinates}
                    helperText={errors.coordinates}
                    required
                />
            )}
        </>
    );
};

export default BasicInfoStep;