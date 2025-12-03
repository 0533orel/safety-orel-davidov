import React from 'react';
import FormInput from "../../common/FormInput";
import FormSelect from "../../common/FormSelect";
import {
    eventSeverityArr, resultsArr, injuriesLevelArr
} from "../../../data/formOptions";
import { checkIfHasCasualties } from "../../../utils/formHelpers";
import { type StepProps } from "../../../types/formSteps";

const SummaryStep: React.FC<StepProps> = ({ formData, handleChange, errors }) => {
    return (
        <>
            <FormInput
                label="תיאור האירוע"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                maxLength={800}
                fullWidth
                placeholder="תיאור האירוע (עד 800 תווים)"
                error={!!errors.description}
                helperText={errors.description}
                required
            />
            <FormSelect
                name="eventSeverity"
                label="חומרת האירוע"
                value={formData.eventSeverity}
                options={eventSeverityArr}
                onChange={handleChange}
                error={!!errors.eventSeverity}
                helperText={errors.eventSeverity}
                required
            />
            <FormSelect
                name="result"
                label="תוצאות האירוע"
                value={formData.result}
                options={resultsArr}
                onChange={handleChange}
                error={!!errors.result}
                helperText={errors.result}
                required
            />
            {checkIfHasCasualties(formData.result) && (
                <FormSelect
                    name="injurySeverity"
                    label="חומרת הפגיעה"
                    value={formData.injurySeverity || "בחר/י"}
                    options={injuriesLevelArr}
                    onChange={handleChange}
                    error={!!errors.injurySeverity}
                    helperText={errors.injurySeverity}
                    required
                />
            )}
            <FormInput
                label="המלצות ראשוניות (עד 800 תווים)"
                name="recommendations"
                value={formData.recommendations}
                onChange={handleChange}
                multiline
                rows={4}
                maxLength={800}
                required={false}
            />
        </>
    );
};

export default SummaryStep;