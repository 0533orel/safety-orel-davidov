import React from 'react';
import FormSelect from "../../common/FormSelect";
import {
    unitActivityTypeArr, personalActivityTypeArr, categoryArr, weatherArr
} from "../../../data/formOptions";
import { type StepProps } from "../../../types/formSteps";

const ClassificationStep: React.FC<StepProps> = ({ formData, handleChange, errors }) => {
    return (
        <>
            <FormSelect
                name="unitActivity"
                label="מאפיין פעילות היחידה"
                value={formData.unitActivity}
                options={unitActivityTypeArr}
                onChange={handleChange}
                error={!!errors.unitActivity}
                helperText={errors.unitActivity}
                required
            />
            <FormSelect
                name="personalActivity"
                label="מאפיין פעילות הפרט"
                value={formData.personalActivity}
                options={personalActivityTypeArr}
                onChange={handleChange}
                error={!!errors.personalActivity}
                helperText={errors.personalActivity}
                required
            />
            <FormSelect
                name="category"
                label="קטגוריה"
                value={formData.category}
                options={categoryArr}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
                required
            />
            <FormSelect
                name="weather"
                label="מזג אוויר"
                value={formData.weather}
                options={weatherArr}
                onChange={handleChange}
                error={!!errors.weather}
                helperText={errors.weather}
                required
            />
        </>
    );
};

export default ClassificationStep;