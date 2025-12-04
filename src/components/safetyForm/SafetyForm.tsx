import React, { useState } from "react";
import { Typography,Stepper, Step, StepLabel, Box, Button } from "@mui/material";
import { useSafetyForm } from "../../hooks/useSafetyForm";
import BasicInfoStep from "./steps/BasicInfoStep";
import ClassificationStep from "./steps/ClassificationStep";
import SummaryStep from "./steps/SummaryStep";
import { type StepProps } from "../../types/formSteps"; // <---

const steps = ['פרטים בסיסיים', 'סיווג ונתונים', 'סיכום ותוצאות'];

const SafetyForm: React.FC = () => {
    const { formData, errors, handleChange, handleSubmit, validateStep } = useSafetyForm();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(activeStep)) {
            handleSubmit(e);
            setActiveStep(0);
        }
    };

    const renderStepContent = (step: number) => {
        const stepProps: StepProps = { formData, handleChange, errors };

        switch (step) {
            case 0: return <BasicInfoStep {...stepProps} />;
            case 1: return <ClassificationStep {...stepProps} />;
            case 2: return <SummaryStep {...stepProps} />;
            default: return null;
        }
    };

    return (
        <Box
            component="form"
            className="form-container"
            sx={{ p: 2 }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{ textAlign: 'center', mb: 4, fontFamily: 'Arial, sans-serif' }}
            >
                דיווח אירוע בטיחות
            </Typography>

            <Box sx={{ width: '90%', mx: 'auto', mb: 4 }}>
                <Stepper
                    activeStep={activeStep}
                    sx={{
                        '& .MuiStepLabel-label': {
                            fontSize: '1rem',
                            fontWeight: 'bold',
                        },
                        '& .MuiStepIcon-root': {
                            color: 'grey.400',
                        },
                        '& .Mui-active .MuiStepIcon-root': {
                            color: 'primary.main',
                        },
                        '& .Mui-completed .MuiStepIcon-root': {
                            color: 'success.main',
                        },
                    }}
                >

                {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <Box sx={{ minHeight: 300 }}>
                {renderStepContent(activeStep)}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, gap: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    type="button"
                >
                    חזור
                </Button>

                <Box sx={{ flex: '1 1 auto' }} />

                {activeStep === steps.length - 1 ? (
                    <Button
                        onClick={onFormSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        type="button"
                    >
                        שמור אירוע
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        variant="contained"
                        color="primary"
                        type="button"
                    >
                        הבא
                    </Button>
                )}
            </Box>
        </Box>
    );

};

export default SafetyForm;