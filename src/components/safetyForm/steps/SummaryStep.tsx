import React from 'react';
import FormInput from "../../common/FormInput";
import FormSelect from "../../common/FormSelect";
import {
    eventSeverityArr, resultsArr, injuriesLevelArr
} from "../../../data/formOptions";
import { checkIfHasCasualties } from "../../../utils/formHelpers";
import { type StepProps } from "../../../types/formSteps";
import { Button, Box, Typography, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from "@mui/icons-material/Delete";

const SummaryStep: React.FC<StepProps> = ({ formData, handleChange, errors, setFieldValue }) => {
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

            <Box sx={{ my: 2, border: '1px dashed grey', p: 2, borderRadius: 1, textAlign: 'center' }}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="raised-button-file"
                    type="file"
                    name="image"
                    onChange={handleChange}
                />
                <label htmlFor="raised-button-file">
                    <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />}>
                        העלאת תמונה
                    </Button>
                </label>

                {formData.image && (
                    <Typography variant="body2" sx={{ mt: 1, color: 'success.main' }}>
                        קובץ נבחר: {formData.image.name}
                    </Typography>
                )}

                {!formData.image && formData.imagePath && (
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        קיימת תמונה שמורה במערכת (העלאת קובץ חדש תחליף אותה)
                    </Typography>
                )}
            </Box>

            {!formData.image && formData.imagePath && (
                <Box sx={{ mt: 2, position: 'relative', display: 'inline-block' }}>
                    <img
                        src={`http://localhost:3000/uploads/${formData.imagePath}`}
                        alt="Preview"
                        style={{ maxHeight: 100, borderRadius: 4 }}
                    />
                    <IconButton
                        size="small"
                        color="error"
                        sx={{ position: 'absolute', top: -10, right: -10, bgcolor: 'background.paper' }}
                        onClick={() => {
                            setFieldValue('deleteImage', true);
                            setFieldValue('imagePath', '');
                        }}
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>
            )}

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