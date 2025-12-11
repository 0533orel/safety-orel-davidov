import { type SelectChangeEvent } from "@mui/material";
import { type SafetyEvent } from "./safetyEvent";
import { type ValidationErrors } from "../utils/validation";

export type HandleChangeType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
) => void;

export interface StepProps {
    formData: SafetyEvent;
    handleChange: HandleChangeType;
    errors: ValidationErrors;
    setFieldValue: (name: keyof SafetyEvent, value: unknown) => void;
}